import { combineReducers } from 'redux'
import listName from './listName'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  listName,
  todos,
  visibilityFilter
})
