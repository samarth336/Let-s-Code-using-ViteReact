import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
