export const setListName = text => {
  console.log('action', text);
  
  return ({
    type: 'SET_LISTNAME',
    text: text
  })
}

export const toggleListEdit = () => ({
  type: 'TOGGLE_EDIT',
})

let nextTodoId = 4
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
