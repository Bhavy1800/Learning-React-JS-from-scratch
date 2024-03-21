import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  //State Variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  //Normanl JS variable
  //let resList = [];

  return (
    <div className="body">
      {/* <div className="Search">
        <input
          type="text"
          className="searchbox"
          placeholder="Search your favourite dish here"
        />
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
