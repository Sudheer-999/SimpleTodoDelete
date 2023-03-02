import './index.css'

const TodoItem = props => {
  const {todoItems, onDelete} = props
  const {id, title} = todoItems

  const deleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-con">
      <p className="title">{title}</p>
      <button type="button" className="del-btn" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
