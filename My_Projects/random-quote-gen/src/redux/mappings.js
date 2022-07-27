import colorAction from "./actions/colorAction.js"
import colorPicker from "./functions/colorPicker.js"
import indexAction from "./actions/quoteAction.js"
import indexPicker from "./functions/quotePicker.js"

const mapStateToProps=(state)=>{
    return {
        quoteState:state.quotePickerReducer,
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