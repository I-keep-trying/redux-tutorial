import React from 'react'
import store from './store/index'
import './App.css'

const toggleImportance = (id) => {
  store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    payload: { id },
  })
}
function App(props) {
  console.log('store.getState', store.getState())

  return (
    <div className="App">
      <ul>
        {store.getState().map((note) => (
          <div>
            <li key={note.id}>
              {note.content}
              <br />
              Important: {note.important.toString()}
            </li>
            <button onClick={toggleImportance(note.id)}>important</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
