import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='row align-items-center justify-content-center hero-image'>
                    <div className='col-8 col-sm-6 col-md-4 col-lg-3'>
                        <h1 className='text-center text-uppercase font-weight-bold'>Neo Jang</h1>
                        <h4 className='text-center font-weight-bold'>Full Stack Web Developer</h4>
                        {/*} A results-driven and detail-oriented engineer with strong analytical & critical problem-solving skills. Experienced first-hand in application development, deployment & documentation, including requirements documentation, feedback cycles with clients and education/training of end users. Portfolio of achievements in diverse engineering fields.*/}
                    </div>
                </div>
                <div className='services justify-content-center'>
                    <h2>Services</h2>
                    <FontAwesomeIcon icon="code"/>
                </div>
            </div>
        );
    }
}
 
export default Home;