import React, { useState } from 'react'
import styles from './Todo.module.scss'
import check from '../../assets/check.svg'

import RemoveButton from '../removeButton/RemoveButton'
import EditButton from '../editButton/EditButton'

export default function Todo(props) {

    const { title, status, task_id, removeButton } = props

    const initialCheckBoxValue = status === 1 ? true : false;

    const [checkBox, setCheckBox] = useState(initialCheckBoxValue)

    function handleCheckboxClick(){
        setCheckBox(!checkBox)
    }

  return (
    <div className={styles.todo}>
        <div>
            <div onClick={handleCheckboxClick} className={styles.checkbox}>
                {checkBox && <img src={check} alt="" />}
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
        <div>
            <EditButton />
            <RemoveButton task_id={task_id} removeButton={removeButton}/>
        </div>
    </div>
  )
}
