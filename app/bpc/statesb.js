import React, { Component } from 'react'
import { Image, SafeAreaView, Text, View ,Dimensions, TouchableOpacity,ScrollView, StyleSheet,FlatList} from 'react-native'
const {width,height}=Dimensions.get('window');
export default class SelectStateb extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header}><Text style={{fontSize:25,color:'brown',fontWeight:'bold'}}>SELECT STATE</Text></View>
        <View style={{flex:0.01}}></View>
       <View style={styles.middle}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View style={{alignItems:'center',paddingRight:5}}>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("AndhraPradeshm")}><Image source={require('../../assets/states/AndhraPradesh.png')} style={[styles.state,{marginTop:10}]}/></TouchableOpacity></View>
        
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("HimachalPradeshm")} ><Image source={require('../../assets/states/HimachalPradesh.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Keralam")}><Image source={require('../../assets/states/Kerala.png')} style={styles.state}/></TouchableOpacity></View>

        
        
        
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("MadhyaPradeshm")}><Image source={require('../../assets/states/MadhyaPradesh.png')} style={styles.state}/></TouchableOpacity></View>
        
        <View style={styles.shadow}><TouchableOpacity><Image source={require('../../assets/states/Rajasthan.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Telanganam")}><Image source={require('../../assets/states/Telangana.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity><Image source={require('../../assets/states/Uttrakhand.png')} style={styles.state}/></TouchableOpacity></View>
        </View>
        <View style={{alignItems:'center',paddingLeft:5}}>
        
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Delhim")}><Image source={require('../../assets/states/Delhi.png')} style={[styles.state,{marginTop:10}]}/></TouchableOpacity></View>
      
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Haryanam")}><Image source={require('../../assets/states/Haryana.png')} style={styles.state}/></TouchableOpacity></View>
        
        
        
        
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Karnatakam")}><Image source={require('../../assets/states/Karnataka.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Maharashtram")}><Image source={require('../../assets/states/Maharashtra.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("Punjabm")}><Image source={require('../../assets/states/Punjab.png')} style={styles.state}/></TouchableOpacity></View>
        
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("UttarPradeshm")}><Image source={require('../../assets/states/UttarPradesh.png')} style={styles.state}/></TouchableOpacity></View>
        <View style={styles.shadow}><TouchableOpacity onPress={() => this.props.navigation.navigate("TamilNadum")}><Image source={require('../../assets/states/Tamilnadu.png')} style={styles.state}/></TouchableOpacity></View>
        
        
        </View>
        </View>
      </ScrollView>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:'white'
  },
  header:
  {
    flex:0.08,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    marginTop:35,
    marginLeft:12,
    marginRight:12
  },
  middle:
  {
    flex:0.91,
    
  },
  state:
  {
    height:190,
    width:190,
    borderRadius:20,
    marginBottom:10,
    
  },
  shadow:
  {
    shadowOffset:{width:5,height:5},
    shadowColor:'black',
    shadowOpacity:0.5,
  }
})