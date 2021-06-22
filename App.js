import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottemTabNavigator } from 'react-navigation-tabs'
import WriteStoryScreen from './SCreens/WriteStoryScreen'
import ReadStorySCreen from './SCreens/ReadStoryScreen'

export default function App() {
  return (
   
    <View style={styles.container}>
       <AppContainer />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadStoryScreen},
  Write: {screen: WriteStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
)
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
