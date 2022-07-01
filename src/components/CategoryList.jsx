import {CategoryItem} from "./CategoryItem";

function CategoryList({catalog = []}) {
    console.log(catalog);

    return <div className={'list'}>

        {catalog.map(el => (
                <CategoryItem key={el.id} {...el} />
            ))}
    </div>


}

export {
    CategoryList
}