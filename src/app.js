import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/test" component={Test} />
                    <Route component={Home} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;

