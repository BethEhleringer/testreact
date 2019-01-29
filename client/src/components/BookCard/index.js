import React from "react";
import "./style.css";

function BookCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Title</strong> {props.title}
            </li>
            <li>
              <strong>Author(s):</strong> {props.authors}
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
          </ul>
        </div>

      </div>
    );
  }
  
  export default BookCard;
  