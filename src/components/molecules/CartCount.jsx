import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CartIcon } from "../atoms/CartIcon"

export const CartCount = () => {
    const cartCount = useSelector(state => state.CART)
    return <div className="flex items-center">
        <Link className="relative" to="/my-ecom-project/cart">
        <span className="absolute -top-3 right-2">{cartCount.length}</span>
            <CartIcon />
        </Link>
    </div>
}