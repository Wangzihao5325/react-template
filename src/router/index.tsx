import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../screen/main/index';
import InitialComponent from './initialComponent';

const AppRouter = (props: any) => {
    if (props.isInitial) {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Main} />
                </Switch>
            </Router>
        );
    } else {
        return (
            <InitialComponent />
        );
    }
}

function mapState2Props(store: any) {
    return {
        isInitial: store.initial.isDone
    }
}

const AppRouterWithStore = connect(mapState2Props)(AppRouter);

export default AppRouterWithStore;