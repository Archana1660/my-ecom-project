import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../atoms/Button";
import { getProductDetail } from "../../store/ProductSlice";
import { CartIcon, WishListIcon } from "../atoms/CartIcon";

export const ProductPage = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.PRODUCT.productData);
    const params = useParams() //what is params?

    useEffect(() => {
        dispatch(getProductDetail(params.id))
    }, [dispatch, params])

    return <main >
        <section className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col p-6 m-3 space-y-10 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                <div>
                    <img src={data?.image} alt={data?.title} className="w-60 hover:scale-105 duration-200 mx-auto" />
                </div>
                <div className="flex flex-col space-y-6 text-center md:text-left">
                    <div>
                        <p className="bg-black text-white rounded-full px-3 py-1 inline-block">Free shipping</p>
                    </div>
                    <h2 className="max-w-sm text-2xl font-medium">{data?.title}</h2>
                    <p className="text-5xl font-bold">${data?.price}</p>
                    <p className="font-light text-gray-600">Offer valid till September 18 or as long as stock lasts!</p>

                    <Button customStyle='w-full shadow-xl shadow-blue-800 hover:translate-y-2 hover:shadow-sm duration-200' />

                    <div className="flex items-center space-x-2 group">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full grounp-hover:animate-ping"></div>  <p className="text-sm">{data?.rating?.rate}</p>
                    </div>

                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
                        <button type="button" className="border border-black px-3 py-2 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                            <CartIcon customizeStyle="w-4 h-4 inline-block" /> Add to cart</button>
                        <button type="button" className="border border-black px-3 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg shadow-black duration-200"> <WishListIcon customizeStyle="w-4 h-4 inline-block" /> Add to wishlist</button>
                    </div>

                </div>

            </div>
        </section>
    </main>
}