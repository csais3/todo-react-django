import {useState} from 'react';
import Tablerow from './TableRow';

function TodoTable({todos}) {

    const [enableDetail, setEnableDetail] = useState(false);

    const renderTableRows = todos.map((todo) => {
        <Tablerow key={todo.id} todo={todo} />
    })

    const handleDetailClick = () => {
        setEnableDetail(!enableDetail);
        console.log("Clicked");
    }

    const handleUpdateClick = () => {

    }

    const handleDeleteClick = () => {

    }

    return (
        <table className="table-auto w-full border-collapse border-b border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border-b px-4 py-2">#</th>
                    <th className="border-b px-4 py-2 text-left">Title</th>
                    <th className="border-b px-4 py-2 text-center">Details</th>
                    <th className="border-b px-4 py-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-b px-4 py-2 text-center">1</td>
                    <td className="border-b px-4 py-2">Be successful</td>
                    <td className="border-b px-4 py-2 text-center">
                        <button onClick={handleDetailClick} 
                        className="bg-blue-500 text-white px-2 py-1 rounded">
                            Details
                        </button>
                    </td>
                    <td className="border-b px-4 py-2 text-center">
                        <div className="flex justify-center space-x-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded">Update</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="border-b px-4 py-2 text-center">2</td>
                    <td className="border-b px-4 py-2">Expertise Rest API</td>
                    <td className="border-b px-4 py-2 text-center">
                        <button onClick={handleDetailClick} 
                        className="bg-blue-500 text-white px-2 py-1 rounded">
                            Details
                        </button>
                    </td>
                    <td className="border-b px-4 py-2 text-center">
                        <div className="flex justify-center space-x-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded">Update</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TodoTable;