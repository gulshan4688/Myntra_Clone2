import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDeleteForever } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  const itemFound = bagitems.indexOf(item.id )>=0;
  const handleAddToBag = () => {
    dispatch(bagActions.addItemsToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemFound ? (
          <button type="button" className=" btn-remove-bag" onClick={handleRemoveFromBag} >
            <MdDeleteForever />
            Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            className=" btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoBagAddOutline style={{ padding: "0 0 3px 0px " }} /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
