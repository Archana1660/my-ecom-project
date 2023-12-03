import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../atoms/SearchInput"
import { CartCount } from "../molecules/CartCount"
import { getAllProductCategories } from "../../store/ProductDashboardStore/ProductCategoriesSlice"
import './NavBarPanel.css';

export const NavBarPanel = () => {
    const dispatch = useDispatch()
    const { data: allCategories } = useSelector(state => state.ALL_CATEGORIES)
    let location = useLocation();

    useEffect(() => {
        dispatch(getAllProductCategories())
    }, [dispatch])

    const handleActiveLink = ({isActive}) => {
        if (isActive) {
        return {borderBottom: '2px solid' }
            } 
    }

    return (
        <div className="bg-rose-50 rounded-lg  shadow-lg">
            <nav className="flex items-center p-4 m-2 justify-between border-b board-grap-500">
                <ul className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 ">
                    <li className="group">
                        <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/">All Categories</NavLink>
                    </li>
                    <li className="group">
                        <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/cart">Cart</NavLink>
                    </li>
                </ul>
                <div className="flex space-x-6">
                    <SearchInput />
                    <CartCount />
                </div>
            </nav>
        
            {(location?.pathname !== '/cart')? <nav className="p-4 m-2">
                <ul className="flex justify-around">
                    {allCategories?.map(category => {
                        return <li key={category}><NavLink to={`${category}`}>{category}</NavLink></li>
                    })}
                </ul>
            </nav>: null}
           
        </div>
    )
}

