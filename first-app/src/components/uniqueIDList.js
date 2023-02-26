/* eslint-disable react/style-prop-object */
import React from 'react';

const todos = [
  {
    "card_titles": "Json Data TITLE 1",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  },
  {
    "card_titles": "Json Data TITLE 2",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  },
  {
    "card_titles": "Json Data TITLE 3",
    "card_descriptions": "This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data. This title comes from Json Data."
  }
];

const uniqueIDList = () => {
  return <div className='uniqueList'>
    {todos.map((todo) => {
      return <div>
        <h3>todo.card_titles</h3>
      </div>
    })}
    </div>

}

export default uniqueIDList