import {actionType} from './operations'

  
const InitialState={
    pics:[]
}
export const reducer = (state:any, action:any) => {
    state=InitialState
switch(action.type){
    case actionType.LOAD_DATA:
        return Object.assign({}, state,{
            pics:action.payload,
        })
}

}