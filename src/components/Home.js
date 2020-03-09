import React from 'react'

//import Componets

import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import App from './App'

const Home = () => {

    return (
        <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
        </>
    )
}

export default Home