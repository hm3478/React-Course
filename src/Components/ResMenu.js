import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MENU_API_URL } from '../utils/constants';

const ResMenu = () => {
  const { resId } = useParams();
  const [menuInfo, setMenuInfo] = useState([]);
  useParams(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const menuData = await fetch(MENU_API_URL + 467);
    const jsonData = await menuData.json();
    setMenuInfo(jsonData);
  }

  const { name, cuisines, costForTwo } = menuInfo?.data?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    menuInfo?.data?.cards[2]?.groupedCard?.cardGroupedMap?.REGULAR?.card[1]?.card?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines ? cuisines.join(', ') : ''} - Rs.{costForTwo / 100}
      </p>
      <ul>
        {itemCards && itemCards.length > 0 && (
          <li>{itemCards[0]?.card?.info?.name}</li>
        )}
        <li>Burger</li>
        <li>Burger</li>
        <li>Burger</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default ResMenu;
