import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {
  State,
  FlingGestureHandler,
  Directions,
  TouchableOpacity,
} from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');
import { EvilIcons } from '@expo/vector-icons';

const DATA = [
  {
    title: 'IIT HYDERABAD',
    location: 'Sangareddy,Telangana',
    date: 'NIRF RANK’20: 8',
    poster:
      require('../dv/iithyd.png')
  },
  {
    title: 'IITH',
    location: 'Sangareddy,Telangana',
    date: 'NIRF RANK’20: 78',
    poster:
      require('../dv/iiithyd.png')
  },
  {
    title: 'NITW',
    location: 'Warangal,Telangana',
    date: 'NIRF RANK’20: 26',
    poster:
      require('../dv/nitw.png')
  },
  {
    title: 'JNTUH',
    location: 'Hyderabad,Telangana',
    date: 'NIRF RANK’20: 57',
    poster:
      require('../dv/jntuh.png')
  },
  {
    title: 'CBIT',
    location: 'Hyderabad,Telangana',
    date: 'NIRF RANK’20: 124',
    poster:
      require('../dv/cbit.png')
  },
];

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const VISIBLE_ITEMS = 3;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

const OverflowItems = ({ scrollX, data }) => {
  const translateY = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={{ height: OVERFLOW_HEIGHT+2, overflow: 'hidden' ,backgroundColor:'orange',borderRadius:10}}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <Animated.View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>
                  <EvilIcons
                    name='location'
                    size={16}
                    color='black'
                    style={{ marginRight: 5 }}
                  />
                  {item.location}
                </Text>
                <Text style={[styles.date]}>{item.date}</Text>
              </View>
            </Animated.View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function Telangana() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState(DATA);

  const setAnimatedIndex = React.useCallback((i) => {
    setIndex(i);
    scrollX.setValue(i);
  }, []);


  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollX,
      useNativeDriver: true,
    }).start();
  });


  return (
    <FlingGestureHandler
      direction={Directions.LEFT}
      onHandlerStateChange={(e) => {
        if (e.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setAnimatedIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setAnimatedIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <OverflowItems scrollX={scrollXAnimated} data={data} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            scrollEnabled={false}
            inverted
            renderToHardwareTextureAndroid
            removeClippedSubviews={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
            }}
            CellRendererComponent={({ children, index, style, ...props }) => {
              const cellStyle = [
                style,

                { zIndex: data.length - index },
              ];

              return (
                <View style={cellStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    width: ITEM_WIDTH,
                    top: -ITEM_HEIGHT / 2,
                    borderRadius: 10,
                    overflow: 'hidden',
                    transform: [{ translateX }, { scale }],
                    opacity,
                  }}
                >
                  <TouchableOpacity activeOpacity={0.9} onPress={() => console.log("hello")}><Image source={ item.poster }
                    style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT ,alignItems:'center',justifyContent:'center',borderWidth:8,borderColor:'cyan'}}/></TouchableOpacity>
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
      
    </FlingGestureHandler>
  );
}
//export default Apps

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
    alignSelf:'center'
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontWeight:'bold'
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
