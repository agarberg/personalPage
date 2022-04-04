import { useState } from 'react';
import {useDispatch} from 'react-redux'



function ElementForm(){
    // track new values to add 
    const [newElement, setNewElement] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_ELEMENT',
            payload: newElement
        })
        setNewElement('');
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Element Name!"
        value={newElement} 
        // tie to local state variable
        onChange={event => setNewElement(event.target.value)}/>
        //tie to keystroke listener
        <button type="submit">ADD IT</button>
    
      </form>
    )
}


export default ElementForm;