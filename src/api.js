import {API_URL,API_KEY} from "./config";


const getMealById = async (mealId) => {
    const responce =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    return await responce.json();
};
const getAllCategories = async () => {

    const responce = await fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/categories.php`);
    return await responce.json();
};
 const getFilteredCategory = async (catName) => {

    const responce =  await fetch( `https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${catName}` );
    return await responce.json();
 };

 export {getMealById,getAllCategories,getFilteredCategory};