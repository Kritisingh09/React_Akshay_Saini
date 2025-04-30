import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    //const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info;
    return (
        <div className="res-card">
             <img className="res-img" src={CDN_URL+resData?.info?.cloudinaryImageId}></img>
            <div className="res-body">
            <div className="res-title">{resData?.info?.name}</div>
           <span className="res-description">{resData?.info?.cuisines.join(",")}</span>
          <ul className="res-footer">
          <li className="res-rating">{resData?.info?.avgRating}</li>
           <li>{resData?.info?.sla.deliveryTime}</li>
           <li>{resData?.info?.costForTwo}</li>
          </ul>
            </div>
            <div className="res-sec">
                40% off | Use SPECIALS
            </div>
            <div className="res-detail">
                <span>View Details</span>
            </div>
        </div>
        
        
    )
}
export const PromotedCard=(RestaurantCard)=>{
    return (props)=>{

return (
    <div>
        <labl className="promoted-label">Promoted</labl>
        <RestaurantCard {...props}/>
    </div>
)
    }
    
}
export default RestaurantCard;