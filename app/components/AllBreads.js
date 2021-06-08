import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreads } from '../redux/allBreads'

class AllBreads extends Component {

  componentDidMount() {
    this.props.loadBreads()
    console.log('did i dispatch?', this.props)
  }

  render() {
    const breads = this.props.breads || []
    console.log('I want bread', this.props)
    return (
      <div className="all-breads-page">
        <h1>Enjoy our daily offerings</h1>
        <br />
        <ul className="all-breads-list">
          {breads.map(bread => {
            return (
              <ul key={bread.id}>
                <h2>{bread.name}</h2>
                <Link to={`/breads/${bread.id}`}>
                  <img src={bread.imageUrl} width="150" height="150" />
                </Link>
                <li>{bread.description}</li>
                <li>${bread.price}</li>
              </ul>
            )
          })}
        </ul>
        <h2>Not liking what you see? Add to our offerings</h2>
        {/* insert AddBread component here */}
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
    loadBreads: () => dispatch(fetchBreads())
  }
}

export default connect(mapState, mapDispatch)(AllBreads)
