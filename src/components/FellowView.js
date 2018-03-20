import React, {Component} from 'react'
// import {Link} from 'react-router-dom';

class FellowView extends Component {
  	render(){
    	return(
	    	<div className='col-lg-4 col-sm-6 text-center mb-4'>
	            <img className='rounded-circle img-fluid d-block mx-auto' src={ this.props.avatar } alt={ this.props.fellowName} />
	            <h3>{ this.props.fellowName }</h3>
	            <div className='row justify-content-center'>
	            	<a href={ "https://www.linkedin.com/in/" + this.props.linkedIn }><i className="col h4 text-dark fab fa-linkedin-in" /></a>
	            	<a href={ "https://github.com/" + this.props.github }><i className="col h4 text-dark fab fa-github" /></a>
	            </div>
	            {/*<div className='row justify-content-center'>
	            	<a href={ "https://www.linkedin.com/in/" + this.props.linkedIn }><img className='col h4' src='images/icons/linkedin.svg' height="24px" alt='LinkedIn'/></a>
	            	<a href={ "https://github.com/" + this.props.github }><img className='col h4' src='images/icons/github.svg' height="24px" alt='GitHub'/></a>
	            	<a href={ "https://profiles.generalassemb.ly/" + this.props.gaProfile }><img className='col h4' src='images/icons/ga.svg' height="24px" alt='General Assembly Profile'/></a>
	            </div>*/}
	        </div>
    	)
  	}
}

export default FellowView