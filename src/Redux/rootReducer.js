const initialState = {
    data: []
}



const reducer = (state = initialState, action) => {


    switch (action.type) {
        case 'SET':
            return {
                data: action.getProducts.map(function (el) {
                    return state.data.push(el)
                })
            }
        case 'ADD':
            let arrAdd = state.data.slice()
            arrAdd.push(action.newProduct)
            return {
                data: arrAdd
            }
        case 'REMOVE':
            return {
                data: state.data.filter(el => el.id !== action.id)
            }
        case 'EDIT':
            let arrEdit = state.data.slice()
            arrEdit.push(action.edited)
            return {
                data: arrEdit
            }
        default:
            return state
    }

}

export default reducer