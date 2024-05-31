    // import React, { createContext, useContext, useState } from "react";
    //
    //
    // const ContactContext = createContext();
    //
    //
    // export const useContactContext = () => {
    //     return useContext(ContactContext);
    // };
    //
    //
    // export const ContactProvider = ({ children }) => {
    //     const [contacts, setContacts] = useState([]);
    //
    //     const addContact = (newContact) => {
    //         setContacts([...contacts, newContact]);
    //     };
    //
    //     const removeContact = (id) => {
    //         setContacts(contacts.filter((contact) => contact.id !== id));
    //     };
    //
    //     const updateContact = (id, updatedContact) => {
    //         setContacts(
    //             contacts.map((contact) =>
    //                 contact.id === id ? { ...contact, ...updatedContact } : contact
    //             )
    //         );
    //     };
    //
    //     return (
    //         <ContactContext.Provider value={{ contacts, addContact, removeContact, updateContact }}>
    //             {children}
    //         </ContactContext.Provider>
    //     );
    // };
