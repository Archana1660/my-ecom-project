import { useSelector, useDispatch } from "react-redux"
import { remove } from '../../store/CartSlice';
import { Card } from "../organisms/Card";

export const CartPage = () => {
    const dispatch = useDispatch()

    const handleRemoveItemToCart = (itemDetail) => {
        dispatch(remove(itemDetail.id))
    }
    const products = useSelector(state => state.CART)
    return <main>
        <h1 className="font-bold text-2xl">Cart Dashboard</h1>
        <section className="grid grid-cols-4 gap-4">
            {products.map((product) => {
                return <Card key={product.id}
                    handleCart={handleRemoveItemToCart} itemDetail={product} isAddItemButton={false} />
            })}
        </section>
    </main>
}