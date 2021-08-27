const fs = require("fs").promises;
const users = require("./contacts.json");
const { v4 } = require("uuid");

const listContacts = async () => {
  const data = await fs.readFile(users);
  const contacts = JSON.parse(data);
  if (!contacts) {
    return null;
  }
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const selectContact = contacts.find((contact) => contact.id === contactId);
  if (!selectContact) {
    throw new Error(`Contact with id ${contactId} not found`);
  }
  return selectContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    throw new Error(`Contact with id ${contactId} not found`);
  }
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  await updateContact(newContacts);
  return contacts[idx];
};

const addContact = async (body) => {
  const newContact = { ...body, id: v4() };
  const contacts = await listContacts();
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

const updateContact = async (contacts) => {
  const contactsString = JSON.stringify(contacts);
  await fs.writeFile(users, contactsString);
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
