import React, {JSX, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Profile from './pages/Profile';
import {COLORS} from './utils/color';
import Mail from './pages/Mail';
import Search from './pages/Search';
import Home from './pages/Home';
import {
  HeaderGoBackIcon,
  HeaderIconNotification,
  HeaderIconSettings,
  HomeIconTab,
  MailIconTab,
  ProfileTabIcon,
  SearchIconTab,
} from './components/Svgs';
import TabHeader from './components/TabHeader';
import {Platform} from 'react-native';
import {GlobalContext} from './components/context/GlobalContext';
import NFTImageDetail from './pages/NFTImageDetail';
import Notification from './pages/Notification';
import Settings from './pages/Settings';

const Navigation = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted',
        }}>
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />

        <Stack.Screen
          name="NFTImageDetail"
          component={NFTImageDetail}
          options={{
            headerTitle: () => (
              <TabHeader
                title={'Nft'}
                iconLeft={<HeaderGoBackIcon />}
                goBack={true}
              />
            ),
            headerLeft: () => null,
            headerStyle: {
              height: Platform.OS === 'ios' ? 117 : 55,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.mainBlack,
              backgroundColor: COLORS.mainBlack,
            },
            headerTitleStyle: {
              height: 117,
              backgroundColor: COLORS.mainBlack,
            },
            headerTransparent: false,
          }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerTitle: () => (
              <TabHeader
                title={'Notifications'}
                iconLeft={<HeaderGoBackIcon />}
                goBack={true}
                iconRight={<HeaderIconSettings />}
                onPressRight={'Settings'}
              />
            ),
            headerLeft: () => null,
            headerStyle: {
              height: Platform.OS === 'ios' ? 117 : 55,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.mainBlack,
              backgroundColor: COLORS.mainBlack,
            },
            headerTitleStyle: {
              height: 117,
              backgroundColor: COLORS.mainBlack,
            },
            headerTransparent: false,
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: () => (
              <TabHeader
                title={'Settings'}
                iconLeft={<HeaderGoBackIcon />}
                goBack={true}
              />
            ),
            headerLeft: () => null,
            headerStyle: {
              height: Platform.OS === 'ios' ? 117 : 55,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.mainBlack,
              backgroundColor: COLORS.mainBlack,
            },
            headerTitleStyle: {
              height: 117,
              backgroundColor: COLORS.mainBlack,
            },
            headerTransparent: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabScreen = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const {showTopNav} = useContext(GlobalContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 73,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderWidth: 1,
          borderColor: COLORS.white,
          backgroundColor: COLORS.white,
          paddingBottom: 16,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          borderTopColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          lineHeight: 18,
          fontWeight: '500',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIconTab
              fill={focused ? COLORS.mainBlue : COLORS.tabInactiveIconColor}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIconTab
              fill={focused ? COLORS.mainBlue : COLORS.tabInactiveIconColor}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={'Mail'}
        component={Mail}
        options={{
          tabBarIcon: ({focused}) => (
            <MailIconTab
              fill={focused ? COLORS.mainBlue : COLORS.tabInactiveIconColor}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileTabIcon
              fill={focused ? COLORS.mainBlue : COLORS.tabInactiveIconColor}
            />
          ),
          tabBarShowLabel: false,
          headerTitle: () => (
            <TabHeader
              title={'Name Profile'}
              iconLeft={<HeaderIconSettings />}
              iconRight={<HeaderIconNotification />}
              onPressRight={'Notification'}
              onPressLeft={'Settings'}
            />
          ),
          headerLeft: () => null,
          headerStyle: {
            height: Platform.OS === 'ios' ? 117 : 55,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.mainBlack,
            backgroundColor: COLORS.mainBlack,
          },
          headerTitleStyle: {
            height: 117,
            backgroundColor: COLORS.mainBlack,
          },
          headerTransparent: showTopNav,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
