import quotes from "./quotes.js"
import {useEffect, useRef} from 'react'
import {connect} from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import App from "../../App.js"




function Presentational(props){
    const ref=useRef();
    useEffect(()=>{//function works,but would be better if we could just use handleClick fn..work on it
        let initIdx=Math.floor(Math.random()*(11.9-0)+0);
        //props.dispatchId();
        document.getElementById("text").innerHTML=quotes[initIdx].quoteText;
        document.getElementById("author").innerHTML="- "+quotes[initIdx].quoteAuthor;
    },[]);
    const quoteBox=useRef(null);
    const handleClick=()=>{
        let randomColor=(Math.random()*(256-0)+0)
        props.dispatchId();
        document.getElementById("text").innerHTML=quotes[props.indexState].quoteText;
        document.getElementById("author").innerHTML="- "+quotes[props.indexState].quoteAuthor;
       
        
    }
    return(
        <div id="wrapper" >
            <div id="quote-box" ref={quoteBox}>
                <div id="text" ref={ref}>
                    
                </div>
                <div id="author">

                </div>
                <div id="footer-row">
                    <div>
                        <a id="tweet-quote">
                            <button>
                                <FontAwesomeIcon icon="coffee"/> 1
                            </button>
                        </a>
                        <a id="tumblr-quote">
                            <button>
                                <FontAwesomeIcon icon="coffee"/> 2
                            </button>
                        </a>
                    </div>
                    <button id="new-quote" onClick={handleClick}>
                        New Quote
                    </button>      
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Presentational)