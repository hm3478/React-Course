import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
// import { Route } from "react-router-dom";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [search, setSearch] = useState("");
  const [button, setButton] = useState("Top Rated Restaurants");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  // const handleFilterClick = () => {
  //   const filteredData = res.filter((i) => i.avgRating >= 4);
  //   setRes(filteredData);
  // };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.557269&lng=88.302513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json,"api data")
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //  const dt = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  };
  if (filteredRestaurantList.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="body">
      <div className="search-container">
        <div className="filter">
           <button
            className="filter-btn"
            onClick={() => {
              button === "Top Rated Restaurants"
                ? setButton("All Restaurants") ||
                  setFilteredRestaurantList(restaurantList.filter((i) => i.info.avgRating > 4))
                : setButton("Top Rated Restaurants") || setFilteredRestaurantList(restaurantList)
            }}
          >
            {button}
          </button> 

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />

          <button
            onClick={() => {
              const searchList = restaurantList.filter((resta) => {
               return resta.info.name.toLower().includes(search);
              });
              
              setFilteredRestaurantList(searchList);
              console.log(searchList);
            }}
          >
            search
          </button>
        </div>

        <div className="rest-container">
          {filteredRestaurantList.map((rest) => (
             <Link
             to={"/menu/" + rest?.info?.id}
             key={rest?.info?.id}
           >
            <ResCard resData={rest} key={rest.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
