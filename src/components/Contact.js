import React, { Component } from 'react';
 
class Contact extends Component {
    render() {
        return (
            <div>
                <div className='row justify-content-center'>
                    <a href='https://www.github.com/njang' target='_blank' rel='noopener noreferrer'>
                        {/*<img className='col' src='images/icons/github.svg' height='48px' alt='Github' />*/}
                        <i className='col fab fa-github h1'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/neojang' target='_blank' rel='noopener noreferrer'>
                        {/*<img className='col' src='images/icons/linkedin.svg' height='48px' alt='LinkedIn' />*/}
                        <i className='col fab fa-linkedin h1'></i>
                    </a>
                    <a href='mail:neo.w.jang@gmail.com'>
                        {/*<img className='col' src='images/icons/gmail.svg' height='48px' alt='Gmail' />*/}
                        <i className='col fas fa-envelope h1'></i>
                    </a>
                    
                </div>
                <form action="https://formspree.io/neo.w.jang@gmail.com" method="POST" className='form-group'>
                    <div className='row justify-content-center my-2'>
                        <label className='form-label col-3 text-right'>Name</label>
                        <input type="text" name="name" className='form-control col-9 col-sm-6' />
                    </div>
                    <div className='row justify-content-center my-2'>
                        <label className='form-label col-3 text-right'>E-mail</label>
                        <input type="email" name="_replyto" className='form-control col-9 col-sm-6' />
                    </div>
                    <div className='row justify-content-center my-2'>
                        <input type="submit" value="Send" className='btn btn-success col-6 col-sm-3' />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Contact;