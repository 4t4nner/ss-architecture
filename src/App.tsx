import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lab1 from './labs/lab1';
import Lab2 from './labs/lab2';
import MainPage from './components/MainPage/index';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/lab1" element={<Lab1/>}/>
            <Route path="/lab2" element={<Lab2/>}/>
        </Routes>
    </Layout>

</BrowserRouter>

export default App;