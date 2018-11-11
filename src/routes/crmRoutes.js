import {
  addNewContact,
  getContacts,
  getContactById,
  getContactByName,
  deleteContact,
  updateContact,
} from "../controllers/crmController";

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    // midleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
  }, getContacts)
  //POST endpoint
  .post(addNewContact);

  app.route('/contact/:contactId')
  // get specific contact
  .get(getContactById)
  // put request
  .put(updateContact)
  // delete request
  .delete(deleteContact)

  app.route('/contact/name/:contactName')
  // get specific name
  .get(getContactByName)
}

export default routes
