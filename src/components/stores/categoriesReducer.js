export function loadCategories(){
    return function(dispatch){
        fetch('https://run.mocky.io/v3/ed08cca1-7336-411b-99bd-dc3e7bbf3ad3')
        .then((res) => res.json())
        .then((data) => {
            dispatch({type : 'LOAD_CATEGORIES_DONE', payload : data});
        })
    }
}


function categoriesReducer(state = {
    categories : [],

}, action){
    switch(action.type){
        case  'LOAD_CATEGORIES_DONE':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default categoriesReducer;