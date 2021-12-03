import React, { useState, useEffect } from 'react';

// * Create a TODO list
// * When I check an item, apply strikethrough styling, and move to the bottom of the list
// * Input text at bottom with button to add new todo items to the list above finished items
// * Add button to clear all checked TODO items

const Footer: () => React$Node  = (props) => {

  const [state, setState] = useState({
    schedule: ''
  });

  const setSchedule = (e) => {
    setState((prevState) => ({
      ...prevState,
      schedule: e.target.value
    }));
  }

  const onAddSchedule = () => {
    props.onAdd(state.schedule);
    setState((prevState) => ({
      ...prevState,
      schedule: ''
    }));
  }

  return (
      <div>
          <input type="text" value={state.schedule} onChange= {(e)=> setSchedule(e)}/>
          <button type="submit" onClick={() => onAddSchedule()}> Add </button>
          <button type="submit"  onClick={() => props.onClear()}> Clear </button>
      </div>
  )
};

export default Footer;
