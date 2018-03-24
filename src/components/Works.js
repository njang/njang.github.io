import React, { Component } from "react";
 
class Works extends Component {
  render() {
    return (
    	<div className='content container'>
			<div className='row justify-content-center'>
				<div className='col-10 col-sm-8 col-md-6 my-5'>
					<a href='https://bgcc.surge.sh' target='_blank' rel='noopener noreferrer'>					
						<h1 className='text-center'>Daily Report</h1>
						<img src='/images/bgcc.png' className='img-thumbnail' alt='Daily Report for BGCC' />
					</a>
					<p>
						Designed for Becky Gates Children's Center, Texas A&M University
					</p>
					<div className='row justify-content-center text-center'> 
                    	<i className='col fab fa-react h2 text-dark' />
                    	<i className='col fab fa-html5 h2 text-dark' />
					</div>
				</div>
				<div className='col-10 col-sm-8 col-md-6 my-5'>
					<a href='https://www.neojang.com/textTwist/' target='_blank' rel='noopener noreferrer'>					
						<h1 className='text-center'>Text Twist</h1>
						<img src='/images/textTwist.png' className='img-thumbnail' alt='Text Twist' />
					</a>
					<p>
						A classic word game to challenge the player's spelling skills. Similar to the calculator above, in that a great majority of app is written in plain JavaScript.
					</p>
					<div className='row justify-content-center text-center'> 
                    	<i className='col fab fa-js h2 text-dark' />
                    	<i className='col fab fa-html5 h2 text-dark' />
					</div>
				</div>
				<div className='col-10 col-sm-8 col-md-6 my-5'>
					<a href='https://neighborful-demo.herokuapp.com/' target='_blank' rel='noopener noreferrer'>					
						<h1 className='text-center'>Neighborful</h1>
						<img src='/images/neighborful.png' className='img-thumbnail' alt='Neighborful' />
					</a>
					<p>
						Neighborhood Produce Exchange, bringing all your neighbor growers together. Written in Python/Django framework.
					</p>
					<div className='row justify-content-center text-center'> 
                    	<i className='col fab fa-python h2 text-dark' />
                    	<i className='col fab fa-html5 h2 text-dark' />
					</div>
				</div>	
				<div className='col-10 col-sm-8 col-md-6 my-5'>
					<a href='https://www.neojang.com/calculator/' target='_blank' rel='noopener noreferrer'>					
						<h1 className='text-center'>Calculator</h1>
						<img src='/images/calculator.png' className='img-thumbnail' alt='Caltulator' />
					</a>
					<p>
						A simple elegant webapp calculator written almost exclusively in JavaScript, covering both calculator operating logic as well as front-end rendering.
					</p>
					<div className='row justify-content-center text-center'> 
                    	<i className='col fab fa-js h2 text-dark' />
                    	<i className='col fab fa-html5 h2 text-dark' />
					</div>
				</div>			
			</div>
    	</div>
    );
  }
}
 
export default Works;