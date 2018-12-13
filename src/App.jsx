import React from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import DefaultRoutes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <DefaultRoutes/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;
