import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewBread } from '../redux/allBreads'

const initialState = {
  name: '',
  description: '',
  price: ''
}
class AddBread extends Component {
  constructor() {
    super()
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addBread(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <form id="new-bread-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="a suitable name for your new offering" />
        <label htmlFor="description">
          Description
        </label>
        <input type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="a brief description of your offering" />
        <label htmlFor="price">
          Price
        </label>
        <input type="text" name="price" onChange={this.handleChange} value={this.state.price} placeholder="0.00" />
        <button type="submit">Add a New Bread</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => (
  {
    addBread: (bread) => dispatch(addNewBread(bread))
  }
)

export default connect(null, mapDispatch)(AddBread)
