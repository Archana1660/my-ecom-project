import PropTypes from 'prop-types';


export const ProductImage = ({itemImage, style}) => {
    return <img src={itemImage} alt={itemImage} style={style} className="object-contain group-hover:scale-105 duration-200 m-auto" />
}

ProductImage.propTypes = {
    itemImage: PropTypes.string,
    style: PropTypes.object
}