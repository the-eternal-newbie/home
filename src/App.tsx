import React from 'react';
import { Route, Switch } from 'react-router-dom';
// We will create these two pages in a moment
import Contact from './containers/Contact/Contact.container';
import HomePage from './containers/HomePage/HomePage.container';
import Resume from './containers/Resume/Resume.container';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    );
};

export default App;
