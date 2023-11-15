import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CartIcon } from "../atoms/CartIcon"

export const CartCount = () => {
    const cartCount = useSelector(state => state.CART)
    return <div className="relative">
        <Link to="/cart">
            <CartIcon />
        </Link>
        <span className="absolute -top-3 right-3">{cartCount.length}</span>
    </div>
}