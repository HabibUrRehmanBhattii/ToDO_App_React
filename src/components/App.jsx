import React, { useState } from "react";
import ToDoItem from "./ToDoList"

function App() {
  // useState is a hook that allows you to use state in functional components because functional components don't have their own state like class components do
  const [inputText, setInputText] = useState("");
  // useState returns an array with two values, the first value is the current state and the second value is a function that allows you to update the state
  // the useState hook is used to create a state variable called inputText and a function called setInputText that allows you to update the state variable
  // the useState hook is used to create a state variable called items and a function called setItems that allows you to update the state variable
  const [items, setItems] = useState([]);

  // this function is handling the onChange event for the input element
  // the onChange event is triggered when the value of the input element changes
  // it adds the text from the input field to the const called newItem 
  function handleChange(event) {
    const newValue = event.target.value;
  //  setting the state of the inputText variable to the value of the input field
    setInputText(newValue);
  }

  function addItem() {// this function is handling the onClick event for the button element
    setItems(prevItems => {// setItems is a function that allows you to update the state of the items variable here we are passing it an anonymous function that takes the previous state of the items variable as an argument
      return [...prevItems, inputText];// we are returning a new array that contains all the items from the previous state of the items variable and the new item that was added to the input field
    });
    setInputText("");// this sets the state of the inputText variable to an empty string so that the input field is cleared after the user clicks the button 
  }

  function deleteItem(id) {// this function is handling the onClick event for the ToDoItem component  
    setItems(prevItems => {// setItems is a function that allows you to update the state of the items variable here we are passing it an anonymous function that takes the previous state of the items variable as an argument 
      return prevItems.filter((item, index) =>// we are returning a new array that contains all the items from the previous state of the items variable except for the item that was clicked on 
       index !== id);// this is a conditional statement that returns true if the index of the item in the array is not equal to the id of the item that was clicked on so that the item that was clicked on is not included in the new array 
      });//index !== id is a conditional statement that returns true if the index of the item in the array is not equal to the id of the item that was clicked on so that the item that was clicked on is not included in the new array
   // return prevItems.filter((item, index) => index !== id);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} 
        // the value attribute of the input element is set to the state of the inputText variable so that the input field is cleared after the user clicks the button
        // the onChange attribute of the input element is set to the handleChange function so that the state of the inputText variable is updated when the user types in the input field
        />
        <button onClick={addItem}
        // the onClick attribute of the button element is set to the addItem function so that the addItem function is called when the user clicks the button
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (// this is a loop that iterates through the items array and returns a ToDoItem component for each item in the array
            <ToDoItem// this is the ToDoItem component that is returned for each item in the items array 
              key={index}// this is a unique key that is used by react to identify each item in the array and sending it to the ToDoItem component as a prop 
              id={index}// this is the index of the item in the items array and is sent to the ToDoItem component as a prop decalred as id not key because key is a reserved word in react and cannot be used as a prop name because it is used internally by react 
              text={todoItem}// this is the text of the item in the items array and is sent to the ToDoItem component as a prop
              onChecked={deleteItem}// this is the deleteItem function and is sent to the ToDoItem component as a prop so that it can be called from the ToDoItem component because props can only be passed down from parent to child components, not up from child to parent components
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
