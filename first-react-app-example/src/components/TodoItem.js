import './TodoItem.css';

function TodoItem() {
    const task = 'Drick kaffe';

    return (
        <li className='todo-item'>{ task }</li>
    );
}

export default TodoItem;