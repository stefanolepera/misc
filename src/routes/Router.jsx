import React from 'react';
import MainScreen from '../containers/MainScreen';
import CategoriesScreen from '../containers/CategoriesScreen';
import NotFound from '../components/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={MainScreen} />
                    <Route
                        exact
                        path="/categories/:id"
                        component={CategoriesScreen}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
