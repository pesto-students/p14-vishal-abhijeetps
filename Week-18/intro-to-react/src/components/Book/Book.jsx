import React from 'react';

const Book = (props) => {
  return (
    <div key={props.idx} className='book'>
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
    </div>
  );
};

export default Book;
