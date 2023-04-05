import React, { Component } from 'react'

class SelfStudy extends Component {
  render() {
    return (
      <div className="col s12 m8 l8" style={{ float: 'right' }} >
        <div className="card-panel">
          <div className="row">

            <div className="col s12 m2 l2">
              <i className="medium material-icons">home</i>
            </div>

            <div className="col s12 m10 l10">
              <h4>Community</h4>

              <p>Joined a program introducing middle schoolers to code</p>
              {/* <p>Read Scripture: This is a private project that I recently got invited to. It's a react-native app that is a bible reading plan that has thousands of users.</p> */}
              <p>Contributed to a flutter library. <a href='https://pub.dev/packages/health' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">flutter health</a> </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SelfStudy