import React from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { FiEdit2 } from 'react-icons/fi'

import { setListName } from '../actions'

class ListName extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.listNameText,
      editable: false
    }

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) { this.toggleEdit() }
  }

  inputChange(e) {
    this.props.setListName(e.target.value)
  }

  toggleEdit() {
    this.setState({
      text: this.props.listNameText,
      editable: !this.state.editable
    })
  }
  
  render() {
    let listNameElement = (this.state.editable) ? (<input placeholder={this.state.text} onChange={this.inputChange} onKeyUp={this.handleKeyUp}/>) : (<h3 style={style.h3}>{this.state.text}</h3>)
    return (
      <div style={style.container}>
        {listNameElement}
        <div onClick={this.toggleEdit}>
          <FiEdit2 />
        </div>
      </div>
    )
  }
  
}

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h3: {
    margin: '0.5rem',
    fontWeight: 100,
  },
}

var mapStateToProps = state => {
  return {
    listNameText: state.listName.text,
    listNameEditable: state.listName.editable,
  }
}

var mapDispatchToProps = dispatch => {
  return {
    setListName: text => {
      console.log(text);
      
      dispatch(setListName(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(ListName))
