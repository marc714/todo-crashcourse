export default function TodoList({ todos, onDelete, onChange }) {

    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <li className="item" key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={e => onChange(todo.id, e.target.checked)} />
                        {todo.title}
                        <button onClick={()=> onDelete(todo.id)}>Delete</button>
                    </li>
                    
                )
            })}
        </ul>
    )
}

// needed to add the second return () after todos.map
// you can further make the todo item it's own component.. 