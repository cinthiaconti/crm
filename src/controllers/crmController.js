import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body)

  newContact.save((err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)
  })
}

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)
  })
}

export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)  
  })
}

export const getContactByName = (req, res) => {
  Contact.find({firstName: req.params.contactName}, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)  
  })
}

export const updateContact = (req, res) => {
  Contact.findByIdAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    res.json(contact)
  })
}

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    if(err) {
      res.send(err)
    }
    res.json({message: 'contact removed'})
  })
}