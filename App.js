import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Splash from './App/Screen/Auth/Splash';
import Firstpg from './App/Screen/Auth/Firstpg';
import Login from './App/Screen/Auth/Login';
import Register from './App/Screen/Auth/Register';
import Home from './App/Screen/Home/Home';


const SplashStack = createStackNavigator(
  {
    Splash
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
)

const AuthStack = createStackNavigator(
  {
    Firstpg,
    Login,
    Register
  },
  {
    initialRouteName: "Firstpg",
    headerMode: "none"
  }
)

const HomeStack = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

const SwitchStack = createSwitchNavigator(
  {
    SplashStack,
    AuthStack,
    HomeStack
  },
  {
    initialRouteName: "SplashStack"
  }
)

const AppContainer = createAppContainer(SwitchStack)


export default AppContainer;