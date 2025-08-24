const Customer=require('../models/customer')

const getCustomers = async(req,res)=>{
    const customers = await Customer.find({userId: req.user.id})
    res.json(customers);
}
const addCustomer = async(req,res)=>{
    const newCustomer = new Customer({...req.body, userId: req.user.id})
    await newCustomer.save();
    res.status(201).json(newCustomer);
}
const updateCustomer = async(req,res)=>{
    const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updated);
};
const deleteCustomer = async(req,res)=>{
    await Customer.findByIdAndDelete(req.params.id);
    res.json({message:'Customer deleted'})
}
module.exports={getCustomers, addCustomer,updateCustomer,deleteCustomer}