import PropTypes from 'prop-types';

export const ProductPrice = ({ itemPrice: productPrice }) => {
    return <p>${productPrice}</p>
}

ProductPrice.propTypes = {
    itemPrice: PropTypes.number
}