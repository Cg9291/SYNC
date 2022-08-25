export default function Break(props){
    return(
        <div>
            <div id='break-label'>
                Break Length
            </div>
            <button id="break-increment" className="fa fa-arrow-circle-up"></button>
            <div id="break-length">{props.breakLengthState}</div>
            <button id="break-decrement" className="fa fa-arrow-circle-down"></button> 
        </div>
    );
}