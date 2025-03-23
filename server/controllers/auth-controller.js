const home = async(req, res) => {
    try{
        res.status(200).send("welcome to homepage");
    }catch(error){
        res.status(500).send("Internal server error");
    }
};

const register = async(req,res)=>{
    try{
        res.status(200).send("welcome to register page");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}


module.exports = { home, register }; 