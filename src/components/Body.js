import RestaurantCard,{ PromotedCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //this is how we create state variable,we have to pass the default value
  const [initSearch, setSearchValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = PromotedCard(RestaurantCard);
  const onlineStatus=useInternetStatus();
  const {loggedInUser,setUserName}=useContext(UserContext);
  useEffect(() => {
    console.log("hey use effect called");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }; 
  // if(listOfRestaurants.length===0){
  //     return <Shimmer/>
  // }
if(onlineStatus===false)return (<h1>Looks you're offline ,check your internet connection</h1>)
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-head">
        <div className="search-cont">
          <input
            type="text"
            value={initSearch}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(initSearch.toLowerCase());
              });
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res) => Number(res.info.avgRating) > 4.2
              );
              console.log("filteredList", filteredList);
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
            <input type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants?.map((restaurants) => (
          <Link key={restaurants?.info?.id} to={"/restaurants/"+ restaurants?.info?.id}>
            {restaurants?.data?.promoted === true ? <RestaurantCardPromoted resData={restaurants}/> :  <RestaurantCard  resData={restaurants}/>}
         </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
