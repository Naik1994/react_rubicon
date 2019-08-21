import React from 'react';
import MainCard from './MainCard';

const Cards = ({ closeMenu }) => {
  return(
    <div className = "boxes ml4 mr4">
      <MainCard message = "NEW ORDERS" closeMenu = {closeMenu}/>
      <MainCard message = "TOTAL ORDERS" closeMenu = {closeMenu}/>
      <MainCard message = "999 ORDERS" closeMenu = {closeMenu}/>
      <MainCard message = "RETURNS" closeMenu = {closeMenu}/>
      <MainCard message = "SALES" closeMenu = {closeMenu}/>
      <MainCard message = "SALES VS RETURNS" closeMenu = {closeMenu}/>
    </div>
  );
}

export default Cards;
