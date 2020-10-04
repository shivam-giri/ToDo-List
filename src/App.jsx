import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{
  const[inputList, setinputList] = useState(" ");
  const[Items, setItem] = useState([]);
  const itemEvent=(event)=>{
    setinputList(event.target.value);
  };
  
  const listOfItem=()=>{
    setItem((oldItems)=>{
      return[...oldItems, inputList];
    });
    setinputList('');
  };
  const deleteItems =(id)=>{
    console.log("deleted");
    setItem((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
      });
    });
  };
  
  return(
  <React.Fragment>
    <div className="main_div">
        <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" 
        placeholder ="add items" 
        value={inputList}
        onChange={itemEvent} />
        <button onClick={listOfItem}> + </button>
        <ol>
            {Items.map((itemval, index)=>{
              return <ToDoList 
              key={index} 
              id={index} 
              text={itemval}
              onClick ={deleteItems}
               />
            })}
            
        </ol>
        </div>
    </div>

  </React.Fragment>
);
};
export default App;