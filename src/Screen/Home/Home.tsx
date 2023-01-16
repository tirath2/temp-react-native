import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../Router/Router.types';
import {iColor} from '../../Theme/Colors';
import getLocalStyles from './Home.styles';
import {loginApi} from '../Login/Login.reducer';
import {useTranslation} from 'react-i18next';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
const Home: React.FC<HomeScreenProps> = () => {
  const {colors}: {colors: iColor} = useTheme();
  const {rootContainer, headerText} = getLocalStyles(colors);
  const {isLoading, refetch} = loginApi.useGetPokemonByNameQuery('bulbasaur');
  console.log('HOME', {isLoading});
  // const switchTheme = useCallback(() => {
  //   setTheme(theme === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT);
  // }, [theme, setTheme]);
  const {t} = useTranslation();
  return (
    <View style={rootContainer}>
      <Text style={headerText}>{t('HOME')}</Text>
      <Button title={t('SWITCH_THEME')} onPress={() => refetch()} />
    </View>
  );
};

export default Home;
