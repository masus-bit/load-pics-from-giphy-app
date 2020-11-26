
 export const actionType={
    LOAD_DATA:"LOAD_DATA",
    INIT:"INIT"
}

export const ActionCreator={
    loadData:(data:any)=>{
        return{
            type:actionType.LOAD_DATA,
            payload:data
        }
    },
    
}

export const Operations = {
    loadData:(tag:string)=>(dispatch:any, _getState:any, api:any)=>{
        return api.get(`${tag}`).then((response:any)=>{
            dispatch(ActionCreator.loadData(response.data.data.url))
            
        })
    },

}