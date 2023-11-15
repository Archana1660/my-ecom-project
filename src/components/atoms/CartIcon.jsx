import icon from '../../assets/cartIcon.png'
import wishlistIcon from '../../assets/wishList.png'
import PropTypes from 'prop-types';

export const CartIcon = ({ customizeStyle = 'w-10 h-10' }) => {
    return <img className={customizeStyle} src={icon} alt="cart" />
}


export const WishListIcon = ({ customizeStyle = 'w-10 h-10' }) => {
    return <img className={customizeStyle} src={wishlistIcon} alt="wishList" />
}

CartIcon.propTypes = {
    customizeStyle: PropTypes.string
}

WishListIcon.propTypes = {
    customizeStyle: PropTypes.string
}