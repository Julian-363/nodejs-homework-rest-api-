/*const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: String,
    phone: String,
    favorite: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Contact', contactSchema);


// const fs = require('fs/promises')
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsFilePath = path.join(__dirname, 'db', 'contacts.json');

const readContactsFile = () => {
  const fileContent = fs.readFileSync(contactsFilePath, 'utf8');
  return JSON.parse(fileContent);
};

const writeContactsFile = (contacts) => {
  fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
};

const addContact = (contact) => {
  const contacts = readContactsFile();
  const newContact = { id: uuidv4(), ...contact };
  contacts.push(newContact);
  writeContactsFile(contacts);
  return newContact;
};

const listContacts = () => {
  return readContactsFile();
};

const updateContact = (id, updatedData) => {
  const contacts = readContactsFile();
  const contactToUpdate = contacts.find((contact) => contact.id === id);
  // ... lógica de actualización
  writeContactsFile(contacts);
  return contactToUpdate;
};

const removeContact = (id) => {
  const contacts = readContactsFile();
  // ... lógica de eliminación
  writeContactsFile(contacts);
  return true;
};

module.exports = {
  addContact,
  listContacts,
  updateContact,
  removeContact,
};
*/

