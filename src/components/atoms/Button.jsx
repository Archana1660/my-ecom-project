import PropTypes from 'prop-types';
import { useCartAddRemove } from "../../utils/useCartAddRemove";


export const Button = ({itemDetail, showRemoveButton = true, customStyle = '' }) => {
    const { handleAddItemToCart, handleRemoveItemToCart } = useCartAddRemove();


    const styleAddButton = `bg-blue-600 rounded-lg w-32 h-10 text-white ${customStyle}`;
    const styleRemoveButton = `bg-red-600 rounded-lg w-32 h-10 text-white`

    return showRemoveButton ?
        <button onClick={() => handleRemoveItemToCart(itemDetail)} className={styleRemoveButton}>Remove Cart</button>
        : 
        <button onClick={() => handleAddItemToCart(itemDetail)} className={styleAddButton}>Add Cart</button>
        
}
Button.propTypes = {
    handleCart: PropTypes.func,
     itemDetail: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string
     }),
    showRemoveButton: PropTypes.bool,
     customStyle: PropTypes.string
}