/*
TODO
DEPLOY READY
    -*maybe find a way to detect and resize automatically when text doesnt fit
    -**Maybe add animantion that shrinks text size on click and extends it back to normal at end of animation
    -**improve randomness by adding a fn that track states, runs the picker functions again if same number is generated consecutively or could be improved by adding more color options
    -**review tweet and tumblr post links..copied the ones from project...should try to find my own from api's
*/

import quotes from "../objects/quotes.js";
import themeColors from "../objects/colors.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import quoteAction from "../actions/quoteAction.js";
import colorAction from "../actions/colorAction.js";
import stateTrackingObject from "../objects/stateTracking.js";
import { useRef } from "react";

export default function QuoteBox(props) {
  const quoteID = useSelector(state => state.quotePickerReducer.quote);
  const colorID = useSelector(state => state.colorPickerReducer.color);

  const dispatch = useDispatch();
  const [animClass, setAnimClass] = useState(false);

  const [quoteText, setQuoteText] = useState(quotes[quoteID].quoteText);
  const [authorText, setAuthorText] = useState("- " + quotes[quoteID].quoteAuthor);
  const [themeColor, setThemeColor] = useState(themeColors[colorID]);

  const handleClick = () => {
    setAnimClass(true);
    setTimeout(() => {
      dispatch(colorAction());
    }, 100);

    setTimeout(() => {
      dispatch(quoteAction());
    }, 500);
    setTimeout(() => {
      setAnimClass(false);
    }, 600);

    /* BELOW IS CODE USED TO IMPROVE RANDOMNESS
        if(stateTrackingObject.quotes.indexOf(quoteID)>=0){
            dispatch(quoteAction());
        }
        else{
            stateTrackingObject.quotes.push(quoteID);
        } */

    //clearTimeout(delayRef.current)
  };

  useEffect(() => {
    setQuoteText(quotes[quoteID].quoteText);
    setAuthorText(quotes[quoteID].quoteAuthor);
    setThemeColor(themeColors[colorID]);
  }, [quoteID, colorID]);

  return (
    <div
      id="wrapper"
      className="bgColorTransition"
      style={{ backgroundColor: themeColor }}
    >
      <div id="quote-box">
        <div
          id="text"
          className={animClass ? "small-device-textsize colorTransition" : "small-device-textsize"}
          // key={quoteText}
          style={{ color: themeColor }}
        >
          {/* {JSON.stringify(stateTrackingObject.quotes)} */}
          {/*used for randomness tracking}*/}
          <svg
            className="quoteSvg"
            xmlns="http://www.w3.org/2000/svg"
            width="4rem"
            height="1.35rem"
            viewBox="100 100 200 320"
          >
            <path
              d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
              fill={themeColor}
            />
          </svg>
          {quoteText}
        </div>
        <div
          id="author"
          className={animClass ? "small-device-authorsize colorTransition" : "small-device-authorsize"}
          style={{ color: themeColor }}
        >
          <i>
            <b> - {authorText} </b>
          </i>
        </div>
        <div id="footer-row">
          <div>
            <a
              id="tweet-quote"
              className="bg-sync bgColorTransition"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22An%20unexamined%20life%20is%20not%20worth%20living.%22%20Socrates"
              style={{ backgroundColor: themeColor }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              id="tumblr-quote"
              className="bg-sync bgColorTransition"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Stephen%20Covey&content=I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
              style={{ backgroundColor: themeColor }}
            >
              <FontAwesomeIcon icon={faTumblr} />
            </a>
          </div>
          <button
            type="button"
            id="new-quote"
            className="bgColorTransition"
            style={{ backgroundColor: themeColor }}
            onClick={handleClick}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
