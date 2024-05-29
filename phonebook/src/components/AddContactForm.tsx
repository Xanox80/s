import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useStore } from '../store/useStore';

const AddContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const addContact = useStore((state) => state.addContact);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name,
            phone,
        };
        addContact(newContact);
        setName('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Contact
            </Button>
        </Form>
    );
};

export default AddContactForm;
