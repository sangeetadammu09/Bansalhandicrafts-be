const Joi = require('joi');
const express = require ('express');
var Contact = require ('../models/contactform')


exports.createContact = async(req,res)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        contact: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
        
    })
       try{
        await schema.validateAsync(req.body);
        await  Contact.create(req.body, (err,data)=>{
             if(err)throw err
              return res.status(200).json({ 'message': 'Contact created successfully', 'newContact': data, status : 200 });
          })
        

       }catch(err){
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
       }
}

//list of contact by page
exports.listofcontacts = async (req, res) => {
    var pageNo = parseInt(req.body.startNumber)
    var size = parseInt(req.body.pageSize)
    var query = {}
    if (pageNo < 0 || pageNo === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size;
    // console.log(query,'query')
    try {
        await Contact.find({}, {}, query, (err, data) => {
            if (err) throw err
            data.sort((a, b) => {
                return new Date(b.creation_dt) - new Date(a.creation_dt);
            });

            data.forEach(x => {
            if(x.teacherid){
             Teacher.findOne({ _id: x.teacherid },(err, resp)=>{
                if(err)throw err
                x['teacher'] = resp;           
            })     
            }

            })

            Contact.countDocuments({}, (count_error, count) => {
                if (err) {
                    return res.json(count_error);
                }
                return res.json({
                    'message': 'Contacts Fetched Successfully',
                    total: count,
                    page: pageNo,
                    pageSize: data.length,
                    'data': data,
                    status: 200
                });
            });

        })

    } catch (err) {
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}

//update 
exports.updatecontact = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        contact: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
    })

    await schema.validateAsync(req.body);

    const id = req.params.id;
    let payload = req.body;

    try {
        const pInfo = await Contact.findById(id);

        if (!pInfo) {
            res.status(404);
            throw new Error('Contact not found')
        }
        else {
            const data = await Contact.findByIdAndUpdate(req.params.id, payload, { new: true })
            return res.status(200).json({ 'message': 'contact updated successfully', 'data': data });
        }


    } catch (err) {
        console.log(err, 'error')
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}

//delete contact
exports.deletecontact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) throw err
            return res.status(200).json({ 'message': 'contact deleted successfully', 'deletedparent': data })
        })

    } catch (err) {
        return res.status(500).json({ 'message': 'something went wrong', 'err': err.message })
    }
}
