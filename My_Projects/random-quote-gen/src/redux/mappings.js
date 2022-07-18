import indexAction from "./actions/indexAction.js"
import indexPicker from "./components/indexPicker.js"

const mapStateToProps=(state)=>{
    return {
        indexState:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        dispatchId:(idx=indexPicker)=>{
            dispatch(indexAction(idx))
        }
    }
}

export {mapStateToProps,mapDispatchToProps}