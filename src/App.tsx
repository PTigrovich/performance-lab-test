import React from 'react'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Performance Lab Test App</header>
      <div className={styles.content}>
        <p>Здесь будет грид с товарами и фильтры</p>
      </div>
    </div>
  )
}

export default App
