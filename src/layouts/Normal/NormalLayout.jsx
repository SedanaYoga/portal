import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import styles from './NormalLayout.module.scss'

const NormalLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  )
}

export default NormalLayout
