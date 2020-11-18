// import * as React from 'react';
// import {
//   StatusBar,
//   Image,
//   FlatList,
//   Dimensions,
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
// } from 'react-native';
// import {
//   State,
//   FlingGestureHandler,
//   Directions,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
// const { width } = Dimensions.get('screen');
// import { EvilIcons } from '@expo/vector-icons';

// const DATA = [
//   {
//     title: 'IIT MANDI',
//     location: 'Kamand,Himachal Pradesh',
//     date: 'NIRF RANK’20: 31',
//     poster:
//       {uri:'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg'},
//     img:require('./iitmandi.jpg')
//   },
//   {
//     title: 'NIT-H',
//     location: 'Hamirpur,Himachal Pradesh',
//     date: 'NIRF RANK’20: 98',
//     poster:
//       {uri:'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg'},
//       img:require('./nith.jpg')
//   },
//   {
//     title: 'SHOOLINI UNIVERSITY',
//     location: 'Bajhol,Himachal Pradesh',
//     date: 'NIRF RANK’20: 112',
//     poster:
//       {uri:'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg'},
//       img:require('./shoolini.jpg')
//   },
//   {
//     title: 'JUIT',
//     location: 'Waknaghat,Himachal Pradesh',
//     date: 'NIRF RANK’20: 115',
//     poster:
//       {uri:'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg'},
//       img:require('./juit.jpg')
//   },
//   {
//     title: 'BELLS',
//     location: 'Shimla,Himachal Pradesh',
//     date: 'NIRF RANK’20: --',
//     poster:
//       {uri:'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg'},
//       img:require('./bells.jpg')
//   },
// ];

// const OVERFLOW_HEIGHT = 70;
// const SPACING = 10;
// const VISIBLE_ITEMS = 3;
// const ITEM_WIDTH = width * 0.8;
// const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

// const OverflowItems = ({ scrollX, data }) => {
//   const translateY = scrollX.interpolate({
//     inputRange: [-1, 0, 1],
//     outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
//   });
//   return (
//     <View style={{ height: OVERFLOW_HEIGHT, overflow: 'hidden' }}>
//       <Animated.View style={{ transform: [{ translateY }] }}>
//         {data.map((item, index) => {
//           return (
//             <Animated.View key={index} style={styles.itemContainer}>
//               <Text style={[styles.title]} numberOfLines={1}>
//                 {item.title}
//               </Text>
//               <View style={styles.itemContainerRow}>
//                 <Text style={[styles.location]}>
//                   <EvilIcons
//                     name='location'
//                     size={16}
//                     color='black'
//                     style={{ marginRight: 5 }}
//                   />
//                   {item.location}
//                 </Text>
//                 <Text style={[styles.date]}>{item.date}</Text>
//               </View>
//             </Animated.View>
//           );
//         })}
//       </Animated.View>
//     </View>
//   );
// };

// export default function HimachalPradesh() {
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
//   const [index, setIndex] = React.useState(0);
//   const [data, setData] = React.useState(DATA);

//   const setAnimatedIndex = React.useCallback((i) => {
//     setIndex(i);
//     scrollX.setValue(i);
//   }, []);


//   React.useEffect(() => {
//     Animated.spring(scrollXAnimated, {
//       toValue: scrollX,
//       useNativeDriver: true,
//     }).start();
//   });


//   return (
//     <FlingGestureHandler
//       direction={Directions.LEFT}
//       onHandlerStateChange={(e) => {
//         if (e.nativeEvent.state === State.END) {
//           if (index === data.length - 1) {
//             return;
//           }
//           setAnimatedIndex(index + 1);
//         }
//       }}
//     >
//       <FlingGestureHandler
//         direction={Directions.RIGHT}
//         onHandlerStateChange={(e) => {
//           if (e.nativeEvent.state === State.END) {
//             if (index === 0) {
//               return;
//             }
//             setAnimatedIndex(index - 1);
//           }
//         }}
//       >
//         <SafeAreaView style={styles.container}>
//           <StatusBar hidden />
//           <OverflowItems scrollX={scrollXAnimated} data={data} />
//           <FlatList
//             data={data}
//             keyExtractor={(_, index) => String(index)}
//             scrollEnabled={false}
//             inverted
//             renderToHardwareTextureAndroid
//             removeClippedSubviews={false}
//             contentContainerStyle={{
//               flex: 1,
//               justifyContent: 'center',
//               padding: SPACING * 2,
//             }}
//             CellRendererComponent={({ children, index, style, ...props }) => {
//               const cellStyle = [
//                 style,

//                 { zIndex: data.length - index },
//               ];

//               return (
//                 <View style={cellStyle} index={index} {...props}>
//                   {children}
//                 </View>
//               );
//             }}
//             renderItem={({ item, index }) => {
//               const inputRange = [index - 1, index, index + 1];
//               const translateX = scrollXAnimated.interpolate({
//                 inputRange,
//                 outputRange: [50, 0, -100],
//               });
//               const opacity = scrollXAnimated.interpolate({
//                 inputRange,
//                 outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
//               });
//               const scale = scrollXAnimated.interpolate({
//                 inputRange,
//                 outputRange: [0.8, 1, 1.3],
//               });
//               return (
//                 <Animated.View
//                   style={{
//                     position: 'absolute',
//                     width: ITEM_WIDTH,
//                     top: -ITEM_HEIGHT / 2,
//                     borderRadius: 10,
//                     overflow: 'hidden',
//                     transform: [{ translateX }, { scale }],
//                     opacity,
//                   }}
//                 >
//                   <TouchableOpacity activeOpacity={0.9} onPress={() => console.log("hello")}><ImageBackground source={ item.poster }
//                     style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT ,alignItems:'center',justifyContent:'center'}}><View><Image source={item.img} style={{width:300,height:400,borderRadius:10}}/></View></ImageBackground></TouchableOpacity>
//                 </Animated.View>
//               );
//             }}
//           />
//         </SafeAreaView>
//       </FlingGestureHandler>
      
//     </FlingGestureHandler>
//   );
// }
// //export default Apps

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '900',
//     textTransform: 'uppercase',
//     letterSpacing: -1,
//     alignSelf:'center'
//   },
//   location: {
//     fontSize: 16,
//   },
//   date: {
//     fontSize: 16,
//     fontWeight:'bold'
//   },
//   itemContainer: {
//     height: OVERFLOW_HEIGHT,
//     padding: SPACING,
//   },
//   itemContainerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// });
