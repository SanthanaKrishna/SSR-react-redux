// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/component/Home').default; 
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';
 
const app = express();

app.use(express.static('public'));

//app.get('/', (req, res)  use * instead of / to navigate several route i.e express not handle route as "/hi"
app.get('*', (req, res) => {
    const store = createStore();

    //some logic to initialize and load into the store
    /**
     * matchRoutes
     *  @params list of routes, path current component url i.e user attempt to view the component
     * 
     */
    const promise=matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });
    Promise.all(promise).then(()=>{
        res.send(renderer(req, store));
    })
    
}); 

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
