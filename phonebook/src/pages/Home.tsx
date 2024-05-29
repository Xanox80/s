import React from 'react';
import { Container } from 'react-bootstrap';
import AddContactForm from '../components/AddContactForm';
import ContactList from '../components/ContactList';

const Home: React.FC = () => {
    return (
        <Container>
            <h1>Phonebook</h1>
            <AddContactForm />
            <ContactList />
        </Container>
    );
};

export default Home;
