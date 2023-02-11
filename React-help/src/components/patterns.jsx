import React, {useState} from "react";
import '../App.css';

export const Patterns = () =>{
  const [items] = useState([
    { id: 1, text: 'Checker Board', array: ['a', 'R', '..']},
    { id: 2, text: 'Checkerboard Cube', array: ['b', 'R', 'l', 'r'] },
    { id: 3, text: 'Plus Minus', array: ['c', 'R', 'r'] },
    { id: 4, text: 'Gift Box', array: ['d', 'R', 'd'] },
    { id: 5, text: 'Cross', array: ['e', 'R', '..'] },
    { id: 6, text: '4 Crosses', array: ['f', 'R', '..'] },
    { id: 7, text: 'Cube in Cube', array: ['g', 'R', '..'] },
    { id: 8, text: 'Cube in Cube in Cube', array: ['h', 'R', '..'] },
    { id: 9, text: '4 Spots', array: ['i', 'R', '..'] },
    { id: 10, text: '6 Sopts', array: ['j', 'R', '..'] }

]);

  return(
    <div>
      <p>Patterns</p>
        <ul>  
        {items.map((item) => (
        <li key={item.id}>
          <a className="patternslist">{item.text}</a>
        </li>
      ))}
    </ul>
    </div>

  );
};

