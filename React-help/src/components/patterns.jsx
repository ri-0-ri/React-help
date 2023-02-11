
import '../App.css';

export const Patterns = ({items}) =>{
  
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