import React from 'react';
import { Link } from "react-router-dom";

const Todolist = ({todolist}) => {
  return (
    <div>Todolist

         {todolist.map((item) => {
          return  <div key={item.id}>
                <Link to={`/todos/${item.id}`}>
                {item.title}
                </Link>
            </div>
        })} 
    </div>
  )
}

export default Todolist;