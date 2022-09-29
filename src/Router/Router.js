import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Faq from '../Component/Faq'
import Context from '../Component/Context'
function Router() {
    return <Routes>
        <Route path={'/'} element={<Navigate to='context' />} />
        <Route path={'context'} element={<Context />} />
        <Route path={'faq'} element={<Faq />} />
    </Routes>
}

export default Router