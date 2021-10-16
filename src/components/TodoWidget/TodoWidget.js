import React from "react";

import "./TodoWidget.css";
import Container from "react-bootstrap/Container";

export default function TodoWidget(props) {
  return <Container className="TodoWidget">{props.children}</Container>;
}
