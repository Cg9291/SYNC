/*improvements:
    -improve randomness by adding a fn that track states, runs the picker functions again if same number is generated consecutively
    -use react way to change --theme variable on click
    -Enforce color change on click
    -Add smooth transition effect onclick
    -review tweet and tumblr post links..copied the ones from project...should try to find my own from api's
*/
/*issues:
    -not rerendering on click..might be due to use of dangerouslysethtml instead of state'
    -first click does not change text/color..mostly due to state & asynchronous nature,try and useEffect to fix*/

import quotes from "../objects/quotes.js";
import themeColors from "../objects/colors.js";
import {useEffect, useRef, useState} from 'react';
import {connect,useDispatch,useSelector,useStore} from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons'
import quoteAction from "../actions/quoteAction.js";



function QuoteBox(props){
    const dispatch=useDispatch()
    
    const [quoteText,setQuoteText]=useState(quotes[props.quoteState].quoteText);
    const [authorText,setAuthorText]=useState("- "+quotes[props.quoteState].quoteAuthor);
    const [themeColor,setThemeColor]=useState(themeColors[0]);

    const quoteID=useSelector((state)=>state.quotePickerReducer.quote);
    const colorID=useSelector((state)=>state.quotePickerReducer.color);
    

    const handleClick=()=>{
        dispatch(quoteAction());
        setQuoteText(quotes[quoteID].quoteText);
        setAuthorText(quotes[quoteID].quoteAuthor);
        setThemeColor(themeColors[colorID])
    }

    return(
        <div id="wrapper" >
            <div id="quote-box">
                <div id="text" style={{color:themeColor}}> 
                    {quoteText} 
                </div>
                <div id="author" style={{color:themeColor}}>
                    {authorText}
                </div>
                <div id="footer-row">
                    <div>
                        <a id="tweet-quote" className="bg-sync" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22An%20unexamined%20life%20is%20not%20worth%20living.%22%20Socrates" style={{backgroundColor:themeColor}}>
                            <FontAwesomeIcon icon={faTwitter} />
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

export default connect(mapStateToProps,mapDispatchToProps)(QuoteBox);