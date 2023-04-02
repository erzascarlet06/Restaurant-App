import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
//import DishDetailsScreen from "../screens/DishDetailsScreen";
import { Image, View } from "react-native";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const logo = require('../data/logo.png'); 

const CustomHeader = () => {
  return (
    <View style={{  height: '100%', width: '80%',backgroundColor: '#e33c1d', padding: 10 }}>
      <Image
        source={logo}
        style={{ width: 100, height: 40 }}
        resizeMode="contain"
      />
    </View>
  );
};
const RootNavigator = () => {
  return (
    //<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Navigator
    screenOptions={{
      headerTitle: () => <CustomHeader />,
      headerTitleAlign: 'center',
    }}
    > 
      <Stack.Screen name="Home Screen" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Details"
        component={RestaurantDetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Menu List" component={HomeScreen} />
      <HomeStack.Screen name="Menu" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  );
};
export default RootNavigator;
