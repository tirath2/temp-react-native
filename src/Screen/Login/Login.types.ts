import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router/Router.types';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
