import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList( props ) {
  return <ul className="list-group">{props.children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) 
/*{
  thumbnail = "https://placehold.it/300x300",
    title,
    authors,
    description,
    link
}*/ {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs=12">
          <h3>{props.title}</h3>
          <h4>Author{props.authors}</h4>
          </Col>
          </Row>
          <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <p>{props.description}</p>
            
            <a rel="noreferrer noopener"
              target="_blank"
              href={props.link}     >
              View
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
