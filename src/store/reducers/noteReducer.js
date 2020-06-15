const reducer = (state = [], { type, payload }) => {
    console.log('state: ', state)
    switch (type) {
      case 'NEW_NOTE':
        return [...state, payload]
      case 'TOGGLE_IMPORTANCE': {
        const id = payload.id
        const noteToChange = state.find((n) => n.id === id)
        const changedNote = {
          ...noteToChange,
          important: !noteToChange.important,
        }
        return state.map((note) => (note.id !== id ? note : changedNote))
      }
      default:
        return state
    }
  }

  export default reducer