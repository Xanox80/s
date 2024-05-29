import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useStore } from '../store/useStore';

const ContactList: React.FC = () => {
    const { contacts, removeContact } = useStore();

    return (
        <ListGroup>
            {contacts.map((contact) => (
                <ListGroup.Item key={contact.id}>
                    {contact.name} - {contact.phone}
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeContact(contact.id)}
                        className="float-right"
                    >
                        Delete
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ContactList;
