import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MENU_API_URL } from '../utils/constants';

const ResMenu = () => {
  const { resId } = useParams();
  console.log("resId",resId)
  const [menuInfo, setMenuInfo] = useState([]);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const menuData = await fetch(MENU_API_URL + resId );
    const jsonData = await menuData.json();
    console.log("Api data",jsonData)

    setMenuInfo(jsonData);
    console.log("menu info",menuInfo)
  
  }

  const { name, cuisines, costForTwo } = menuInfo?.data?.cards[0]?.card?.card?.info || {};
  if(menuInfo===null)return <h1>Loading....</h1>
  const {itemCards} = menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||{};
  console.log("menu items",itemCards)



  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines ? cuisines.join(', ') : ''} - Rs.{costForTwo / 100}
      </p>
      <ul>
        {/* {itemCards.map(item=><li>{item?.card?.info?.name}</li>)} */}
      
      </ul>
    </div>
  );
};

export default ResMenu;
