import React from "react";
import { useLocation } from "react-router-dom";

import PlaceEditHeader from './PlaceEditHeader/PlaceEditHeader'
import PlaceEditForm from './PlaceEditForm/PlaceEditForm'

const PlaceEdit = () => {
  const location = useLocation();
  const { state } = location;

  // You can now access the username from state if it exists
  const username = state && state.username ? state.username : null;

  return (
    <div>
  
      <PlaceEditHeader />
      <PlaceEditForm username={username}/>
      
    </div>
  );
};

export default PlaceEdit;