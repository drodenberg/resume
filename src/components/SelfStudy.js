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

              <p>Since being at 1904 I have worked with a number of things in the community.</p>
              <p>Lift For Life Academy - 1904coders: At 1904labs we have innovation hours and one of the things I decided to do was volunteer for our coders program. We serve at LFLA on Thursdays from 3-5 and teach middle schoolers to code using MIT's app inventor 2. </p>
              {/* <p>Read Scripture: This is a private project that I recently got invited to. It's a react-native app that is a bible reading plan that has thousands of users.</p> */}
              <p>Became a contributor to a flutter library. <a href='https://pub.dev/packages/health' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">flutter health</a> </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SelfStudy