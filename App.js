import React from 'react';
import { StyleSheet, Text, View, Alert, Button, ImageBackground, StatusBar} from 'react-native';
import LoadingScreen from './comps/loading'
import Start from './comps/Start'
import Home from './comps/Home'
import Details from './comps/Details'
import NewsApp from './comps/NewsApp'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const stack = () => {
  return(
    <Stack.Navigator
      screenOptions = {{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >      
      <Stack.Screen name = "Select a Location" component={Home}/>
      <Stack.Screen name = "Data" component={Details}/>
    </Stack.Navigator>
  )
}


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading : true,      
    }
  }

  componentDidMount() {        
    setTimeout(() => {
      this.setState({loading: false})      
    }, 4000);        
  }

  render() {
    if(this.state.loading) {
      return <LoadingScreen/>
    }
    else {
      return (        
        <NavigationContainer>      
          <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;          
                      if (route.name === 'HOME') {
                        iconName = focused ? 'home' : 'home-outline';
                      } else if (route.name === 'DATA') {
                        iconName = focused ? 'information' : 'information-outline';
                      }
                      else {
                        iconName = focused ? 'file-document-box' : 'file-document-box-outline';
                      }                                
                      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#008B8B',
                    inactiveTintColor: '#C0C0C0',  
                    style: {backgroundColor: 'white'},

                  }}
                  lazy={true}
            >
            <Tab.Screen name = "HOME" component = {Start}/>
            <Tab.Screen name = "DATA" component = {stack}/>
            <Tab.Screen name = "NEWS" component = {NewsApp}/>
          </Tab.Navigator>              
        </NavigationContainer>                    
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
});
