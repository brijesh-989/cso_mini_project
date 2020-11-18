import React, { Component } from 'react'
import { View, Text,StyleSheet ,Dimensions,Image, ImageBackground,TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('window');

class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
        
        <View style={styles.button}>
        <StatusBar hidden />
        <View style={styles.button}>
          <View style={styles.head}><Text style={styles.header}>YOUR STREAM</Text></View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectStatem")}><View style={{width:140,height:140,borderRadius:20,bottom:27,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>ENGINEERING</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectStateb")}><View style={{width:140,height:140,borderRadius:20,bottom:17,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>MEDICAL</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Law")}><View style={{width:140,height:140,borderRadius:20,bottom:5,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>LAW</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Designing")}><View style={{width:140,height:140,borderRadius:20,top:8,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>DESIGNING</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Management")}><View style={{width:140,height:140,borderRadius:20,top:27,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:19,color:'black'}}>MANAGEMENT</Text></View></TouchableOpacity>
        </View>
         </View>
     </ImageBackground>
     
    )
  }
}

export default Home
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    width: width,
    height: height,
    position: 'absolute',
    overflow:'visible',
    resizeMode: "cover",
    alignSelf:'stretch',
  },
  button:
  {
    
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    alignSelf:'center',
    width: width,
    height: height,
  },
  header:
  {
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    
  },
  head:
  {
    bottom:40,
    backgroundColor:'grey',
    borderRadius:15,
    width:180,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  }
})