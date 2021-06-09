import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreads, destroyBread } from '../redux/allBreads'
import AddBread from './AddBread'

class AllBreads extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.loadBreads()
  }

  handleClick(evt) {
    this.props.deleteBread(evt.target.id)
  }

  render() {
    const breads = this.props.breads || []

    return (
      <div className="all-breads-page">
        <h1>Enjoy our daily offerings</h1>
        <br />
        <ul className="all-breads-list">
          {breads.map(bread => {
            return (
              <ul key={bread.id}>
                <Link to={`/breads/${bread.id}`}>
                <h2>{bread.name}</h2>
                </Link>
                <Link to={`/breads/${bread.id}`}>
                  <img src={bread.imageUrl} width="250" height="250" />
                </Link>
                <li>${bread.price}</li>
                <button type="submit" id={bread.id} onClick={this.handleClick}>Remove this Offering</button>
              </ul>
            )
          })}
        </ul>
        <h2>Not liking what you see? Add to our offerings</h2>
        <AddBread />
      </div>
    )
  }
}

const mapState = state => {
  return {
    breads: state.breads
  }
}

const mapDispatch = dispatch => {
  return {
    loadBreads: () => dispatch(fetchBreads()),
    deleteBread: (id) => dispatch(destroyBread(id))
  }
}

export default connect(mapState, mapDispatch)(AllBreads)
