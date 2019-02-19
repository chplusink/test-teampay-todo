import React from 'react'
import Radium from 'radium'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ListName from '../containers/ListName'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <header style={styles.headerContainer}>
      <h2 style={styles.h2}>Listicles</h2>
      <ListName />
      <AddTodo />
    </header>
    <VisibleTodoList />
    <Footer />
  </div>
)

const styles = {
  headerContainer: {
    padding: '1rem',
    textAlign: 'center',
    color: 'white',
    background: '#7b68ee',
  },
  h2: {
    marginTop: 0,
    fontWeight: 400,
    letterSpacing: 2,
    textTransform: 'uppercase',
  }
}

export default Radium(App)
