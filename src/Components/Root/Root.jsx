import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';


const Root = () => {

    const [theme, setTheme] = useState('light')

    function changeTheme() {
        const html = document.documentElement

        if (theme == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light'
        document.documentElement.classList.add(currentTheme)
        setTheme(currentTheme)
    },[])

    // useEffect(() => {
    //     const currentTheme = localStorage.getItem('mode') || 'light'

    //     document.documentElement.classList.add(currentTheme)
    //     setTheme(currentTheme)

    // }, [])

    return (
        <div className="dark:bg-slate-800 dark:text-slate-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <button onClick={changeTheme} className="btn fixed top-1/2 bg-[#aaff03] hover:bg-[#76b300] ">{theme === "dark" ? <FaRegLightbulb></FaRegLightbulb> : <FaMoon></FaMoon>}</button>
            <ToastContainer />
        </div>
    );
};

export default Root;