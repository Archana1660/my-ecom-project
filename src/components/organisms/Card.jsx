import { CartButton } from "../molecules/CartButton";
import { ProductImage } from "../atoms/ProductImage";
import { ProductPrice } from "../atoms/ProductPrice";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({itemDetail, showRemoveButton = true, showButton = true }) => {

    let itemImage = itemDetail?.image;
    let itemPrice = itemDetail?.price;

    return <div className="shadow-lg rounded-xl p-10 md:p-5 lg:p-10 bg-white group flex flex-col justify-center">
        <Link to={`/my-ecom-project/product/${itemDetail.id}`}>
            <ProductImage itemImage={itemImage} style={{height:'15rem', width:'15rem', borderRadius:'2rem'}} />
        </Link>
        <div className="card-details flex flex-col items-center justify-center space-y-2 mt-5">
            <h5 className="font-bold">{itemDetail.title}</h5>
            <ProductPrice itemPrice={itemPrice} />
            {showButton ? <CartButton itemDetail={itemDetail} showRemoveButton={showRemoveButton} /> : null}
        </div>
    </div>
}

Card.propTypes = {
    handleCart: PropTypes.func,
    itemDetail: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string
    }),
    showRemoveButton: PropTypes.bool,
    showButton: PropTypes.bool,
}