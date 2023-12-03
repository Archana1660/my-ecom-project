import PropTypes from 'prop-types';


export const ProductImage = ({ itemImage: productImage }) => {
    return <img src={productImage} alt={productImage} className="object-contain group-hover:scale-105 duration-200" />
}

ProductImage.propTypes = {
    itemImage: PropTypes.string
}