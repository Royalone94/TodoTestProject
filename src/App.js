
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import './App.css';
// * Create a TODO list
// * When I check an item, apply strikethrough styling, and move to the bottom of the list
// * Input text at bottom with button to add new todo items to the list above finished items
// * Add button to clear all checked TODO items

const App: () => React$Node  = (props) => {

  const [state, setState] = useState({
    lists: [
      {id: 0, schedule: 'Wakeup', checked: false},
      {id: 1, schedule: 'Breakfast', checked:  false},
      {id: 2, schedule: 'Morning Meeting', checked: false},
      {id: 3, schedule: 'Coffee Break',  checked: false},
      {id: 4, schedule: 'Coding',  checked: false},
      {id: 5, schedule: 'Testing',  checked: false}
    ]
  });

  const onAdd = (value) => {
    const lists = state.lists;
    lists.push({id: lists.length, schedule: value,  checked: false});
    setState((prevState) => ({
      ...prevState,
      lists: lists
    }));
  }

  const onClear = () => {
    const lists = state.lists;
    const schedules = [];
    for (let i=0; i<lists.length; i++) {
      console.log(lists[i].checked)
      if(lists[i].checked === false)
        schedules.push(lists[i]);
    }

    console.log('schedules', schedules);
    setState((prevState) => ({
      ...prevState,
      lists: schedules
    }));
  }

  

  const onChangeTick = (index) => {
    const lists = state.lists;
    lists[index].checked = !lists[index].checked ;
    console.log(index, lists)

    setState((prevState) => ({
      ...prevState,
      lists: lists
    }));
  }

  const schedules = state.lists.sort((a,b) => (a.checked)? 1:-1);
  
  return (
    <div className="App">
      <header className="App-header">
         <div>
        {schedules.map((element, index) => {

            return (
              <div key={element.id}> 
                <input type="checkbox"  value={element.checked} name="schedule" onChange={(e) => onChangeTick(index)}/>
                <label>{element.schedule}</label>
              </div>
            )
        })}
      </div>
       
      </header>
      <div className="App-Footer">
        <Footer onAdd = {onAdd} onClear={onClear}/>
      </div>
    </div>
  );

};


export default App;