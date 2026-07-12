import {
  View,
  Text,
  StyleSheet,
  Appearance,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
const App = () => {
  const theme = Appearance.getColorScheme();
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <FlatCards />
          <ElevatedCards/>
          <FancyCard/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});

export default App;
