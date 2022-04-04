import {useSelector} from 'react-redux';

function ElementList (){
    //grab the element list from the redux store
    const elementList = useSelector(store => store.elementList);

    return (
        <ul>
        {elementList.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
        </ul>
    )
}

export default ElementList;