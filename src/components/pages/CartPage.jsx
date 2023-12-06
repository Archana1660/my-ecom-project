import { useSelector } from "react-redux"
import { Card } from "../organisms/Card";

export const CartPage = () => {
    const products = useSelector(state => state.CART)
    return <main>
        <h1 className="font-bold text-2xl">Cart Dashboard</h1>
           

        {products.length > 0 ? 
                <section className="grid grid-cols-4 gap-4">
                    {products.map((product) => {
                        return <Card key={product.id} itemDetail={product} showRemoveButton={true} />
                    })}
                     </section>

                :
                <p>Your Cart is empty! Please continue shopping.</p>
        }
    </main>
}