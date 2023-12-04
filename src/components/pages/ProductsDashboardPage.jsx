import { useEffect, useState } from "react"
import { Card } from "../organisms/Card";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductDashboardStore/ProductDashboardSlice";
import { StatusCode } from "../../utils/StatusCode";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import PropTypes from 'prop-types';

export const ProductsDashboardPage = ({ category }) => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.ALL_PRODUCT)

    useEffect(() => {
        if (category) {
            dispatch(getProducts(category))
        } else {
            dispatch(getProducts())
        }
    }, [category, dispatch])

    if (status === StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if (status === StatusCode.ERROR) {
        return <ErrorPage/>
    }

    const handleAddItemToCart = (itemDetail) => {
        dispatch(add(itemDetail))
    }

    return <div className="flex items-center justify-center min-h-screen ">
        <section className="bg-neutral-100 p-6 m-2 shadow-2xl rounded-3xl md:p-20">

            <div className="grid gap-5 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
                {products?.map((product) => {
                    return <Card key={product.id} handleCart={handleAddItemToCart} itemDetail={product}/>
                })}
            </div>

        </section>
    </div>
}

ProductsDashboardPage.propTypes = {
    category: PropTypes.string
};