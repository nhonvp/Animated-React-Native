import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Onboarding from './src/Onboarding';

const App = () => {
  return (
    // <SafeAreaView >
      <View style={styles.container}>
        <Onboarding/>
      </View>
    // {/* </SafeAreaView> */}
  );
};

const styles = StyleSheet.create({
  container :{
    flex : 1,

  }
});

export default App;
