import React from 'react'
import "./Home.css";
import Search from './Search.js'
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";

function Home() {
    return (
        <div className='home'>
            
            <div className='home_header'>
            <div className='home_headerLeft'>
               
            <Link to='/about'>About</Link>  
            <Link to='/store'>Store</Link>

             {/* we didnot use anchor tag and used link tag to avoid refresh page  and the new page comes simultaneously */}
            
            </div>

            <div className='home_headerRight'>
            <Link to='/images'>Images</Link>
            <Link to='/gmail'>Gmail</Link>
            <AppsIcon/>
            <Avatar/>

            </div>
            
            </div>
            <div className='home_body'>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
                </img>

                <div className="home_inputContainer" >
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
