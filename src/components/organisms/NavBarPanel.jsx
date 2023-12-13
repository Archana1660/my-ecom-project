import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { SearchInput } from "../atoms/SearchInput"
import { CartCount } from "../molecules/CartCount"
import { getAllProductCategories } from "../../store/ProductDashboardStore/ProductCategorieNameSlice"
import './NavBarPanel.css';
import { burgerMenuOpen, burgerMenuClose } from "../../assets";
import { LogOutButton } from "../molecules/LogOutButton";
    
export const NavBarPanel = () => {
    const dispatch = useDispatch()
    let location = useLocation();

    const [showBurgerMenu, setShowBurgerMenu] = useState(false)
    const { data: allCategories } = useSelector(state => state.ALL_CATEGORIES)

    useEffect(() => {
        dispatch(getAllProductCategories())
    }, [dispatch])

    const handleActiveLink = ({isActive}) => {
        if (isActive) {
            return {borderBottom: '2px solid' }
        } 
    }

    const handleShowMenu = () => {
        setShowBurgerMenu(!showBurgerMenu)
    }

    return (
        <div className="bg-rose-50 rounded-lg shadow-lg">
            <nav className="flex items-center p-1 md:p-4 m-2 justify-between border-b board-grap-500">
                <ul className="hidden md:flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 ">
                    <li>
                        <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/">Home</NavLink>
                    </li>
                    <li className="group">
                        <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/categories">Categories</NavLink>
                    </li>
                    <li className="group">
                        <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/cart">Cart</NavLink>
                    </li>
                </ul>
                <nav className="main-navigation md:hidden block relative">
                    <img src={showBurgerMenu ? burgerMenuClose : burgerMenuOpen} alt={showBurgerMenu ? burgerMenuOpen : burgerMenuClose} className="w-8 h-8" onClick={handleShowMenu} />
                    <ul className={`p-5 rounded-xl shadow-2xl bg-white z-10 duration-200 absolute ${showBurgerMenu ? 'opacity-100 block': 'opacity-0 hidden'}`}>
                        <li className="group border-2 border-purple-400 rounded-lg py-2 mb-2">
                            <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/">Dashboard</NavLink>
                        </li>
                        <li className="group border-2 border-purple-400 rounded-lg py-2 mb-2">
                            <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/categories">Categories</NavLink>
                        </li>
                        <li className="group border-2 border-purple-400 rounded-lg py-2 mb-2">
                            <NavLink className="border-black group-hover:border-b-2 duration-200" style={handleActiveLink} to="/cart">Cart</NavLink>
                        </li>
                        <li>
                            <LogOutButton/>
                        </li>
                    </ul>
                </nav> 
                <div className="flex space-x-6">
                    <SearchInput />
                    <CartCount />
                    <div className="hidden md:block">
                        <LogOutButton />
                    </div>
                </div>
            </nav>
        
            {(location?.pathname !== '/cart')? <nav className="category-list p-4 m-2">
                <ul className="flex flex-wrap justify-around">
                    {allCategories?.map(category => {
                        return <li key={category} className="group border-solid border-r-2 sm:border-none">
                            <NavLink className="px-1 my-1 hover:border-b-2 border-black duration-200" to={`/categories/${category}`}>{category}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </nav> : null
            }
        </div>
    )
}

