import React from "react";

import MenuEditForm from './MenuEditForm/MenuEditForm'
import MenuExample from '././MenuExample/MenuExample'
import { useLocation } from "react-router-dom";


const MenuEdit = () => {
  
    const location = useLocation();
    const { state } = location;
  
    // You can now access the username from state if it exists
    const username = state && state.username ? state.username : null;
    return (
    <div>
    
      <MenuExample/>
      <MenuEditForm username={username} />
    </div>
  );
};

export default MenuEdit;