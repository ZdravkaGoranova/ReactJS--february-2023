import { useEffect, useState } from 'react';


import Header from './components/Header.js';
import Loalding from './components/Loalding.js';
import Footer from './components/Footer.js';
import TodoList from './components/TodoList.js';


function App() {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {

                const result = Object.keys(data).map(id => ({ id, ...data[id] }))
                console.log(data)
                console.log(data)

                setTodos(result)
                setIsLoading(false)
            })
    }, []);

    const toggleTodoStatus = (id) => {
        //console.log(id)

        setTodos(state => state.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
    };


    const onTodoAdd = () => {
        const lastId = Number(todos[todos.length - 1].id)
        const text = prompt('Task name:')
        const newTask = { id: lastId + 1, text, isCompleted: false }

        setTodos(state => [newTask, ...state])
    };


    return (
        <>

            <Header />
            {/* <!-- Main content --> */}
            <main className="main">

                {/* <!-- Section container --> */}
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">


                        {isLoading
                            ? < Loalding />
                            : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />
                        }

                    </div>

                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
