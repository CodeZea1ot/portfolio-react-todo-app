import React from "react";

import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Todo({
  todo,
  index,
  completeTodo,
  removeTodo,
  undoCompleteTodo,
  editTodo,
  updateTodo,
}) {
  return (
    <ListGroup.Item
      className="TodoItem"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <Row className="align-items-center">
        <Col
          onClick={(e) => editTodo(e, index)}
          className="p-2 todo-text"
          sm={12}
          md={8}
        >
          {todo.text}
        </Col>
        <Col className="mb-1" xs={12} sm={6} md={2}>
          {todo.isCompleted ? (
            <Button className="mr-1" onClick={() => undoCompleteTodo(index)}>
              <FontAwesomeIcon icon="undo-alt" />
            </Button>
          ) : (
            <Button className="mr-1" onClick={() => completeTodo(index)}>
              <FontAwesomeIcon icon="check-square" />
            </Button>
          )}
        </Col>
        <Col className="mb-1" xs={12} sm={6} md={2}>
          <Button onClick={() => removeTodo(index)}>
            <FontAwesomeIcon icon="times" />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
