import { StatusBar } from 'expo-status-bar';/* ojo */
import React from 'react';
import { YellowBox } from "react-native";
import {firebaseApp} from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";

YellowBox.ignoreWarnings(["Setting a timer", "YellowBox"]);
export default function App() {
  
  return <Navigation/>

}
