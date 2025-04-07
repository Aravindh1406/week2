const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModels")
// @desc Get all Contacts
// @route GET/contacts
const getContacts=asyncHandler(async(req,res)=>{
    const contact=await Contact.find()
    res.status(200).json(contact)
})
// @desc Get Single Contacts
// @route GET/contacts/id
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found With Provided Id")
    }
    res.status(200).json(contact)
})
// @desc create Contacts
// @route POST/contacts
const createContact=asyncHandler(async(req,res)=>{
    console.log(`The Request Body is:${JSON.stringify(req.body,null,1)}`)
    const {name,email,contactNo}=req.body
    if(!name||!email||!contactNo){
        res.status(400)
        throw new Error("All Fields are Mandatory")
    }
    const contact=await Contact.create({name,email,contactNo})
    res.status(201).json({message:"Contact Created Successfully",contact})
})
// @desc Update a single Contact
// @route PUT/contacts/id
const updateContact=asyncHandler(async(req,res)=>{
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).json({message:"Contact with Provided Id is Updated Successfully",updatedContact})
})
// @desc delete a single Contact
// @route DELETE/contacts/id
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("No contact Found with Provided Id")
    }
    await Contact.deleteOne({_id:req.params.id})
    res.status(200).json({message:"Contact Deleted Successfully"})
})
module.exports={getContacts,getContact,createContact,updateContact,deleteContact}