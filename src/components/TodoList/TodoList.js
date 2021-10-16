import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function TodoList(props) {
  return <ListGroup>{props.children}</ListGroup>;
}
