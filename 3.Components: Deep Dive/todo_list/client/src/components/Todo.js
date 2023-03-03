export default function Todo({
    id,
    text,
    isCompleted,
    toggleTodoStatus
}) {
    return (

        <tr key={id} className={`${isCompleted ? ' todo is-completed' : 'todo'}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => toggleTodoStatus(id)}>Change status</button>
            </td>
        </tr>

    )
}