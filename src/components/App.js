import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Filter from './Filter'

function App() {
  return (
    <div>
      <AddTodo />
      <Filter />
      <VisibleTodoList />
    </div>
  )
}

export default App
