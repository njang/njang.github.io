import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import Routes from './config/routes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class Main extends Component {
    render() {
        return (
        	<HashRouter>
	            <div className="Main pt-5">
					<Navbar />
					<div className="content">
						{ Routes }
					</div>
					<Footer />
	            </div>
        	</HashRouter>
        );
    }
}

export default Main;
