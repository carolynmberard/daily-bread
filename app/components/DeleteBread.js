import React, { Component } from 'react'
import { connect } from 'react-redux'
import { destroyBread } from '../redux/singleBread'

class DeleteBread extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    this.props.deleteBread(evt.target.id)
  }

  render() {
    console.log('delete bread props >>', this.props)
    return (
      <div className="delete-bread-box">
        <h3>Not interested in this offering?</h3>
        <button type="submit" id={this.props.id} onClick={this.handleClick}>
          Delete this Offering
        </button>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteBread: (id) => dispatch(destroyBread(id))
  }
}
export default connect(null, mapDispatch)(DeleteBread)
