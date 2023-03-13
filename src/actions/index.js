const {default: axios} = require ('axios');

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");

        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}
export function filterDogsByTemperament(payload){
    return{
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}
export function filterDogsByOrigin(payload){
    return{
        type: 'FILTER_BY_ORIGIN',
        payload
    }
}
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function orderByWeight(payload){
    return{
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}
export function orderByHeight(payload){
    return{
        type: 'ORDER_BY_HEIGHT',
        payload
    }
}
export function getNameDogs(payload){
    return async function(dispatch){
      try {
        var json = await axios.get("http://localhost:3001/dogs?name=" + payload)
       return dispatch({
           type: 'GET_NAME_DOGS',
           payload: json.data         
          })
      }     
       catch (error) {
        alert('The wanted dog does not exist')
      }
    }
}
export function getTemperaments(){
    return async function (dispatch){
        try {
            var info = await axios.get("http://localhost:3001/temperaments");
        return dispatch({type: "GET_TEMPERAMENTS",payload: info.data})
        } catch (error) {
            console.log(error)
        }
        
    }
}
export function postDog(payload){
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3001/dogs/dog", payload)
        return response;
        } catch (error) {
            console.log(error)
        }
    }
}
export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/dogs/"+ id);
            return dispatch({
                type: "GET_DETAIL",
                payload:json.data
            })
        } catch(error) {
            alert('The wanted dog does not exist')
        }
    }
}
