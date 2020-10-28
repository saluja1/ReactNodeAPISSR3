import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LaunchData from './View/LaunchData.jsx';

class App extends Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LaunchData} />
                </Switch>
            </Router>
        )
    }
}

export default App;