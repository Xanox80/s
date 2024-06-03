import React, { useState} from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import { useStore } from "../store/useStore";
import "./Add.style.css";

const ContactList: React.FC = () => {

  const { contacts, removeContact, updateContact } = useStore();
  const [editingContactId, setEditingContactId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const handleEditClick = (contact: any) => {
    setEditingContactId(contact.id);
    setEditedName(contact.name);
    setEditedPhone(contact.phone);
  };

  const handleSaveClick = () => {
    if (editingContactId !== null) {
      updateContact(editingContactId, { name: editedName, phone: editedPhone });
      setEditingContactId(null);
      setEditedName("");
      setEditedPhone("");
    }
  };

  return (
      <ListGroup>

        {contacts.map((contact) => (
            <ListGroup.Item key={contact.id} className="ContactListItem">
              {editingContactId === contact.id ? (
                  <>
                    <Form.Control
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="ContactListEditInput"
                    />
                    <Form.Control
                        type="text"
                        value={editedPhone}
                        onChange={(e) => setEditedPhone(e.target.value)}
                        className="ContactListEditInput"
                    />
                    <Button
                        variant="success"
                        size="sm"
                        onClick={handleSaveClick}
                        className="ContactListSaveButton"
                    >
                      Save
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditingContactId(null)}
                        className="ContactListCancelButton"
                    >
                      Cancel
                    </Button>
                  </>
              ) : (
                  <>
                    <span className="ContactListName">{contact.name}</span> -{" "}
                    {contact.phone}
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditClick(contact)}
                        className="ContactListEditButton"
                    >
                      Edit
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeContact(contact.id)}
                        className="ContactListDeleteButton"
                    >
                      Delete
                    </Button>
                  </>
              )}
            </ListGroup.Item>
        ))}
      </ListGroup>
  );
};

export default ContactList;
