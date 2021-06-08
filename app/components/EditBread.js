import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSingleBread } from '../redux/singleBread'

class EditBread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: 0.00,
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      price: this.props.price,
      imageUrl: this.props.imageUrl
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.updateBread({ ...this.props, ...this.state })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        name: this.props.name,
        description: this.props.description,
        price: this.props.price,
        imageUrl: this.props.imageUrl
      })
    }
  }

  render() {
    const { name, description, price, imageUrl } = this.state

    return (
      <div className="edit-bread-box">
        <h2>Did we get something wrong? Edit this offering</h2>
        <form className="edit-bread-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Change the name</label>
          <input type="text" name="name" onChange={this.handleChange} value={name} />
          <label htmlFor="description">Write a new description</label>
          <input type="text" name="description" onChange={this.handleChange} value={description} />
          <label htmlFor="price">Choose your price</label>
          <input type="text" name="price" onChange={this.handleChange} value={price} />
          <label htmlFor="imageUrl">Pick a fitting image</label>
          <input type="text" name="imageUrl" onChange={this.handleChange} value={imageUrl} />
          <button type="submit">Edit this Offering</button>
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    bread: state
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateBread: (bread) => dispatch(updateSingleBread(bread))
  }
}

export default connect(mapState, mapDispatch)(EditBread)
