const config = require ("config");
const mongoose = require ("mongoose");
//console.log(config.get('url'));
const connectDB =async()=>{
    try{
        const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
        const connectionString = `mongodb+srv://sangeetadammu12:${password}@dev-cluster.wftp2.mongodb.net/BansalhandicraftsDB?retryWrites=true&w=majority&appName=dev-cluster`; // clustore url
       const connect = await mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
       console.log('DB connected successfully', connect.connection.host, connect.connection.name)
    }catch(err){
        console.error(err);
        process.exit(1);
    }

    // try{
    //     const connect = await mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false});
    //     console.log('DB connected successfully', connect.connection.host, connect.connection.name)
    //  }catch(err){
    //      console.error(err);
    //      process.exit(1);
    //  }
}


module.exports = connectDB;