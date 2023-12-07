import PropTypes from 'prop-types';
import { useCartAddRemove } from "../../utils/useCartAddRemove";
import { Button } from '../atoms/Button';

export const CartButton = ({itemDetail, showRemoveButton = true, customStyle = '' }) => {
    const { handleAddItemToCart, handleRemoveItemToCart } = useCartAddRemove();


    const styleAddButton = `bg-blue-600 rounded-lg w-32 h-10 text-white ${customStyle}`;
    const styleRemoveButton = `bg-red-600 rounded-lg w-32 h-10 text-white`

    return showRemoveButton ?
        <Button handleProduct={handleRemoveItemToCart} itemDetail={itemDetail} styleButton={styleRemoveButton}>Remove Cart</Button>
        : 
        <Button handleProduct={handleAddItemToCart} itemDetail={itemDetail} styleButton={styleAddButton}>Add Cart</Button>
        
}
CartButton.propTypes = {
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