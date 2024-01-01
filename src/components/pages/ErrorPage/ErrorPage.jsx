// import { useRouteError } from "react-router"
import { useNavigate } from "react-router-dom";
import  errorImg from "../../../assets/embarrassed.png";
import  homePageIcon  from "../../../assets/home.gif";

export const ErrorPage = () => {
    // const error = useRouteError();
    const navigate = useNavigate()
    return <div className="flex flex-col items-center">
        <h1 className="text-9xl">Oops!</h1>
        <img src={errorImg} alt={ errorImg} className="w-60 mx-auto"/>
        <p className="my-10 text-xl">Sorry, an unexpected error has occured. Please try after sometime.</p>
        <button type="button" onClick={()=>navigate('/my-ecom-project/')} className="w-40 border border-black rounded-lg p-2 mt-1 hover:bg-green-500 duration-200">
            <img src={homePageIcon} alt={homePageIcon} className="w-7 h-7 mx-auto rounded-lg" />
            Back to Home page
        </button>
    </div>
}