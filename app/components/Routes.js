import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import AllBreads from './AllBreads'
import SingleBread from './SingleBread'

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/breads" component={AllBreads} />
          {/* <Route exact path="/breads/:breadId" component={SingleBread} /> */}
        </main>
      </div>
    </Router>
  )
}

export default Routes
