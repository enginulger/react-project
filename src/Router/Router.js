import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Context from '../Page/react-project'

import Faq from '../Component/Faq'
import Carousel from '../Component/Carousel/Carousel'
import Header from '../Component/Header/Header'

function Router() {
    return <Routes>
        <Route path={'/'} element={<Context />} />
        <Route path={'react-project'} element={<Context />} />
        <Route path={'faq'} element={<Faq />} />
        <Route path={'carousel'} element={<Carousel />} />
        <Route path={'header'} element={<Header />} />

    </Routes>
}

export default Router