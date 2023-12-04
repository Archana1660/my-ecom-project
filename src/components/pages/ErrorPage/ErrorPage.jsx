import { useRouteError } from "react-router"
import { errorImg } from "../../../assets";
export const ErrorPage = () => {
    const error = useRouteError();

    return <div className="flex flex-col">
        <h1 className="text-9xl">Oops!</h1>
        <img src={errorImg} alt={ errorImg} className="w-60 mx-auto"/>
        <p className="my-10 text-xl">Sorry, an unexpected error has occured. Please try after sometime.</p>
        <p>
            <i>{ error.statusText || error.message}</i>
        </p>
    </div>
}