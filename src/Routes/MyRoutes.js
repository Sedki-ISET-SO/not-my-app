import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Play from '../Components/Play';
import StartQuiz from '../Components/StartQuiz';
import AjouterQuiz from '../Components/AjouterQuiz';

import Register from '../Components/Register'

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home></Home>} />
                <Route path='/register' element={<Register></Register>} />
                <Route path='/login' element={<Login></Login>} />
                <Route path='/play' element={<Play></Play>} />
                <Route path='/start' element={<StartQuiz></StartQuiz>} />
                <Route path='/ajouterQuiz' element={<AjouterQuiz></AjouterQuiz>} />
            </Routes>
        </BrowserRouter>
    )
}
