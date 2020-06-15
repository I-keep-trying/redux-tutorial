import { createStore } from 'redux'
import reducer from './reducers/noteReducer'
import newNote1, { newNote2, toggleImportance } from './actions/noteAction'

const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = [
  {
    content: 'note from initialState: the app state is in redux store',
    important: true,
    id: getId(),
  },
]

const store = createStore(reducer, initialState)

store.dispatch(newNote1)
export default store
