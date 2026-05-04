const Reflection = require('../models/reflection.model');

const getReflections = async (req, res) => {
    try{
        const reflections = await Reflection.find({});
        res.status(200).json(reflections);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getReflection = async (req, res) => {
    try {
        const { userId, day } = req.params;
        const reflection = await Reflection.findOne({userId, day});

        if (!reflection) {
            return res.status(404).json({message: "Reflection not found"});
        }

        res.status(200).json(reflection);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const createReflection = async (req, res) => {
    try{
        const reflection = await Reflection.create(req.body);
        res.status(200).json(reflection);

    }catch (error){
        res.status(500).json({message: error.message});
    }
}

const updateReflection = async (req, res) => {
    try{

        const{userId, day} = req.params;
        const{content} = req.body;
        const reflection = await Reflection.findOneAndUpdate({userId, day},{content} , {new:true});

        if(!reflection){
            return res.status(404).json({message: "Reflection not found"});
        }
        
        res.status(200).json(reflection);

    }catch (error){
        res.status(500).json({message: error.message});
    }
}

const deleteReflection = async (req, res) => {
    try{
        const {id} = req.params;
        const reflection = await Reflection.findByIdAndDelete(id);

        if(!reflection){
            return res.status(404).json({message: "Reflection not found"});
        }

        res.status(200).json({message: "Reflection deleted succesfully"});
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getReflections,
    getReflection,
    createReflection,
    updateReflection,
    deleteReflection
};
