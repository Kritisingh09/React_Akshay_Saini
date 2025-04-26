
import Shimmer from "./shimmer";
import { CDN_menu ,MENU_API} from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);
  const {resId}=useParams();
  console.log("@@@resId",resId)
  const resInfo=useRestaurantMenu(resId)
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
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log("itemsCard",  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">

      {itemsCard?.map((option, index) => {
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
      })}
    </div>
  );
};
export default RestaurantMenu;
