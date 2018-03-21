import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/fontawesome-free-solid'
import { faJsSquare, faHtml5 } from '@fortawesome/fontawesome-free-brands'

class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center hero-image'>
                    <div className='col hero-text'>
                        <h1 className='text-center text-uppercase font-weight-bold'>Neo W. Jang</h1>
                        <h4 className='text-center font-weight-bold'>Full Stack Web Developer</h4>
                        {/* <h4 className='text-center font-weight-bold'>Both Stack Engineer</h4>*/}
                        {/* A results-driven and detail-oriented engineer with strong analytical & critical problem-solving skills. Experienced first-hand in application development, deployment & documentation, including requirements documentation, feedback cycles with clients and education/training of end users. Portfolio of achievements in diverse engineering fields.*/}
                    </div>
                </div>
                <div className='row justify-content-center services'>
                    <h2>Services</h2>
                    <div className='row justify-content-center mx-3'>
                        <div className='col-md-3 col-sm-6 my-3'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faHtml5} className='fa-stack-1x' />
                            </span>
                            <h4 className='my-2'>
                                <strong>Custom Web Development</strong>
                            </h4>
                            <p>My expertise is in building entire website from the ground up, covering both front- & back-end. What idea would you like to make happen?</p>
                        </div>
                        <div className='col-md-3 col-sm-6 my-3'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faJsSquare} className='fa-stack-1x' />
                            </span>
                            <h4 className='my-2'>
                                <strong>JavaScript Consulting</strong>
                            </h4>
                            <p>I thrive in solving JavaScript challenges and can help you with your current React, Node, jQuery or plain vanilla JavaScript problems.</p>
                        </div>
                        <div className='col-md-3 col-sm-6 my-3'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faCloud} className='fa-stack-1x' />
                            </span>
                            <h4 className='my-2'>
                                <strong>What else?</strong>
                            </h4>
                            <p>Whether it's Django framework, or Data analytics by Python, I can build it. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;