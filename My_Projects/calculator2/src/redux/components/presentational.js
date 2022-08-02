import {connect } from "react-redux"
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"

export default function Presentational(){
    
    return(
        <div>
            <div className="container d-flex justify-content-center">
                <div className="row-cols-4 justify-content">
                    <button className="col-3"></button>
                    <button className="col-3"></button>
                    <button className="col-3"></button>
                </div>
            </div>
        </div>
    )
}

//export default connect(mapStateToProps,mapDispatchToProps)(Presentational)