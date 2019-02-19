import { createStore } from 'redux'
import rootReducer from './reducers'

const initState = {
  todos: [
    { id: 0, text: 'Joy of Finance Newsletter', completed: false },
    { id: 1, text: 'CFO Series', completed: false },
    { id: 2, text: 'Moving your team from HipChat to Slack', completed: false },
    { id: 3, text: 'Thanksgiving Email', completed: true },
  ],
  listName: {
    text: 'List Name',
    editable: false
  },
}

const store = createStore(rootReducer, initState)

export default store