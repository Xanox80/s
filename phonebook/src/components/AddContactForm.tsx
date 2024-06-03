// AddContactForm.tsx
import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../store/useStore";
import { CaseContext } from "../context/case-context"; // Adjust the path as necessary
import { Contact } from "../store/useStore.ts"; // Adjust the path as necessary
import "./Add.style.css";

const AddContactForm: React.FC = () => {
  const { firstcase: initialFirstCase, secondcase: initialSecondCase } = useContext(CaseContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [firstcase, setFirstCase] = useState(initialFirstCase);
  const [secondcase, setSecondCase] = useState(initialSecondCase);
  const addContact = useStore((state) => state.addContact);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
      firstcase,
      secondcase,
    };
    addContact(newContact);
    setName("");
    setPhone("");
    setFirstCase(initialFirstCase);
    setSecondCase(initialSecondCase);
  };

  return (
      <div className="AddContactFormContainer">

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="AddContactFormLabel">Name</Form.Label>
            <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label className="AddContactFormLabel">Phone</Form.Label>
            <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFirstCaseName">
            <Form.Label className="AddContactFormLabel">First Case </Form.Label>
            <Form.Control
                type="text"
                value={firstcase.name}
                onChange={(e) => setFirstCase({ ...firstcase, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formSecondCaseName">
            <Form.Label className="AddContactFormLabel">Second Case </Form.Label>
            <Form.Control
                type="text"
                value={secondcase.name}
                onChange={(e) => setSecondCase({ ...secondcase, name: e.target.value })}
            />
          </Form.Group>

          <Button
              variant="primary"
              type="submit"
              className="AddContactFormButton"
          >
            Add Contact
          </Button>
        </Form>
      </div>
  );
};

export default AddContactForm;
