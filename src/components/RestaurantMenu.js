
import Shimmer from "./shimmer";
import {useState} from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);
  const {resId}=useParams();
  const [accValue ,setAccordionValue]=useState(null)
  console.log("@@@resId",resId)
  const resInfo=useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //   );
  //   const jsonMenu = await data.json();
  //   console.log("jsonMenu", jsonMenu);
  //   setresInfo(jsonMenu);
  // };
  let itemsCard =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("itemsCard",  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories=itemsCard?.filter((category)=>{
    return category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  console.log("categories",  categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
 {
  categories.map((category,index)=>{
    return <RestaurantCategory key={index+1} category={category?.card?.card} 
    showItems={index === accValue ? true : false}
    setAccordionValue={()=>setAccordionValue(index)}/>
  })
 }
      {/* before */}
      {/* {itemsCard?.map((option, index) => {
        return (
          <div className="card" key={option?.card.info.id}>
          <div className="card-section1">
        <div className="card-head">{option?.card.info.name}</div>
        
        <div className="card-desc">{option?.card.info.description}</div>
          <div>{option?.card.info.ratings.aggregatedRating.rating}</div>
              <div className="card-head-sec">{option?.card.info.defaultPrice}</div>
          </div>
          <div className="card-section2"> <img
                className="card-img"
                src={CDN_menu + option?.card.info.imageId}
              ></img></div>
          </div>
        );
      })} */}
    </div>
  );
};
export default RestaurantMenu;
