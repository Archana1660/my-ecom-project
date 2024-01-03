import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Card } from "../../organisms/Card";
import { ProductErrorPage } from '../ProductErrorPage/ProductErrorPage';


import { getProducts } from "../../../store/ProductDashboardStore/ProductDashboardSlice";

import { StatusCode } from "../../../utils/StatusCode";
import { ProductDashboardSkeleton } from "./ProductDashboardSkeleton";

export const ProductDashboard = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.ALL_PRODUCT)

    useEffect(() => {
        if (id) {
            dispatch(getProducts(id))
        }
    }, [id, dispatch])

    if (status === StatusCode.LOADING) {
        return <ProductDashboardSkeleton/>
    }

    if (status === StatusCode.ERROR) {
        return <ProductErrorPage productsErrorMessage={products} />
    }


  return (
    <div className="flex items-center justify-center min-h-screen ">
        <section className="bg-neutral-100 p-2 m-2 shadow-2xl rounded-3xl md:p-10">

            <div className="grid gap-5 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
                {products?.map((product) => {
                    return <Card key={product.id} itemDetail={product} showButton={false}/>
                })}
            </div>

        </section>
    </div>
  )
}