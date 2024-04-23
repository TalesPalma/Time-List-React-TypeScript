import React from 'react';
import Button from '../Button';
import './Formulario.css';

class Formulario extends React.Component {
    render() {
        return (
            <form className='form'>
                <div className='inputs'>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input
                        type="text"
                        placeholder="Nome da tarefa"
                        name='tarefa'
                        id='tarefa'
                        required
                    />
                </div>
                <div className='inputs'>
                <label htmlFor="tarefa">Time</label>
                    <input
                        type='time'
                        id='time'
                        name='time'
                        min="00:00:00"
                        max="01:30:00"
                        step='1
                    ' />
                </div>
                <Button />
            </form>
        )
    }

}

export default Formulario;