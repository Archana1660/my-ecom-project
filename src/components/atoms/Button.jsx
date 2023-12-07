import  PropTypes from 'prop-types';

export const Button = ({ handleOnClick, itemDetail = {}, styleButton, children }) => {
    return <button type="button" onClick={()=>handleOnClick(itemDetail)} className={styleButton}>{children}</button>
}

Button.propTypes = {
    handleOnClick: PropTypes.func,
    itemDetail: PropTypes.obj,
    styleButton: PropTypes.obj,
    children: PropTypes.string
}