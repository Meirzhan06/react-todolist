import React from 'react'
import styles from './RemoveButton.module.scss'

export default function RemoveButton(props) {

  const { task_id, removeButton } = props



  return (
    <div className={styles.removeButton}>
        <button onClick={() => removeButton(task_id)}>remove</button>
    </div>
  )
}
