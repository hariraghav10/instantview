import React from "react";
import { useEffect,useState } from "react";
import "../Styles/Dashboard.css";

//import { db } from "../firebase";
//import { onValue, ref } from "firebase/database";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

 const Home = () => {


  return (
    <div>
      <div className="EVSEStatus">
      <div className="EVSE not">
        <p>Connector EVSE001 : <span className="connstatus ">Not Connected</span> </p>
      </div>
      <div className="EVSE conn">
        <p>Connector EVSE002 : <span className="connstatus ">Connected</span> </p>
      </div>
      <div className="EVSE cha">
        <p>Connector EVSE003 : <span className="connstatus ">Not Connected</span> </p>
      </div>
      </div>

    <div className="count">
    <p className="title">EVSE Connectors Count</p>
      <div className="statusN">
        
        <div className="EVSEStatusNumber ">
          <p className="outof">1/3</p>
          <p className="stat">Connected</p>
        </div>

        <div className="EVSEStatusNumber ">
          <p className="outof">1/3</p>
          <p className="stat">Charging</p>
        </div>

        <div className="EVSEStatusNumber ">
          <p className="outof">1/3</p>
          <p className="stat">Not Connected</p>
        </div>
      </div>
      </div>

    <div className="bkcount">
      <p className="title">TODAY</p>
      <div className="flexb">
          <div className="bookingcount">
              <p>12 Bookings</p>
              
          </div>
          <div className="expect">
            <p>8 more expected</p>
          </div>
      </div>
    </div>

    <div className="bookstat">
      <div className="stateach bordr">
      <p className="statn">28</p>
      <p className="stattxt1">this</p>
      <p className="stattxt2">week</p>
      </div>
      <div className="stateach bordb">
      <p className="statn">75</p>
      <p className="stattxt1">this</p>
      <p className="stattxt2">month</p>
      </div>
      <div className="stateach bordl">
      <p className="statn">312</p>
      <p className="stattxt1">est. this</p>
      <p className="stattxt2">month</p>
      </div>
    </div>


    </div>
  );
};
export default Home