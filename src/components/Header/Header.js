import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.header}>
        <Link to='/profile'>Profile</Link>
    </div>
  )
}
