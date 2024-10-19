const Joi = require('joi');
const Product = require('../models/Product');

exports.create = async(req,res)=>{
    const schema = Joi.object({     
        title: Joi.string().required(),
        description: Joi.string().required(),
        sku: Joi.string().required(),
        category: Joi.string().required(),
        categoryId: Joi.string(),
        subCategory: Joi.string().optional(),
        displayType: Joi.string().required(),
        featureType : Joi.string().required(),
        price: Joi.string().required(),
        url: Joi.string().required(),
        isActive :Joi.boolean().required(),
        storageurl: Joi.optional(),
    })
       try{
        // await schema.validateAsync(req.body);
         let payload = req.body;
        //check if image(s) included in payload
        if(req.files){
            for( let x of req.files){
             x.storageurl =  `Storage/images/${x.filename.replace(' ', '')}`; 
            }    
        }

        payload.storageurlArr = req.files.map((x)=>({'url': x.storageurl }));
        await  Product.create(payload, (err,data)=>{
             if(err)throw err
              return res.status(200).json({ 'message': 'Product added successfully', 'data': data, 'status':200 });
          })

       }catch(err){
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
       }
}

//list of product by page
exports.list = async(req,res)=>{
    var pageNo = parseInt(req.body.startNumber)
     var size = parseInt(req.body.pageSize)
     var query = {}
     if(pageNo < 0 || pageNo === 0) {
             response = {"error" : true,"message" : "invalid page number, should start with 1"};
             return res.json(response)
     }
     query.skip = size * (pageNo - 1)
     query.limit = size;
        try {
            await Product.find({},{},query,(err, data)=>{
                if(err)throw err
                data.sort((a,b)=>{
                    return new Date(b.creation_dt) - new Date(a.creation_dt);
                });

                data.forEach(x => {
                if(x.storageurlArr.length>0){
                    for(let item of x.storageurlArr){
                        if(item.url){                       
                            var getImageName = item.url.match(/\/([^\/?#]+)[^\/]*$/);
                            let url = process.env.HOSTED_API+`uploads/${getImageName[1]}`;
                            item.imageurl = url;
                        }
                    }
                }          
                })
                
            
                Product.countDocuments({},(count_error, count) => {
                    if (err) {
                      return res.json(count_error);
                    }
                    return res.json({
                      'message': 'Products Fetched Successfully',
                      total: count,
                      page: pageNo,
                      pageSize: data.length,
                      'data': data,
                      status: 200
                    });
                  });
                
            })
            
        }catch(err){
            return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
        }
}

//list of id
exports.listbyid = async(req,res)=>{
    var pageNo = parseInt(req.body.startNumber)
     var size = parseInt(req.body.pageSize)
     var query = {}
     if(pageNo < 0 || pageNo === 0) {
             response = {"error" : true,"message" : "invalid page number, should start with 1"};
             return res.json(response)
     }
     query.skip = size * (pageNo - 1)
     query.limit = size;
     let reqparams = {productid: req.params.id};
    // query.productid = req.params.productid;
        try {
            await Product.find(reqparams, {},query,(err, data)=>{
                if(err)throw err
                data.sort((a,b)=>{
                    return new Date(b.creation_dt) - new Date(a.creation_dt);
                });
                
                data.forEach(x => {
                if(x.storageurl){
                var getImageName = x.storageurl.match(/\/([^\/?#]+)[^\/]*$/);
                let url = process.env.HOSTED_API+`uploads/${getImageName[1]}`;
                x.imageurl = url;
                }
                })
            
                Product.countDocuments({},(count_error, count) => {
                    if (err) {
                      return res.json(count_error);
                    }
                    return res.json({
                      'message': 'Products Fetched Successfully',
                      total: count,
                      page: pageNo,
                      pageSize: data.length,
                      'data': data,
                      status: 200
                    });
                  });
                
            })
            
        }catch(err){
            return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
        }
}

//filter
exports.search = async(req,res)=>{
    //  {
    //     "filterCondition":{
    //         "role" : "parent"
    //     },
    //     "startNumber" : 1,
    //     "pageSize" : 10
        
    //     }
        let payload = req.body.filterCondition;
        var pageNo = parseInt(req.body.startNumber)
        var size = parseInt(req.body.pageSize)
        var query = {}
        if(pageNo < 0 || pageNo === 0) {
                response = {"error" : true,"message" : "invalid page number, should start with 1"};
                return res.json(response)
        }
        query.skip = size * (pageNo - 1)
        query.limit = size;

      let filterCond = {};
      let arr = [];
        arr.push(payload);
        for (let x in payload) {
                if (payload[x]) {
                    filterCond[x] = { $regex: payload[x] };
                }
        }
    
         try {
            await Product.find({"$or":[filterCond]}, {},query,(err, data)=>{
                if(err)throw err
                data.sort((a,b)=>{
                    return new Date(b.creation_dt) - new Date(a.creation_dt);
                });

                data.forEach(x => {
                if(x.storageurlArr.length>0){
                    for(let item of x.storageurlArr){
                        if(item.url){                       
                            var getImageName = item.url.match(/\/([^\/?#]+)[^\/]*$/);
                            let url = process.env.HOSTED_API+`uploads/${getImageName[1]}`;
                            item.imageurl = url;
                        }
                    }
                }          
                })
                
            
                Product.countDocuments({"$or":[filterCond]},(count_error, count) => {
                    if (err) {
                      return res.json(count_error);
                    }
                    return res.json({
                      total: count,
                      page: pageNo,
                      pageSize: data.length,
                      'data': data,
                      status: 200
                    });
                  });
                
            })
            
        }catch(err){
            return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
        }
    
}

//get single
exports.single = async(req,res)=>{
   // //console.log(req.params.id)
    try {
        await Product.findById(req.params.id,(err, data)=>{
            if(err)throw err
            return res.status(200).json({ 'message': `Product with ${req.params.id} fetched successfully`, 'singleproduct': data });
            
        })
       
    } catch (err) {
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}

//update byid
exports.update = async (req,res)=>{
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        sku: Joi.string().required(),
        category: Joi.string().required(),
        categoryId: Joi.string(),
        subCategory: Joi.string().optional(),
        displayType: Joi.string().required(),
        featureType : Joi.string().required(),
        price: Joi.string().required(),
        url: Joi.string().required(),
        isActive :Joi.boolean().required(),
        storageurl: Joi.optional(),
        imageurl: Joi.optional()
    })

    await schema.validateAsync(req.body);
    
    const id = req.params.id;
    let payload = req.body;
 
     //check if image included in payload
    //  var storageUrl = '';
    //  if(req.file){
    //    let storageUrl = `Storage/images/${req.file.filename}`;
    //    payload.storageurl = storageUrl;
     
    //     var getImageName = payload.storageurl.match(/\/([^\/?#]+)[^\/]*$/);
    //     let url = `http://localhost:8080/uploads/${getImageName[1]}`;
    //     payload.imageurl = url;
     
    //  }
    //check if image(s) included in payload
    if(req.files.length>0){
        for( let x of req.files){
         x.storageurl =  `Storage/images/${x.filename.replace(' ', '')}`; 
        } 
        payload.storageurlArr = req.files.map((x)=>({'url': x.storageurl }));   
    }else{
        const pInfo = await Product.findById(id); 
        if(pInfo){
            payload.storageurlArr = pInfo.storageurlArr;
              
        }else{
            res.status(404);
            throw new Error('Product not found')
        }
    }
       
    try{ 
             const data = await Product.findByIdAndUpdate( req.params.id,payload,{new:true})
             return res.status(200).json({ "status": 200, 'message': 'product updated successfully', 'data':data});

    }catch (err) {
        //console.log(err,'error')
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}

//delete
exports.delete = async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id,(err,data)=>{
            if(err)throw err
            return res.status(200).json({status : 200, 'message':'product deleted successfully',})
        })

    }catch (err) {
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}

//check Phone and Email Validation
exports.checkPhoneandEmailValidation = async(req,res)=>{
    // //console.log(req.params.id)
     try {
         await Product.findOne(req.params._id,(err, data)=>{
             if(err)throw err
             return res.status(200).json({ 'message': `Product with ${req.params.id} already exists`});
             
         })
        
     } catch (err) {
         return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
     }
 }