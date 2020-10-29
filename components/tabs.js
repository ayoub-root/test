import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Eval from './eval';
import Exercice from './exercice';
import Ionicons from 'react-native-vector-icons/Ionicons';
 function MyTabBar ({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{textAlign:'center',borderStyle:'solid',borderWidth:1,height:50,paddingVertical:10 ,fontSize:15,
               alignContent:'center',color: isFocused ? 'red' : '#ff22ff' }}>
               {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
const Tab = createBottomTabNavigator();
const Tabs =()=>{
 
 
  
  

return(
    

        <NavigationContainer><View><Text></Text></View>
         <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
      
      >
            <Tab.Screen  name="Evaluation" component={Eval} />
            <Tab.Screen name="Exercice" component={Exercice} />
          </Tab.Navigator>
        </NavigationContainer>
      );






     
} 
export default Tabs;