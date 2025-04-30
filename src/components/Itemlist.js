import { CDN_menu ,MENU_API} from "../utils/constants";

const ItemList=({itemList})=>{
    console.log("@@@itemList in Items Component",itemList);
return (
    <div className="item-list">
          <div className="card" key={itemList?.card?.info?.id}>
          <div className="card-section1">
        <div className="card-head">{itemList?.card.info.name}</div>
        
        <div className="card-desc">{itemList?.card.info.description}</div>
          <div>{itemList?.card.info.ratings.aggregatedRating.rating}</div>
              <div className="card-head-sec">{itemList?.card.info.defaultPrice}</div>
          </div>
          <div className="card-section2"> <img
                className="card-img"
                src={CDN_menu + itemList?.card.info.imageId}
              ></img></div>
          </div>
    </div>
)
}
export default ItemList;