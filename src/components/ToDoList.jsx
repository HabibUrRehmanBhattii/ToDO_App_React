import React from "react";

function ToDoItem(props) {// props is an object that contains all the properties of the component that are passed in from the parent component (App.jsx) 
  return (
    <div 
      onClick={() => {// this is an anonymous function that calls the onChecked function from the props object and passes it the id of the item that was clicked on 
        props.onChecked(props.id);// onCgecked is a funtion that is passed in from the parent component (App.jsx) and is called when the user clicks on the ToDoItem component and inside the function the id of the item that was clicked on is passed in as an argument
      }}// there are two fuctions because props can only be passed down from parent to child components, not up from child to parent components
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
