import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../screen/main/index';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Main} />
            </Switch>
        </Router>
    );
}

export default AppRouter;