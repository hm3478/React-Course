import ResCard from "./ResCard";
import { resObj } from "../data/resObj";
import { useState ,useEffect} from "react";

const Body = () => {
  const [res, setRes] = useState([]);


  // const handleFilterClick = () => {
  //   const filteredData = res.filter((i) => i.avgRating >= 4);
  //   setRes(filteredData);
  // };

useEffect(()=>{
  fetchData();
},[])
const fetchData = async ()=>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.557269&lng=88.302513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
const json = await data.json();
setRes( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


};
// useEffect(()=>{
// //   fetchData();
// // },[])

// // const fetchData= async ()=>{
// //   const data = await fetch(
// //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.848717&lng=77.6727463&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
// //        );
      
// //      const json = await data.json();
// //      console.log(json.data.cards)
// //      setRes(json.data.cards[3])
// // }


if(res.length===0){return <h2>Loading....</h2>}
  return (
    <div className="body">
      <div className="search-container">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
    const x = res.filter((i) => i.avgRating >= 4);
    setRes(x);
  }}
   >
            Top Rated Restaurants
          </button>
        </div>

        <div className="rest-container">
          {res.map((rest) => (
            <ResCard resData={rest} key={rest.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
