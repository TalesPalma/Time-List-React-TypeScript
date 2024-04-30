import { useState } from 'react';
import Tasks from '../../model/Taks';
import Button from '../Button';
import './Formulario.css';



interface FormProps {
    onSubmit: (task: Tasks) => void
}




const Formulario = (form: FormProps) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = () => {
        if (name.length > 0 && time.length > 0) {
            form.onSubmit({
                name,
                time
            })
            setName('')
            setTime('')
        }
        else {
            alert('Preencha todos os campos')
        }
    }


    return (
        <form className='form'>
            <div className='inputs'>
                <label htmlFor="tarefa">Tarefa</label>
                <input
                    value={name}
                    type="text"
                    placeholder="Nome da tarefa"
                    name='tarefa'
                    id='tarefa'
                    onChange={
                        (event) => {
                            setName(event.target.value)
                        }
                    }
                    required
                />
                <label htmlFor="tarefa">Time</label>
                <input
                    value={time}
                    type='time'
                    id='time'
                    name='time'
                    min="00:00:00"
                    max="01:30:00"
                    step='1'
                    onChange={
                        (event) => {
                            setTime(event.target.value)
                        }
                    }
                />

            </div>
            <button onClick={handleSubmit}
            >Clique</button>
        </form>
    )
}

export default Formulario;