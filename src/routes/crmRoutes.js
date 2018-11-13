import {
  addNewContact,
  getContacts,
  getContactById,
  getContactByName,
  deleteContact,
  updateContact,
} from "../controllers/crmController";

import { login, register, loginRequired } from '../controllers/userController';

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    // midleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
  }, loginRequired, getContacts)
  //POST endpoint
  .post(loginRequired, addNewContact);

  app.route('/contact/:contactId')
  // get specific contact
  .get(loginRequired, getContactById)
  // put request
  .put(loginRequired, updateContact)
  // delete request
  .delete(loginRequired, deleteContact)

  app.route('/contact/name/:contactName')
  // get specific name
  .get(loginRequired, getContactByName)

  // registration route
  app.route('/auth/register')
  .post(register);

  ///login route
  app.route('/auth/login')
  .post(login)
}

export default routes
