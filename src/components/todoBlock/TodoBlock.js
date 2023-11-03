import React, { useState, useEffect } from 'react'
import styles from './TodoBlock.module.scss'
import Todo from '../todo/Todo'
import axios from 'axios'

export default function TodoBlock() {


    const [tasks, setTasks] = useState([]);

    console.log(tasks)

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/tasks`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);


    const [value, setValue] = useState('')

    console.log(value)

    function handleButtonClick(){
        if(value.trim() === ''){
            alert('Введите задачу!')
        }
        else{
            setTasks([
                ...tasks,
                {
                    task_id: tasks.length + 1,
                    title: value,
                    status: false
                }
            ])
        }
        setValue('')
    }

    function removeButton(task_id) {
        const updatedTodolist = tasks.filter((item) => item.task_id !== task_id)
        setTasks(updatedTodolist)
    }

  return (
    <div className={styles.todoBlock}>
        <h2>My Todos</h2>
        <div className={styles.todoInfo}>
            <div className={styles.setTodo}>
                <input onChange={(e) => setValue(e.target.value)} value={value} placeholder='Add something todo...' type="text" />
                <button onClick={handleButtonClick}>Save</button>
            </div>
            <div className={styles.todos}>
                {tasks.map((todo) => (
                    <Todo key={todo.task_id} title={todo.title} status={todo.status} task_id={todo.task_id} removeButton={removeButton}/>
                ))}
            </div>
        </div>
    </div>
  )
}
