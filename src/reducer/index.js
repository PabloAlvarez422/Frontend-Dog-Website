const initialState = {
    dogs : [],
    detail : [],
    temperaments : [],
    allDogs : [],
    dogsRender: [],
};

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
                detail: []
            }
        case 'GET_NAME_DOGS':
            return{
                ...state,
                dogs: action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDogs = state.allDogs
            const temperamentFiltered = action.payload === 'todos'? allDogs : allDogs.filter(el => el.temperament?.includes(action.payload) || el.temperaments?.includes(action.payload));
            return{
                ...state,
                dogs: temperamentFiltered
            }
        case 'FILTER_BY_ORIGIN':
            const originFiltered = action.payload === 'createdInDb'? state.allDogs.filter(el=>el.createdInDb) : state.allDogs.filter(el=>!el.createdInDb)
                return{
                    ...state,
                    dogs: action.payload === 'all' ? state.allDogs : originFiltered
                }
        case 'ORDER_BY_NAME':
            let allDogsOrderByName = state.allDogs;
            if (action.payload === "asc") {
                allDogsOrderByName.sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    } else {
                        return 0;
                    }
                })
            } else {
                allDogsOrderByName.sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA > nameB) {
                        return -1
                    }
                    if (nameA < nameB) {
                        return 1
                    } else {
                        return 0;
                    }
                })
            }
            const [cero,uno,dos,tres,cuatro,cinco,seis,siete] = allDogsOrderByName;
            return {
                ...state,
                dogsRender: [cero,uno,dos,tres,cuatro,cinco,seis,siete],
                dogs: allDogsOrderByName
            }
                case 'ORDER_BY_WEIGHT':
                    let allDogsOrderByWeight = state.allDogs;
                    if (action.payload === 'ascending') {
                        allDogsOrderByWeight.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
                    }
                    else {
                        allDogsOrderByWeight.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
                    }
                    const [cero0,uno0,dos0,tres0,cuatro0,cinco0,seis0,siete0] = allDogsOrderByWeight;
                    return {
                        ...state,
                        dogsRender: [cero0,uno0,dos0,tres0,cuatro0,cinco0,seis0,siete0],
                        dogs: allDogsOrderByWeight
                    }
                case 'ORDER_BY_HEIGHT':
                    let allDogsOrderByHeight = state.allDogs;
                    if (action.payload === 'ascending'){
                        allDogsOrderByHeight.sort((a,b)=> parseInt(a.height) - parseInt(b.height));                        
                    }
                    else{
                        allDogsOrderByHeight.sort((a,b) => parseInt(b.height) - parseInt(a.height));
                    }
                    const [cero1,uno1,dos1,tres1,cuatro1,cinco1,seis1,siete1] = allDogsOrderByHeight;
                    return{
                        ...state,
                        dogsRender:[cero1,uno1,dos1,tres1,cuatro1,cinco1,seis1,siete1],
                        dogs: allDogsOrderByHeight
                    }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperaments: action.payload
            }
        case "POST_DOG":
            return{
                ...state,
            }
        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            }
        case "CLEAR_DETAIL":
            return{
                ...state,
                detail:[]
            }         
        default:
            return state;
    }
}

export default rootReducer;