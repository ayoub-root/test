
import {Text, View} from "react-native";
import  Evaluation from './evaluation';
import React, { Component } from 'react'
//import ListExercices from './listexercices';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListExercices from "./listexercices";
import HomeScreen from '../pages/HomeScreen';
import RegisterExercice from '../pages/RegisterExercice';
import UpdateExercice from '../pages/UpdateExercice';
import ViewExercice from '../pages/ViewExercice';
import ViewAllExercice from '../pages/ViewAllExercice';
import DeleteExercice from '../pages/DeleteExercice';
import Showvideo from "../pages/showvideo";
import Showvideotiming from "../pages/showvideotiming";
//import ListExercices from "./listexercices";
const Stack = createStackNavigator();
 const Exercice = () => {


return(
   
  
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Home', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="View"
      component={ViewExercice}
      options={{
        title: 'View Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="ViewAll"
      component={ViewAllExercice}
      options={{
        title: 'View Exercices', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="Update"
      component={UpdateExercice}
      options={{
        title: 'Update Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterExercice}
      options={{
        title: 'Register Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="Delete"
      component={DeleteExercice}
      options={{
        title: 'Delete Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />

<Stack.Screen
      name="Showvideo"
      component={Showvideo}
      options={{
        name:'',
        title: 'Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <Stack.Screen
      name="Showvideotiming"
      component={Showvideotiming}
      options={{
        name:'',
        title: 'detail Exercice', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
  </Stack.Navigator>

     

);

}


export default Exercice;