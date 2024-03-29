import { HTTP, HTTPS } from "../components/constants/swapi";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения 
 * @returns {String} - url c HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result
}
// ----------------------------------------------------------------
/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса 
 * @returns {Promise} - Promise с результатом
 */
export const getApiResource = async (url) => {
    try{
        const res = await fetch(url)

        if(!res.ok){
            console.error("Could not fetch.", res.status)
            return false;
        }
        return await res.json()
         
        
    }catch(error){
        console.error("Could not fetch.", error.message);
        return false;
    }
    
    
}


export const makeConcurrentRequest = async (url) => {
const res = await Promise.all(url.map(res =>{
        return fetch(res)
            .then(res => res.json())
        
    }));

    return res
}


