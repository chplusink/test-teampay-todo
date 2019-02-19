import React from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'

import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  
  handleAdd() {
    let newTodo = this.state.text
    this.setState({ text: '' })
    this.props.addTodo(newTodo)
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) this.handleAdd()
  }

  onInputChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div style={style.container}>
        <input style={[style.input]} placeholder="Add a to-do" onChange={this.onInputChange} onKeyUp={this.handleKeyUp} />
        <div style={style.button} onClick={this.handleAdd}>
          Add
        </div>
      </div>
    )
  }
  
}

const style = {
  container: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: 768,
  },
  input: {
    border: 0,
    width: '95%',
    padding: '0.5rem',
    background: '#fff',
    ':focus': {
      outline: 0,
    }
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '0.5rem',
    background: '#fff',
    color: '#7b68ee',
    textTransform: 'uppercase',
  }
}

var mapStateToProps = state => {
  return state
}

var mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text))
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Radium(AddTodo))
