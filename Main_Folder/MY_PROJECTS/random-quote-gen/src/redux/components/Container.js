import { useState,useRef } from "react";
import {connect,useDispatch,useSelector,useStore} from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../mappings.js"
import QuoteBox from "./QuoteBox.js";
import quotes from "../objects/quotes.js";

import color from "../objects/colors.js"
import quoteAction from "../actions/quoteAction.js";

export function Container(props){
    const dispatch=useDispatch();

    const [quoteState,setQuoteState]=useState(quotes[quoteID].quoteText);
    const [authorState,setAuthorState]=useState("- "+quotes[quoteID].quoteAuthor);
    
    const quoteID=useSelector((state)=>state.quotePickerReducer.quote);
    const colorID=useSelector((state)=>state.quotePickerReducer.color)

    const handleClick=(props)=>{
        dispatch(quoteAction());
        setQuoteState(quotes[quoteID].quoteText);
        setAuthorState(quotes[quoteID].quoteAuthor);
        /*props.dispatchId();
        props.dispatchColor();
        //props.colorRef=color[props.initClr];
        //alert("clicked") ;*/
    }

    QuoteBox.defaultProps={
        quoteState:quoteState,
        authorState:authorState,
        quoteID:quoteID,
        handleClick:handleClick()
    }
    
    return(
        <div>
            <QuoteBox/>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Container);