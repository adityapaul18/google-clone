import React from 'react';
import { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({hidebuttons=false}) {
    const [ {}, dispatch ] = useStateValue();
           // alowsus to shoot info inn data layer


    const [input, setInput ] = useState("");
    const history = useHistory();
    
    const search = (e) => {
        e.preventDefault();

    console.log('you searched >> ', input);

    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
    // here not only  we pushed user to the search page but also pushed the data in the data layer
    history.push('/search')

    };

    return (
        <form className='search'>
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                
                <MicIcon/>
            </div>

            {/* ternary operaator to hide search buttons to reuse the search  bar in the search results page */}
            {!hidebuttons ? (
            <div className="search_buttons">
                <Button type='submit' onClick={search} variant="outlined" >Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>

            </div>
            ):
            (
            <div className="search_buttons">
                <Button className="search_buttonsHidden" type='submit' onClick={search} variant="outlined" >Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>

            </div>
            )}
            {/* end of ternary operator */}
            
        </form>
    )
}

export default Search
