import  {useParams,useLocation} from "react-router-dom";


function Movie() {
    const {title} = useParams();
    //  const value = useMatch();
    const value2 =useLocation();
    //console.log(value);
    console.log(value2);

    return(
        <>
            <h1>Some move {title}</h1>


        </>
    );

}

export {Movie};