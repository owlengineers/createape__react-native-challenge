import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routeName from "../lib/routes-name";

import Welcome from "../views/welcome";
import LoginSignup from "../views/login-signup";
import Login from "../views/login";
import Home from "../views/home";
import Register from "../views/register";
import Income from "../views/income";
import Adventures from "../views/adventures";
import Library from "../views/library";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}>
      <Tab.Screen name={routeName.home} component={Home} />
      <Tab.Screen name={routeName.income} component={Income} />
      <Tab.Screen name={routeName.adventures} component={Adventures} />
      <Tab.Screen name={routeName.library} component={Library} />
    </Tab.Navigator>
  );
};

export const LoggedRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const NotLogged = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeName.welcome} component={Welcome} />
        <Stack.Screen name={routeName.login_signup} component={LoginSignup} />
        <Stack.Screen name={routeName.login} component={Login} />
        <Stack.Screen name={routeName.register} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
