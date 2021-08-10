import React, {useState} from 'react'

function ToDoItem(props){

    const [isDone, setIsDone] = useState(false)
    
    function handleClick(){
        setIsDone(prev => {
            return !prev;
        })
    }


    return (
        <div onClick={handleClick}>
                <li style={{textDecoration: isDone ? "line-through" : null}}> {props.text} </li>
        </div>
    )
}

export default ToDoItem