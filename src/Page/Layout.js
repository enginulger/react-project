import React from 'react'
import Router from '../Router/Router'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return <>
        <Header />

        <Router />

        <Footer />
    </>
}
