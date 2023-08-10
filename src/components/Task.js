
const Task = ({ task, onDelete , onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={()=>onToggle(task.id)}
        >
            <h3> {task.text} <span id='del'
                style={{ cursor: 'pointer' }}
                onClick={()=>onDelete(task.id)}
                >❌</span></h3>
            <p>{task.day}</p>
        </div >
    )
}

export default Task
