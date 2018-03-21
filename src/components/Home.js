import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faJsSquare, faPython, faHtml5 } from '@fortawesome/fontawesome-free-brands'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='row align-items-center justify-content-center hero-image'>
                    <div className='col-8 col-sm-6 col-md-4 col-lg-3'>
                        <h1 className='text-center text-uppercase font-weight-bold'>Neo Jang</h1>
                        <h4 className='text-center font-weight-bold'>Full Stack Web Developer</h4>
                        {/* <h4 className='text-center font-weight-bold'>Both Stack Engineer</h4>*/}
                        {/* A results-driven and detail-oriented engineer with strong analytical & critical problem-solving skills. Experienced first-hand in application development, deployment & documentation, including requirements documentation, feedback cycles with clients and education/training of end users. Portfolio of achievements in diverse engineering fields.*/}
                    </div>
                </div>
                <div className='services'>
                    <h2 className='my-2'>Services</h2>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faHtml5} className='fa-stack-1x' />
                            </span>
                            <h4 className='my-2'>
                                <strong>Custom Web Development</strong>
                            </h4>
                            <p>My expertise is in building entire website from the ground up, covering both front-end and back-end. All we need is your idea.</p>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faJsSquare} className='fa-stack-1x' />
                            </span>
                            <h4 className='my-2'>
                                <strong>JavaScript Consulting</strong>
                            </h4>
                            <p>I thrive in solving JavaScript problems and can help you with your current React, Node, jQuery or vanilla JavaScript problems.</p>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <FontAwesomeIcon icon={faPython} className='fa-stack-1x' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;