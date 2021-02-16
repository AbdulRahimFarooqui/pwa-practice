const reducer=((state,action)=>{
    switch(action.type){
        case "Add-Transaction":
            return [action.payload,...state];
        case "Delete":
            return state.filter(function (value, ind, arr){return ind !== action.payload.id})

        default:
            return state;
    }
})
export default reducer;