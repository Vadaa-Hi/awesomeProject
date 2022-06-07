// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';
import TestScreen from './src/Screens/TestScreen';
import NewScreen from './src/Screens/NewScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import PinScreen from './src/Screens/PinScreen';
import Home from './src/Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SendRequestScreen from './src/Screens/SendRequestScreen';
import CardsScreen from './src/Screens/CardsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeroScreen from './src/Screens/HeroScreen';
export default App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const theme = {
    ...DefaultTheme,
    dark: false,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      myOwnColor: '#BADA55',
      background: '#fff',
      accent: 'red',
      primary: 'green',
    },
  };

  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarIcon: ({focused}) => {
      let icon = '';
      const color = focused ? '#559dff' : '#828282';
      const size = 25;
      switch (route.name) {
        case 'Cards':
          icon = 'credit-card';
          break;
        case 'SendRequest':
          icon = 'send';
          break;
        // case 'Accont':
        //   icon = 'home';
        //   break;
        default:
          icon = 'dashboard';
      }
      return <MaterialIcons name={icon} size={size} color={color} />;
    },
  });
  // bottom tabiin ongo solij bolohgvi bsn
  const tabBarOptions = {
    showLabel: true,
    style: {
      paddingBottom: 30,
      backgroundColor: '#1e1e',
      borderTopColor: 'green',
    },
  };
  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Account" component={Home} />
        <Tab.Screen name="SendRequest" component={SendRequestScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home" // Home
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="New Background" component={NewScreen} />
          <Stack.Screen name="Pin" component={PinScreen} />
          <Stack.Screen name="Tabs" component={MyTabs} />
          <Stack.Screen name="Hero" component={HeroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
