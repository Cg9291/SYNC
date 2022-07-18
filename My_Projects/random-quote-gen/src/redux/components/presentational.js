import quotes from "./quotes.js"
import {useRef} from 'react'
import {connect} from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"



function Presentational(props){
    const quoteBox=useRef(null);
    const handleClick=()=>{
        props.dispatchId()
        document.getElementById("quote-box").innerHTML=quotes[props.indexState].quoteText;
        document.getElementById("quote-author").innerHTML=quotes[props.indexState].quoteAuthor;
    }
    return(
        <div>
            <wrapper id="quote-box" ref={quoteBox}>
                <div id="text">
                    
                </div>
                <div id="author">

                </div>
                <button id="new-quote" onClick={handleClick}>
                    New Quote
                </button>
                <a id="tweet-quote">

                </a>
            </wrapper>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Presentational)