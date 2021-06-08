import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleBread } from '../redux/singleBread'
import EditBread from './EditBread'

class SingleBread extends Component {
  componentDidMount() {
    const id = this.props.match.params.breadId
    this.props.loadBread(id)
  }

  render() {
    const bread = this.props.bread
    // console.log('bread >>', bread)
    return (
      <div className="bread-box">
        <h1>{bread.name}</h1>
        <div className="bread-box-left">
          <img src={bread.imageUrl} width="250" height="250" />
          <ul>
            <li>{bread.description}</li>
            <li>${bread.price}</li>
          </ul>
        </div>
        <div className="bread-box-right">
          <EditBread props={bread} />
          {/* <DeleteBread /> */}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    bread: state.bread
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadBread: id => dispatch(fetchSingleBread(id))
  }
}

export default connect(mapState, mapDispatch)(SingleBread)
