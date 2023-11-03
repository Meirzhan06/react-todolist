import React from 'react'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import TodoBlock from '../../components/todoBlock/TodoBlock'

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <Header />
        <div className={styles.todoSection}>
            <TodoBlock />
        </div>
    </div>
  )
}
