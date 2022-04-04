import { useSelector, useDispatch } from 'react-redux'; //ADDED
import { useState } from 'react' 
import logo from './logo.svg';
import './App.css';
import ElementList from '../ElementList/ElementList';
import ElementForm from '../ElementForm/ElementForm';
function App() {
  //useSelector accepts a function that tells it which part of the store you want. 
  //here we return the whole store 
  // const reduxStore = useSelector(store => store);
  const count = useSelector(store => store.count) //grab one bit of state, one reducer. -if this bit is updated, it will re render 
  // if count is updated, only re render COUNT!!!
  // const elementList = useSelector(store => store.elementList);
  //dispatch is how we talk to redux from react
  const dispatch = useDispatch()

//track new element to add in our local state
//   const [newElement, setNewElement] = useState('');
// const handleSubmit = (event) => {
//   event.preventDefault();
//   dispatch({ type: 'ADD_ELEMENT', payload: newElement })
//   setNewElement('');
// }

  return (
    <div className="App">
      <header className="App-header">
        {/* <pre>{JSON.stringify(reduxStore)}</pre> */}
        <p>Count is: {count}</p>

        {/* //DISPATCH action when button is clicked */}
        <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>&nbsp;
        <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>&nbsp;
        {/* //start Form */}
        <ElementForm />
        <ElementList />
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Element Name!"
          value={newElement} 
          tie to local state variable 
          onChange={event => setNewElement(event.target.value)}
          //tie to keystroke listener
          />
        <button type="submit">ADD </button>
        </form> */}
      
        {/* <button onClick={() => dispatch({ type: 'ADD_ELEMENT', payload: 'hydrogen'})}>Add Element</button> */}
        {/* <ul>
        {elementList.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
        </ul> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
