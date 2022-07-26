import colorAction from "./actions/colorAction.js"
import colorPicker from "./functions/colorPicker.js"
import indexAction from "./actions/indexAction.js"
import indexPicker from "./functions/indexPicker.js"

const mapStateToProps=(state)=>{
    return {
        indexState:state.indexReducer,
        colorState:state.colorPickerReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        dispatchId:(idx=indexPicker)=>{
            dispatch(indexAction(idx))
        },
        dispatchColor:(clr=colorPicker)=>{
            dispatch(colorAction(clr))
        }
    }
}

export {mapStateToProps,mapDispatchToProps}