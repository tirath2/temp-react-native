import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Home from '../Screen/Home/Home';
import Login from '../Screen/Login/Login';
import {RootStackParamList} from './Router.types';
import {darkThemeColor, lightThemeColor} from '../Theme/Colors';
import {THEME_TYPE} from '../Utils/Constants';
interface iThemeContext {
  theme: String;
  setTheme: Function;
}
const RootStack = createNativeStackNavigator<RootStackParamList>();
let defaultThemeValue: iThemeContext = {
  theme: THEME_TYPE.LIGHT,
  setTheme: () => {},
};
export const ThemeContext = React.createContext(defaultThemeValue);
const RootNavigator: React.FC<any> = () => {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT);
  const themeData = {theme, setTheme};

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer
        theme={theme === THEME_TYPE.LIGHT ? lightThemeColor : darkThemeColor}>
        <RootStack.Navigator>
          <RootStack.Screen name={'Login'} component={Login} />
          <RootStack.Screen name={'Home'} component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default RootNavigator;
