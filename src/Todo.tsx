import React, { useState } from 'react';

interface item {
    id: number;
    work: string;
    completed: boolean;
}
 
const Todo = () => {

    const [todos,setTodos] = useState<item[]>([
        {id: 1, work: "Learn TypeScript", completed: false},
        {id: 2, work: "Learn Docker", completed: false},
    ])

    const [input,setInput] = useState<string>("")

    const handleClick = () => {
        const newTodos: item = { id: Date.now(), work: input, completed: false};
        setTodos([...todos, newTodos])
    }

    const handleStatus = (id: number) => {
        setTodos(
            todos.map((todo) =>{
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        )
    }

    return (
        <div>
            <h1 className='text-xl my-10 font-semibold'>Ultra Legend super simple <span className='text-red-600'>TODO</span> App</h1>

            <ul className='text-lg font-semibold'>
                {todos.map((todo) => <li 
                key={todo.id}
                onClick={() => handleStatus(todo.id)} 
                style={{textDecoration: todo.completed ? 
                    "line-through" : "none"}}
                >{todo.work}</li>)}
            </ul>

            <input className='border-2 border-black my-5 rounded-lg' type="text" placeholder='Add todo' name="" onChange={(e) => setInput(e.currentTarget.value)} />
            <br />
            <button onClick={handleClick} className='w-28 h-10 rounded-md bg-red-600 text-white'>Add</button>
        </div>
    );
};

export default Todo;