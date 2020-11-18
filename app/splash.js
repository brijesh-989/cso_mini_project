import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Splash extends Component {
  constructor(props)
  {
    super(props);
    setTimeout(() =>
    {
      this.props.navigation.navigate("Home");
    },1000);
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}><Image source={require("../assets/logo.png")} style={{height:140,width:140,borderRadius:20}}/></TouchableOpacity>
      </View>
    )
  }
}