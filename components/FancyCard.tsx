import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingtext}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://s7ap1.scene7.com/is/image/incredibleindia/lalbagh-bengaluru-karnataka-hero?qlt=82&ts=1742182913351',
          }}
          style={styles.cardImage}
        />
        <View style={[styles.cardBody]}>
          <Text style={[styles.cardTitle]}>Hasiru Hole</Text>
          <Text style={[styles.cardLabel]}>Green Point</Text>
          <Text style={[styles.cardDescription]}>
            Best place in Bengaluru. Just 12 KMs away from city.
          </Text>
          <Text style={styles.cardFooter}>45 mins from Nagavara</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: '100',
    paddingHorizontal: 8,
    color: 'white',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius : 5,
    margin : 12
  },
  elevatedCard: {},
  cardImage: {
    height: 200,
    borderRadius: 5,
    elevation : 5,
    shadowColor : "lightgreen"
  },
  cardDescription: {
  },
  cardTitle: {},
  cardLabel: {},
  cardBody: {},
  cardFooter: {
    color: '#b1b1b1',
  },
});
