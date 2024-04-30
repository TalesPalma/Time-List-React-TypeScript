import Tasks from '../../model/Taks'
import Task from '../Task'
import './Lista.scss'


interface TaskProps {
    lista: Tasks[]
}
const Lista = (props: TaskProps) => {
    return (
        <div className="Lista">
            {
                props.lista.map(
                    taks => (
                        <>
                            <Task key={taks.name} name={taks.name} time={taks.time} />
                        </>
                    )
                )
            }
        </div>
    )
}

export default Lista;