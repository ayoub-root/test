import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Evaluation from './evaluation';
import Exercice from './exercice';


const Tab = createBottomTabNavigator();
export default class Tabs extends React.Component{

render(){
return(
    

        <NavigationContainer><View><Text>ojljoioioijo</Text></View>
          <Tab.Navigator>
            <Tab.Screen name="Evaluation" component={Evaluation} />
            <Tab.Screen name="Exercice" component={Exercice} />
          </Tab.Navigator>
        </NavigationContainer>
      );



}


}