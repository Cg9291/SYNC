/*improvements:
    -improve randomness by adding a fn that track states, runs the picker functions again if same number is generated consecutively
    -use react way to change --theme variable on click
*/

import quotes from "../objects/quotes.js"
import themeColors from '../objects/colors.js' 
import {useEffect, useRef} from 'react'
import {connect} from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import App from "../../App.js"
import variables from '../../variables.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter} from '@fortawesome/fontawesome-svg-core'
//import {faTwitter} from '@fortawesome/free-solid-svg-icons'
//import {faTwitter} from '@fortawesome/react-fontawesome'
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons'






function Presentational(props){
    let initIdx=Math.floor(Math.random()*11.9);//review formula

    const textRef=useRef(quotes[initIdx].quoteText);
    const authorRef=useRef("- "+quotes[initIdx].quoteAuthor);

    const handleClick=()=>{
        props.dispatchId();
        props.dispatchColor();
        textRef.current=quotes[props.quoteState].quoteText;
        authorRef.current="- "+quotes[props.quoteState].quoteAuthor;
        //document.getElementsByClassName('App')[0].style.setProperty('--theme-color',themeColors[props.colorState]);
        
    }
    return(
        <div id="wrapper" >
            <div id="quote-box">
                <div id="text" ref={textRef} dangerouslySetInnerHTML={{__html:textRef.current}}>   
                </div>
                <div id="author" ref={authorRef} dangerouslySetInnerHTML={{__html:authorRef.current}}>
                </div>
                <div id="footer-row">
                    <div>
                        <a id="tweet-quote">
                            <button className="bg-sync">
                                 <FontAwesomeIcon icon={faTwitter}/>
                            </button>
                        </a>
                        <a id="tumblr-quote" href='#'>
                            <button className="bg-sync">
                                <FontAwesomeIcon icon={faTumblr}/>
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