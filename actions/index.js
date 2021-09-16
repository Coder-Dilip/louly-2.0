 
 
 export const incNumber=(num)=>{
    return {
        type:'INCREMENT',
        payload:num
    }
}





export const decNumber=()=>{
    return {
        type:'DECREMENT'
    }
}


export const squareNumber=(num)=>{
    return {
        type:'SQUARE',
        payload:num
    }
}