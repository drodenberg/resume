import React, { Component } from 'react'
import headshot from '../images/danheadshot.jpg'

class Sidebar extends Component {
  render () {
    return (
      <div className='col s12 m4 l4'>
          <div className='card sideBar'>

              <div className='card-image'>
                  <img alt='daniel_rodenberg' src={headshot} />
                  <span id='cardTitle' className='card-title'>Daniel Rodenberg</span>
                  <span id='cardSubTitle' className='card-title'>Full Stack Developer</span>
              </div>

              <div className='card-content'>
                  <div className='row'>
                      <div className='col s4 m2 l2'>
                          <i className='small material-icons iconPadding'>contact_phone</i>
                      </div>
                      <div className='col s8 m10 l10'>

                          <h5>Contact</h5>
                          <ul className='list-unstyled'>
                              <li>drodenberg92@gmail.com</li>
                              <li>(816) 699 5854</li>
                              <li><a href='https://github.com/drodenberg' target='_blank' rel="noopener noreferrer">github.com/drodenberg</a></li>
                              <li><a href='https://twitter.com/d_rode92' target='_blank' rel="noopener noreferrer">@d_rode92</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col s4 m2 l2'>
                          <i className='small material-icons iconPadding'>import_contacts</i>
                      </div>
                      <div className='col s8 m10 l10'>
                          <h5>Education</h5>
                          <p className='degree'>BS in Information Technology</p>
                              <p className='meta'>University of Missouri</p>
                              <p>Honors Scholar</p>
                              <p>2010 - 2014</p>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col s4 m2 l2'>
                          <i className='small material-icons iconPadding'>trending_up</i>
                      </div>
                      <div className='col s8 m10 l10'>
                          <h5>Skills & Proficiency</h5>
                          <span>ReactJs</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '95%' }}></div>
                          </div>

                          <span>JavaScript</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '95%' }}></div>
                          </div>

                          <span>Flutter</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '90%' }}></div>
                          </div>

                          <span>Dart</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '85%' }}></div>
                          </div>

                          <span>Express</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '85%' }}></div>
                          </div>

                          <span>OpenLayers</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '85%' }}></div>
                          </div>

                          <span>Jest (JS testing)</span>
                          <div className='progress'>
                              <div className='determinate' style={{ width: '75%' }}></div>
                          </div>

                         

                          

                      </div>
                  </div>
              </div>

          </div>
      </div>
    )
  }
}

export default Sidebar