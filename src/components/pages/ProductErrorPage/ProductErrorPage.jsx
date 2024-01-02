import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import  parcelImage from "../../../assets/parcel.gif";
import  homePageIcon  from "../../../assets/home.gif";

export const ProductErrorPage = ({productsErrorMessage}) => {
    const navigate = useNavigate()
    return <div className="flex flex-col items-center">
        <h1 className="text-9xl">Oops!</h1>
        <img src={parcelImage} alt={ parcelImage} className="w-60 mx-auto"/>
        <p className="my-10 text-xl">Sorry, { `${productsErrorMessage}`}</p>
        <button type="button" onClick={()=>navigate('/my-ecom-project/')} className="w-40 border border-black rounded-lg p-2 mt-1 hover:bg-green-500 duration-200">
            <img src={homePageIcon} alt={homePageIcon} className="w-7 h-7 mx-auto rounded-lg" />
            Back to Home page
        </button>
    </div>
}

ProductErrorPage.propTypes = {
    productsErrorMessage: PropTypes.string
};