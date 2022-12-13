import colorAction from "./actions/colorAction.js"
import colorPicker from "./functions/colorPicker.js"
import quoteAction from "./actions/quoteAction.js"
import quotePicker from "./functions/quotePicker.js"

const mapStateToProps=(state)=>{
    return {
        quoteState:state.quotePickerReducer,
        colorState:state.colorPickerReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        dispatchId:(idx=quotePicker)=>{
            dispatch(quoteAction(idx))
        },
        dispatchColor:(clr=colorPicker)=>{
            dispatch(colorAction(clr))
        }
    }
}

export {mapStateToProps,mapDispatchToProps};