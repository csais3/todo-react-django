function Tablerow({todo}) {

    const handleDetailClick = () => {

    }
    return (

        <tr>
            <td className="border-b px-4 py-2 text-center">{todo.id}</td>
            <td className="border-b px-4 py-2">{todo.title}</td>
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
    )
}

export default Tablerow;