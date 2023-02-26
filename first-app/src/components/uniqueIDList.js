import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    "card_id": uuidv4(),
    "card_titles": "Json Data TITLE 1",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  },
  {
    "card_id": uuidv4(),
    "card_titles": "Json Data TITLE 2",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  },
  {
    "card_id": uuidv4(),
    "card_titles": "Json Data TITLE 3",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  }
];

const uniqueIDList = () => {
  return <div className='uniqueList'>
    {todos.map((todo) => {
      return <div key={uuidv4()}>
        <h4>{todo.card_titles}</h4>
        <p>{"Card Unique ID: " + todo.card_id}</p>
        <p>{todo.card_descriptions}</p>
        <br></br>
      </div>
    })}
    </div>

}

export default uniqueIDList