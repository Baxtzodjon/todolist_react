import React from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper'

function App() {

  return (
    <>

      <div className='wrapper'>

        <div className='box'>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>

        <div className='container'>

          <TodoWrapper />

        </div>

      </div>

    </>
  )
}

export default App
