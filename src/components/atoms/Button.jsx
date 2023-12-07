import  PropTypes from 'prop-types';

export const Button = ({ handleProduct, itemDetail, styleButton, children }) => {
    return <button onClick={()=>handleProduct(itemDetail)} className={styleButton}>{children}</button>
}

Button.propTypes = {
    handleProduct: PropTypes.func,
    itemDetail: PropTypes.obj,
    styleButton: PropTypes.obj,
    children: PropTypes.string
}