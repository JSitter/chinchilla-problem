import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';

function Item(props){
  return (
    <View>
     <Image style={styles.text} source={{uri: props.item}}/>
     <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

export default class App extends React.Component {
  render() {
    const list = ["cat", "dog", "chinchilla", "koala", "sloth", "narwhal"]

    const formattedList = list.map((item, index) => {
      const src = `https://source.unsplash.com/200x200/?${item}`
      return <Item key={index} item={src} name={item}/>
    })
    return (
    <View style={styles.view}>
      <View>
        <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
          {formattedList}
        </ScrollView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    height:200,
    backgroundColor:'#faf5',
  },
  text:{
    height: 150,
    width: 150,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 10
  },
  view:{
    backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  name:{
    textAlign: "center"
  }
})