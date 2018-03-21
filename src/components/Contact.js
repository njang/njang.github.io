import React, { Component } from 'react';
 
class Contact extends Component {
    render() {
        return (
            <div className='content contacts'>
                <div className='row align-items-center justify-content-center'>
                    <a href='https://www.linkedin.com/in/neojang' target='_blank' rel='noopener noreferrer'>
                        {/*<img className='col' src='images/icons/linkedin.svg' height='48px' alt='LinkedIn' />*/}
                        <i className='col fab fa-linkedin text-dark'></i>
                    </a>
                    <a href='https://www.github.com/njang' target='_blank' rel='noopener noreferrer'>
                        {/*<img className='col' src='images/icons/github.svg' height='48px' alt='Github' />*/}
                        <i className='col fab fa-github text-dark'></i>
                    </a>
                    <a href='https://medium.com/@neo.w.jang' target='_blank' rel='noopener noreferrer'>
                        {/*<img className='col' src='images/icons/gmail.svg' height='48px' alt='Gmail' />*/}
                        <i className='col fab fa-medium text-dark'></i>
                    </a>
                    <a href='mailto:neo.w.jang@gmail.com'>
                        {/*<img className='col' src='images/icons/gmail.svg' height='48px' alt='Gmail' />*/}
                        <i className='col fas fa-envelope text-dark'></i>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Contact;