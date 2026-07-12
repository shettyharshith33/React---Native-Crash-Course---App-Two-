import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 1</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 2</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 3</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 4</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 5</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap 6</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 5,
  },
  container: {
    padding: 8,
  },
  elevatedCard: { backgroundColor: '#6c6c6c',
    elevation : 10,
    shadowOffset : {
      width : 1,
      height : 1
    },
    shadowColor : "white",
    shadowOpacity : 1,
    shadowRadius : 1
  },
});
