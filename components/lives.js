import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

class Thumb extends React.Component{
    state = {
        fontLoaded: false
    };

    async componentWillMount() {
        await Font.loadAsync({
          'Helvetica-Neue': require('../assets/fonts/helvetica-neue.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        return (
          <View style={styles.container}>
            <View style={styles.scroll}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/live_1.jpg')}
                    />             
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.textLive}> mch_AGG{" "} 
                      <Text style={styles.textTransmission}>transmitindo</Text> 
                      {" "}Counter-Strike: GO 
                    </Text>  
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/live_2.jpg')}
                    />  
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.textLive}> PVPLAB transmitindo{" "} 
                      <Text style={styles.textTransmission}>transmitindo</Text> 
                      {" "}WOW</Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/live_3.jpg')}
                    />  
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.textLive}> Maveco transmitindo{" "} 
                      <Text style={styles.textTransmission}>transmitindo</Text> 
                      {" "} Dead by </Text> 
                  </View>                  
                </View>
              </ScrollView> 
            </View>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#ebebed',
    height: 250
  },
  scroll: {
    backgroundColor: '#ebebed',
    flex: 8,    
  },
  textLive: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    fontWeight: 'bold',
  },
  textTransmission: {
    fontFamily: "Helvetica-Neue",
    color: '#6441a4',
    fontWeight: 'normal'
  },
  imageContainer: {
    flex: 4, backgroundColor: "#ebebed",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  image: {
    width: 380, 
    height: 210
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ebebed',
    fontSize: 20,
    width: 320
  },
    rodape: {
      flex: 1, 
      backgroundColor: "#ebebed",
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: "center",
      alignItems: "center",
  },
});

export default Thumb