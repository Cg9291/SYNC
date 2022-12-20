/*improvements:
    -improve randomness by adding a fn that track states, runs the picker functions again if same number is generated consecutively
    -Add smooth transition effect onclick
    -review tweet and tumblr post links..copied the ones from project...should try to find my own from api's
*/


import quotes from "../objects/quotes.js";
import themeColors from "../objects/colors.js";
import {useEffect, useState} from 'react';
import {useDispatch,useSelector,useStore} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons'
import quoteAction from "../actions/quoteAction.js";
import stateTrackingObject from "../objects/stateTracking.js";


export default function QuoteBox(props){
    const quoteID=useSelector((state)=>state.quotePickerReducer.quote);
    const colorID=useSelector((state)=>state.quotePickerReducer.color);

    
    const dispatch=useDispatch();
    
    const [quoteText,setQuoteText]=useState(quotes[quoteID].quoteText);
    const [authorText,setAuthorText]=useState("- "+quotes[quoteID].quoteAuthor);
    const [themeColor,setThemeColor]=useState(themeColors[colorID]);

    
    const handleClick=()=>{
        dispatch(quoteAction());
        if(stateTrackingObject.quotes.indexOf(quoteID)>=0){
            dispatch(quoteAction());
        }
        else{
            stateTrackingObject.quotes.push(quoteID);
        }
        
    }

    useEffect(()=>{
        setQuoteText(quotes[quoteID].quoteText);
        setAuthorText(quotes[quoteID].quoteAuthor);
        setThemeColor(themeColors[colorID]);
        },[quoteID,colorID])

    return(
        <div id="wrapper" style={{backgroundColor:themeColor}}>
            <div id="quote-box">
                <div id="text" style={{color:themeColor}}> 
                    {JSON.stringify(stateTrackingObject.quotes)}{/*used for randomness tracking}*/}
                    {quoteText} 
                </div>
                <div id="author" style={{color:themeColor}}>
                    {authorText}
                </div>
                <div id="footer-row">
                    <div>
                        <a id="tweet-quote" className="bg-sync" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22An%20unexamined%20life%20is%20not%20worth%20living.%22%20Socrates" style={{backgroundColor:themeColor}}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a id="tumblr-quote" className="bg-sync" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Stephen%20Covey&content=I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" style={{backgroundColor:themeColor}}>
                            <FontAwesomeIcon icon={faTumblr}/>
                        </a>
                    </div>
                    <button type="button" id="new-quote" style={{backgroundColor:themeColor}} onClick={handleClick}>
                        New Quote
                    </button>      
                </div>
            </div>
        </div>
    )
}