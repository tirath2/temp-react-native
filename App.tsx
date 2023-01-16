import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import store from './src/Redux/Store';
import RootNavigator from './src/Router/RootNavigator';
import {Provider} from 'react-redux';
import {ErrorBoundary} from './src/Utils/ErrorBoundary';
import codePush from 'react-native-code-push';
const App: React.FC = () => {
  const ErrorMsg = useCallback(() => {
    //TODO: create error component
    return <View />;
  }, []);

  const onError = useCallback(() => {
    //TODO: log Error
  }, []);

  return (
    <SafeAreaView style={styles.flex1}>
      <ErrorBoundary fallbackRender={ErrorMsg} onError={onError}>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default __DEV__ ? App : codePush(App);
