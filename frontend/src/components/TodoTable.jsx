import {useState} from 'react';
import Tablerow from './TableRow';

function TodoTable({todos}) {

    const [enableDetail, setEnableDetail] = useState(false);

    const renderTableRows = todos.map((todo) => {
        return (<Tablerow key={todo.id} todo={todo} />)
    })

    const handleDetailClick = () => {
        setEnableDetail(!enableDetail);
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
                {renderTableRows}
            </tbody>
        </table>
    )
}

export default TodoTable;