import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className="col s12 m8 l8">
        <div className="card-panel">
          <div className="row">
            <div className="col s12 m2 l2">
              <i className="medium material-icons">perm_identity</i>
            </div>

            <div className="col s12 m10 l10">
              <h4>Professional Summary</h4>
              <p>Experienced Web Developer committed to maintaining cutting edge technical skills and up-to-date industry knowledge.</p>
              <p>Has worked on Web Applications using ReactJS. Works well with a team and is always looking for opportunites to learn!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About