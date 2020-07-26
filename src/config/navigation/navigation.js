import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SplashScreen,
  HomeScreen,
  ProfileScreen,
  CountriesScreen,
} from '../../screens';

import Menu from '../../components/myDrawer/drawer';
import {HeaderLeft} from '../../components';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function GoBack(props) {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
}

// HomeScreen

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: null,
          headerLeft: ({}) => <HeaderLeft />,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stats" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function CountriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Countries"
        options={{
          headerTitle: null,
          headerLeft: ({}) => <GoBack name="Global" />,
        }}
        component={CountriesScreen}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Stats" component={ProfileStack} />
      <Drawer.Screen name="Countries" component={CountriesStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
