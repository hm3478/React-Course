import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MENU_API_URL } from '../utils/constants';

const ResMenu = () => {
  const { resId } = useParams();
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const menuData = await fetch(MENU_API_URL + resId );
    const jsonData = await menuData.json();
    console.log("Api data",jsonData)
    setMenuInfo(jsonData);

  
  }
  if(menuInfo===null) return <h1>Loading....</h1>
   const { name, cuisines, costForTwo } = menuInfo?.data?.cards[0]?.card?.card?.info || {};
   const {itemCards}=  menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||{};
   console.log(itemCards, "itemcard");
   
   return (
     <div className="menu">
       <h1>{name}</h1>
       <p>
         {cuisines ? cuisines.join(', ') :''} - Rs.{costForTwo / 100}
       </p>
       <ul>
      
       </ul>
     </div>
   );
         }   
export default ResMenu;
