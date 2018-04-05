import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './config/routes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GitHubCorner from './components/GitHubCorner';

class Main extends Component {
    render() {
        return (
        	<BrowserRouter>
	            <div className="Main pt-5">
					<Navbar />
					{ Routes }
					<Footer />
                    <GitHubCorner />

	            </div>
        	</BrowserRouter>
        );
    }
}

export default Main;
