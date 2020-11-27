import {actionType} from './operations'

  
const InitialState={
    pictures:[],
    tags:[],
    comboTags:[],
}
export const reducer = (state:any=InitialState, action:any) => {
switch(action.type){
    case actionType.LOAD_STORE:
        return Object.assign({}, state,{
            pictures:state.pictures.concat(action.payload)
        })
    case actionType.CLEAR_ALL:
        return Object.assign({}, state, {
            pictures:action.payload
        })
    case actionType.GROUP:
        return Object.assign({},state,{
            tags:action.payload
        })
    case actionType.COMBO_TAG:
        return Object.assign({}, state,{
            comboTags:action.payload
        })
    case actionType.JOIN:
        return Object.assign({},state,{
            pictures:state.pictures.concat(action.payload)
        })
}
return state
}