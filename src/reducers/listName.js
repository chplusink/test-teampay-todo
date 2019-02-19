const listName = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LISTNAME':
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

export default listName
