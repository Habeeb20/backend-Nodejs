const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactmodels");
//@desc get all Contact
//@route get /api/contacts
//@access public





const  getContacts = asyncHandler( ((req, res ) => {
    const contacts =  Contact.find();
    res.status(200).json(contacts);
}));



//@desc Create New Contact
//@route Post /api/contacts
//@access public


const  createContact = asyncHandler( ((req, res ) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact = Contact.create({
        name,
        email,
        phone,
    });
    
    res.status(201).json(contact);
}));


//@desc get  Contact
//@route get /api/contacts/:id
//@access public


const  getContact = asyncHandler (((req, res ) => {
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error ("contact not found");
    }
    res.status(200).json(contact);
})); 



//@desc update  Contact
//@route put/api/contacts/:id
//@access public


const  UpdateContact = asyncHandler(((req, res ) => {
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error ("contact not found");
    }

    const updatedContact =  Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
    
    
    res.status(200).json(updatedContact);
}));


//@desc delete  Contact
//@route delete/api/contacts/:id
//@access public


const  deleteContact = asyncHandler(((req, res ) => {
    res.status(200).json({ message:'get contacts for ${req.params.id}' });
}));





module.exports = { getContacts, createContact, getContact, UpdateContact, deleteContact }
