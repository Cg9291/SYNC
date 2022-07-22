import quotes from "./quotes.js"
import {useEffect, useRef} from 'react'
import {connect} from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Presentational(props){
    useEffect(()=>{//function works,but would be better if we could just use handleClick fn..work on it
        let initIdx=Math.floor(Math.random()*(6.9-0)+0);
        //props.dispatchId();
        document.getElementById("text").innerHTML=quotes[initIdx].quoteText;
        document.getElementById("author").innerHTML="- "+quotes[initIdx].quoteAuthor;
    },[]);
    const quoteBox=useRef(null);
    const handleClick=()=>{
        props.dispatchId();
        document.getElementById("text").innerHTML=quotes[props.indexState].quoteText;
        document.getElementById("author").innerHTML="- "+quotes[props.indexState].quoteAuthor;
    }
    return(
        <div id="wrapper">
            <div id="quote-box" ref={quoteBox}>
                <div id="text">
                    
                </div>
                <div id="author">

                </div>
                <div id="footer-row">
                    <a id="tweet-quote">
                        <button className="butto">
                            <FontAwesomeIcon icon="coffee"/> click
                        </button>
                    </a>
                    <button id="new-quote" onClick={handleClick}>
                        New Quote
                    </button>      
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Presentational)