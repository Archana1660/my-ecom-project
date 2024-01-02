
import { Outlet } from "react-router";
import { useLocation } from 'react-router-dom';
import { AllProductDashboard } from "./AllProductDashboard";

export const ProductsDashboardLayout = () => {
    const location = useLocation()
    return (
        <>
            {/**    
             * <Outlet/> display specific category list e.g. electronics, jewelery etc
             */}
            {location.pathname !== '/my-ecom-project/categories'? <Outlet/>:<AllProductDashboard/>}
        </>
    )
}