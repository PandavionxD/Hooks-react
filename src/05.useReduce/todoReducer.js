export const todoReducer = (initialState=[], action)=>{
    
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no se encuentra implementado')
    
        default:
            return initialState
    }


}