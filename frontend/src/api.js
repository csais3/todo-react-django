import axios from 'axios';

const fetchTodos = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/todos');
    console.log(response.data);
    return response.data;
};

export default fetchTodos;