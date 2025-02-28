import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Todo = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itembox}>
            <TouchableOpacity style={styles.square} ></TouchableOpacity>
            <Text style={styles.itemtext}>{props.text}</Text>

        </View>
        <View style={styles.circular}></View>
        
      
    </View>
  )
}

export default Todo;


const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20

    },
    itembox:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'

    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    itemtext:{
        maxWidth:'80%'
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,

    }
     
  });
