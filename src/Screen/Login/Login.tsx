import {useTheme} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import getLocalStyles from './Login.styles';
import {LoginScreenProps} from './Login.types';
import {iColor} from '../../Theme/Colors';
import {useTranslation} from 'react-i18next';
import Button from '../../Component/Button/Button';
import TextInput from '../../Component/TextInput/TextInput';
import {mandatoryValidation, mobileValidation} from '../../Utils/Validate';
import spacing from '../../Theme/Spacing';
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  const [mobile, setMobile] = useState<string>('');
  const [mobileErrMsg, setMobileErrMsg] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErrMsg, setPasswordErrMsg] = useState<string>('');

  const {colors}: {colors: iColor} = useTheme();
  const {rootContainer, headerText} = getLocalStyles(colors);
  const {t} = useTranslation();
  // const {isLoading} = loginApi.useGetPokemonByNameQuery('bulbasaur');
  // console.log('LOGIN', {isLoading});
  const navigateToHome = useCallback(() => {
    let mobileError = mobileValidation(mobile);
    let passwordError = mandatoryValidation(password);
    setMobileErrMsg(mobileError);
    setPasswordErrMsg(passwordError);
    if (mobileError || passwordError) {
      return;
    }
    navigation.navigate('Home');
  }, [mobile, navigation, password]);
  return (
    <View style={rootContainer}>
      <TextInput
        testID="loginMobileInput"
        variant="outlined"
        label={'Mobile Number'}
        placeholder="Enter mobile no"
        value={mobile}
        onChangeText={setMobile}
        errorMsg={mobileErrMsg}
        keyboardType="numeric"
        containerStyle={{marginBottom: spacing(2)}}
      />
      <TextInput
        testID="loginPasswordInput"
        variant="outlined"
        label={'Password'}
        placeholder="Enter Password"
        value={password}
        errorMsg={passwordErrMsg}
        onChangeText={setPassword}
        containerStyle={{marginBottom: spacing(2)}}
      />
      <Button
        size="full"
        testID="loginButton"
        title={'Login'}
        onPress={navigateToHome}
      />
    </View>
  );
};

export default Login;
