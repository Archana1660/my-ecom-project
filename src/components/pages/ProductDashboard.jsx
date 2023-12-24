import { useEffect } from "react";
import PropTypes from 'prop-types';

import { Card } from "../organisms/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/ProductDashboardStore/ProductDashboardSlice";
import { StatusCode } from "../../utils/StatusCode";
import { ErrorPage } from "./ErrorPage/ErrorPage";

export const ProductDashboard = ({ category }) => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.ALL_PRODUCT)

    useEffect(() => {
        if (category) {
            dispatch(getProducts(category))
        }
    }, [category, dispatch])

    if (status === StatusCode.LOADING) {
        return <p className="text-xl">Loading...</p>
    }

    if (status === StatusCode.ERROR) {
        return <ErrorPage/>
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

ProductDashboard.propTypes = {
    category: PropTypes.string
};