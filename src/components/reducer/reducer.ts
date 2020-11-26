import {actionType} from './operations'

  
const InitialState={
    pics:{},
}
export const reducer = (state:any=InitialState, action:any) => {
switch(action.type){
    case actionType.LOAD_DATA:
        console.log(state)
        return Object.assign({}, state,{
            pics:action.payload,
        })

    
}
return state
}