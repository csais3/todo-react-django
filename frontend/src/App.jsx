import Header from "./components/Header";
import TodoTable from "./components/TodoTable";
import { useState, useEffect } from "react";
import fetchTodos from "./api";

function App() {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFata = async () => {
            try {

                const todosData = await fetchTodos();
                setTodos(todosData);
            } catch (err){
                setError(err.message);
            }
        }
        fetchFata();
    }, [])
 
    return (
        <div>
            <Header />
            <TodoTable todos={todos}/>
        </div>
    )
}

export default App;