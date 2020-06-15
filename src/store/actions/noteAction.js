const getId = () => (100000 * Math.random()).toFixed(0)

const newNote1 = {
  type: 'NEW_NOTE',
  payload: { content: 'payload from dispatch', important: false, id: getId() },
}

export const newNote2 = {
  type: 'NEW_NOTE',
  payload: { content: 'payload from dispatch2', important: false, id: getId() },
}

export const toggleImportance = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id },
  }
}

export default newNote1
