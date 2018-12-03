import "../Contact.js";

interface ContactList extends Context {
    type: 'fdc3.contactList',
    contacts: Contact[]
}
