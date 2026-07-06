import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function flatCards() {
  return (
    <View>
      <Text style = {[{color :"white"},styles.headingtext]}>Flat Cards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
            <Text style = {styles.text}>Red</ Text>
        </View><View style = {[styles.card,styles.cardTwo]}>
            <Text style = {styles.text}>Yellow</ Text>
        </View><View style = {[styles.card,styles.cardThree]}>
            <Text style = {styles.text}>Green</ Text>
        </View><View style = {[styles.card,styles.cardFour]}>
            <Text style = {styles.text}>Blue</ Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext : {
        fontSize : 20,
        fontWeight : "bold",
        paddingHorizontal : 8
    },
    text:{
        color : "white"
    },
    container:{
        flex : 1,
        flexDirection : "row"
    },
    card:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        height : 100,
        width : 100,
        borderRadius : 8,
        margin : 8
    },
    cardOne:{
        backgroundColor : "#ff6b6b"
    },
    cardTwo:{
        backgroundColor : "#deee52"
    },
    cardThree:{
        backgroundColor : "#4fc73c"
    },
    cardFour:{
        backgroundColor : "#42dfdd"
    }
})