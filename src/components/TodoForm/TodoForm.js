import React from "react";

import "./TodoForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form className="TodoForm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="sr-only">Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type new todo here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="my-2" type="submit">
          <FontAwesomeIcon icon="plus" />
        </Button>
      </Form.Group>
    </Form>
  );
}
