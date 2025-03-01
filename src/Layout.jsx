import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}
