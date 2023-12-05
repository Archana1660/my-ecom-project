import { add, remove } from "../store/CartSlice";
import { useDispatch } from "react-redux";

export const useCartAddRemove = () => {
    const dispatch = useDispatch();

    const handleAddItemToCart = (itemDetail) => {
    dispatch(add(itemDetail))
    }
    
    
    const handleRemoveItemToCart = (itemDetail) => {
        dispatch(remove(itemDetail.id))
    }

    return {handleAddItemToCart, handleRemoveItemToCart}
}
