import { useEffect} from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CartButton } from "../../molecules/CartButton";
import { ProductErrorPage } from '../ProductErrorPage/ProductErrorPage';
import { ProductSkeleton } from './ProductSkeleton';

import { getProductDetail} from "../../../store/ProductSlice";

import { StatusCode } from "../../../utils/StatusCode";

export const ProductPage = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.PRODUCT.productData);
    const status = useSelector(state => state.PRODUCT.status);
    const product = useSelector(state => state.CART)
    const params = useParams() 
    useEffect(() => {
        dispatch(getProductDetail(params.id))
    }, [dispatch, params])

    const isAdded = product.some((product) => data.id === product.id)


    if (status === StatusCode.LOADING) {
        return <ProductSkeleton/>
    }

    if (status === StatusCode.ERROR) {
        return <ProductErrorPage productsErrorMessage={data} />
    }

    return (
        <>
            <main>
                <section className="flex items-center justify-center">
                    <div className="flex flex-col p-6 m-3 space-y-10 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                        <div>
                            <img src={data?.image} alt={data?.title} className="w-60 hover:scale-105 duration-200 mx-auto" />
                        </div>
                        <div className="flex flex-col space-y-6 text-left">
                            <div>
                                <p className="bg-black text-white rounded-full px-3 py-1 inline-block">Free shipping</p>
                            </div>
                            <h2 className="max-w-sm text-2xl font-medium">{data?.title}</h2>
                            <div className="flex space-x-2 group">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full grounp-hover:animate-ping"></div>  <p className="text-sm">{data?.rating?.rate} <span className="font-bold">Rating</span></p>
                            </div>
                            <p className="text-5xl font-bold">${data?.price}</p>
                            <p className="font-bold text-gray-600">Offer valid till September 18 or as long as stock lasts!</p>

                            <CartButton itemDetail={data} showRemoveButton={isAdded} customStyle='w-full shadow-xl shadow-blue-800 active:translate-y-2 hover:shadow-sm duration-200' />

                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}