import {Link,useHistory} from "react-router-dom";


function CategoryItem(props) {
    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    }  = props;



    return (<div className="card">
        <div className="card-image">
            <img src={strCategoryThumb} alt={strCategory}/>
                <span className="card-title">{strCategory}</span>
        </div>
        <div className="card-content">
            <p>ely{strCategoryDescription.slice(0,70)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className={'btn'}/>
        </div>
    </div> );





}






export {CategoryItem}