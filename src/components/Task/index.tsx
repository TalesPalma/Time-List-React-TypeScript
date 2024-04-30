import './Task.css';



interface TaskProps {
    name:string,
    time:string
}

const Task = (props:TaskProps) => {
    return (
        // Card
        <div className="Task">
            <h3 className='time-text '>{props.name}</h3>
            <p className='time-sub-text '>{props.time}</p>
        </div>
    )
}

export default Task;