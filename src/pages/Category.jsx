import { useParams,} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";
import { useNavigate } from "react-router-dom";

function Category() {
    const {name} = useParams();
    const [meals,setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));

        },[name]);
   console.log(meals);
    return <>
        <button className={'btn'} onClick={ () => navigate(-1) }>Go back</button>
        {meals.length}
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}

    </>

}
export {Category}