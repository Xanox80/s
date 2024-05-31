import create from "zustand";
import { Case } from "../context/case-context.ts"; // Adjust the path as necessary

export interface Contact {
  id: number;
  name: string;
  phone: string;
  firstcase: Case;
  secondcase: Case;
}

interface Store {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (id: number) => void;
  updateContact: (id: number, updatedContact: Partial<Contact>) => void;
}

export const useStore = create<Store>((set) => ({
  contacts: [],
  addContact: (contact) =>
      set((state) => ({ contacts: [...state.contacts, contact] })),
  removeContact: (id) =>
      set((state) => ({
        contacts: state.contacts.filter((contact) => contact.id !== id),
      })),
  updateContact: (id, updatedContact) =>
      set((state) => ({
        contacts: state.contacts.map((contact) =>
            contact.id === id ? { ...contact, ...updatedContact } : contact
        ),
      })),
}));
