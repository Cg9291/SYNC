/*improvements:
    -improve randomness by adding a fn that track states, runs the picker functions again if same number is generated consecutively
    -use react way to change --theme variable on click
    -Enforce color change on click
    -Add smooth transition effect onclick
    -review tweet and tumblr post links..copied the ones from project...should try to find my own from api's
*/
/*issues:
    -not rerendering on click..might be due to use of dangerouslysethtml instead of state'*/

import quotes from "../objects/quotes.js"
import color from "../objects/colors.js";
import {useEffect, useRef} from 'react'
import {connect} from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons'






function QuoteBox(props){
    let initIdx=Math.floor(Math.random()*11.9);//review formula
    

    const textRef=useRef(quotes[initIdx].quoteText);
    const authorRef=useRef("- "+quotes[initIdx].quoteAuthor);

    const handleClick=(props)=>{
        props.dispatchId();
        props.dispatchColor();
        props.initClr();
        props.colorRef=color[props.initClr];
        textRef.current=quotes[props.quoteState].quoteText;
        authorRef.current="- "+quotes[props.quoteState].quoteAuthor;    
    }

    return(
        <div id="wrapper" >
            <div id="quote-box" style={{backgroundColor:props.colorRef}}>
                <div id="text" ref={textRef} dangerouslySetInnerHTML={{__html:textRef.current}}>   
                </div>
                <div id="author" ref={authorRef} dangerouslySetInnerHTML={{__html:authorRef.current}}>
                </div>
                <div id="footer-row">
                    <div>
                        <a id="tweet-quote" className="bg-sync" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22An%20unexamined%20life%20is%20not%20worth%20living.%22%20Socrates">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a id="tumblr-quote" className="bg-sync" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Stephen%20Covey&content=I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button">
                            <FontAwesomeIcon icon={faTumblr}/>
                        </a>
                    </div>
                    <a id="new-quote" href="#" onClick={handleClick}>
                        New Quote
                    </a>      
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(QuoteBox)