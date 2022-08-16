export default function Session(){
    return(
        <div>
            <div id='session-label'>
                Session Length
            </div>
            <button id="session-increment" className="fa fa-arrow-circle-up"></button>
            <div id="session-length">25*</div>
            <button id="session-decrement" className="fa fa-arrow-circle-down"></button>
        </div>
    );
}