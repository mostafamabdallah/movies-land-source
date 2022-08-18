import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MoviesList from './pages/moviesList/MoviesList'
import SingleMovie from './pages/singleMovie/SingleMovie'

const Animation = () => {
  const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MoviesList />}></Route>
                <Route path="/:id" element={<SingleMovie />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Animation