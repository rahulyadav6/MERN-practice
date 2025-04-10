const Services = require("../models/service-model");
const services = async(req,res)=>{
    try {
        const response = await Services.find({});
        if(!response){
            return res.status(404).json({msg:"No services found"});
        }
        return res.status(200).json({"services" : response});
    }catch(error){
        console.error(`Error fetching services: ${error}`);
        return res.status(500).json({message: "Unable to fetch services"});
    }
}

module.exports =  services;