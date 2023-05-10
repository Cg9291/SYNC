import {Helmet} from "react-helmet";//this allows to use helmet(which supports the insertion of script tags in the component's html)
import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png"
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png"
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png"
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png"
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png"


export default function Timeline(props){
    return (
      <div id="timeline-div">
        <div id='mid-header'>Home</div>
        <div id="tweet-area">
          <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
          <input id="tweet-input" placeholder="What's happening?"></input>
        </div>
        <div id="icons-row">
          <ul>
            <li><a href="#"><img src={squarepicicon}/></a></li>
            <li><a href="#"><img src={gificon}/></a></li>
            <li><a href="#"><img src={alignicon}/></a></li>
            <li><a href="#"><img src={noiconicon}/></a></li>
            <li><a href="#"><img src={noiconicon}/></a></li>
            <li><a href="#"><img src={locationicon}/></a></li>
          </ul>
          <button>Tweet</button>
        </div>
        <a id="timeline"class="twitter-timeline" href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608?ref_src=twsrc%5Etfw" data-chrome="noheader" sourceType="list"
      ownerScreenName= "TwitterDev"
      slug= "national-parks">A Twitter List by TheSportsMediaC</a> 
        <Helmet>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Helmet>
      </div>
    )
  }