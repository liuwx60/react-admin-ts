import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Counter from '../components/Counter';
import Login from '../views/Account/Login';

export const routes = (
    <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/login" component={Login} />
    </Layout>
);
