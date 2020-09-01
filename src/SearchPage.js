import React from 'react'
import'./SearchPage.css'
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [ { term }, dispatch ] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to='/'>
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                </Link>
                <div className='searchPage_headerBody'>
                <Search hidebuttons />                    
                 <div className="searchPage_options">
                 <div className="searchPageOptions_left">
                    <div className="searchPageOptions">
                    <SearchIcon />
                    <Link to="/all">All</Link>
                </div>
                <div className="searchPageOptions">
                    <DescriptionIcon />
                    <Link to="/news">News</Link>
                </div>
                <div className="searchPageOptions">
                    <ImageIcon />
                    <Link to="/images">Images</Link>
                </div>
                <div className="searchPageOptions">
                    <LocalOfferIcon />
                    <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPageOptions">
                    <RoomIcon />
                    <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPageOptions">
                    <MoreVertIcon />
                    <Link to="/more">More</Link>
                </div>
                </div>
               
                <div className="searchPageOptions_right">
                    <div className="searchPageOptions">
                        <Link to="/more">Settings</Link>
                    </div>

                    <div className="searchPageOptions">
                        <Link to="/more">Tools</Link>
                    </div>
                </div>
                 </div>
                </div>
            </div>

            { term && (<div className="searchPage_results">
                   <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results in {data?.searchInformation.formattedSearchTime} seconds for {term} 
                   </p>
                   {data?.items.map(item => (
                       <div className='searchPage_result'>
                          <a href={item.link}>
                              {item.pagemap?.cse_image?.length > 0 && item.pagemap?. cse_image[0]?.src && (
                                  <img 
                                   className="searchPage_resultImage" src={item.pagemap?. cse_image[0]?.src}
                                  />

                              )}
                                {item.displayLink} ▼
                          </a> 
                          <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title} </h2>
                          </a> 
                          <p className="searchPage_resultSnippet">
                              {item.snippet}
                          </p>
                       </div>
                       
                   ))}
                 </div>
            )}
        </div>
    )
}

export default SearchPage
