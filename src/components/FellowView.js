import React, {Component} from 'react'

class FellowView extends Component {
	render(){
		if ( this.props.portfolio ) {
	    	return(
		    	<div className='col-lg-4 col-sm-6 text-center mb-4'>
		            <img className='rounded-circle img-fluid d-block mx-auto' src={ this.props.avatar } alt={ this.props.fellowName} />
		            <h3>{ this.props.fellowName }</h3>
		            <div className='row justify-content-center'>
		            	<a href={ "https://www.linkedin.com/in/" + this.props.linkedIn } target='_blank'><i className="col h4 text-dark fab fa-linkedin-in" /></a>
		            	<a href={ "https://github.com/" + this.props.github } target='_blank'><i className="col h4 text-dark fab fa-github" /></a>
	            		<a href={ this.props.portfolio } target='_blank'><i className="col h4 text-dark fas fa-user-circle" /></a>
		            </div>
		        </div>
	    	)
	  	} else {
	    	return(
		    	<div className='col-lg-4 col-sm-6 text-center mb-4'>
		            <img className='rounded-circle img-fluid d-block mx-auto' src={ this.props.avatar } alt={ this.props.fellowName} />
		            <h3>{ this.props.fellowName }</h3>
		            <div className='row justify-content-center'>
		            	<a href={ "https://www.linkedin.com/in/" + this.props.linkedIn } target='_blank'><i className="col h4 text-dark fab fa-linkedin-in" /></a>
		            	<a href={ "https://github.com/" + this.props.github } target='_blank'><i className="col h4 text-dark fab fa-github" /></a>
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
}

export default FellowView