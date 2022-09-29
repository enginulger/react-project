import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Faq from '../Component/Faq'
import Context from '../Component/react-project'
function Router() {
    return <Routes>
        <Route path={'/'} element={<Context />} />
        <Route path={'react-project'} element={<Context />} />
        <Route path={'faq'} element={<Faq />} />
    </Routes>
}

export default Router