import create from 'zustand';

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactState {
    contacts: Contact[];
    addContact: (contact: Contact) => void;
    removeContact: (id: number) => void;
}

export const useStore = create<ContactState>((set) => ({
    contacts: [],
    addContact: (contact) =>
        set((state) => ({
            contacts: [...state.contacts, contact],
        })),
    removeContact: (id) =>
        set((state) => ({
            contacts: state.contacts.filter((contact) => contact.id !== id),
        })),
}));
