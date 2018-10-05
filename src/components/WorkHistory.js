import React, { Component } from 'react'

class WorkHistory extends Component {
  render () {
    return (
      <div className="col s12 m8 l8">
        <div className="card-panel">
          <div className="row">

            <div className="col s12 m2 l2">
              <i className="medium material-icons">work</i>
            </div>

            <div className="col s12 m10 l10">
              <h4>Work History</h4>
              <h5>Full Stack Developer @ 1904labs</h5>
              <p><span className="highlight">Oct 2017 - Present</span></p>
              <p>My team at 1904 works on a front end geospatial web framework for Bayer.</p>
              <p>Our framework is being consumed by 11 teams with a number of different use cases. We create an api and ui for developers, to streamline the process of putting together a geospatial web app.</p>
              <p>One of the features I worked on was an advanced time slider which allows users to look at drone imagery of a field to analyze the different images week by week.</p>

              <h5>Engineer 1 @ Enterprise Holdings (Enterprise Rent-A-Car)</h5>
              <p><span className="highlight">Jan 2015 - Sept 2017</span></p>
              <p>Developed a Spring MVC, Angular web application for internal use called Fleet Planning North America. </p>
              <p>This application allows three levels of managers to plan their fleet of cars throughout the year.</p>
              <p>Currently working on a web application for acquiring vehicles for Europe.</p>

              <h5>Software Intern @ Cerner (Kansas City)</h5>
              <p><span className="highlight">May 2012 - Aug 2014</span></p>
              <p>Developed and Implemented a web application for the ticketing system that Cerner used called Remedy.</p>
              <p>It allowed the users to view the tickets, see who was assigned to them (what group, what employee) and see the status of the ticket</p>
              <p>This was done using the .NET framework. I had no previous experience with this framework prior to the summer of 2014.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default WorkHistory