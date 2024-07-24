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
            <View style={styles.title}> 
              <Text style={styles.texto}>
                Porque você segue{" "} 
                  <Text style={styles.textoGame}>
                    Grand Theft Auto V
                    </Text>
                  </Text>
            </View>
            <View style={styles.scroll}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/thumb_1.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                  <View style={styles.channelContainer}>
                      <Image
                        style={styles.channelImage}
                        source={require('../assets/images/sauq.png')}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textHost}>LLsauqSTV</Text>
                      <Text style={styles.textThumb}>Salvatore Pós-Wipe</Text>
                      <Text style={styles.textThumb}>Grand Theft Auto V</Text>
                    </View>  
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/thumb_2.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                  <View style={styles.channelContainer}>
                      <Image
                        style={styles.channelImage}
                        source={require('../assets/images/fairlight.jpeg')}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textHost}>Fairlight_Excalibur</Text>
                      <Text style={styles.textThumb}>Rick | Rookie Cop | NoPixel</Text>
                      <Text style={styles.textThumb}>Grand Theft Auto V</Text>
                    </View>  
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/thumb_3.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <View style={styles.channelContainer}>
                      <Image
                        style={styles.channelImage}
                        source={require('../assets/images/mec.png')}
                      />
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.textHost}>MecRP</Text>
                      <Text style={styles.textThumb}>[DISNEYLANDIA][+18]</Text>
                      <Text style={styles.textThumb}>Grand Theft Auto V</Text>
                    </View>
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
    backgroundColor: '#f2f1ed',
    height: 320
  },
  scroll: {
    backgroundColor: '#f2f1ed',
    flex: 8,    
  },
  title: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: '#f2f1ed',
    textAlign: "left",
  },
  texto: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
  },
  textoGame: {
    fontFamily: "Helvetica-Neue",
    color: '#6441a4',
  },
  imageContainer: {
    flex: 4, backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  channelContainer: {
    width: 60, 
    height: 90,
    marginLeft: 10,
    marginTop: 15,
  },
  channelImage: {
    width: 60, 
    height: 60,
    borderRadius: 60 / 2,
  },
  textThumb: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    marginBottom: 5,
    marginLeft: 10,
  },
  textHost: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  image: {
    width:320, 
    height: 185
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f2f1ed',
    fontSize: 20,
    width: 320
  },
    rodape: {
      flex: 2, 
      backgroundColor: "white",
      borderBottomColor: "black",
      elevation: 2,
      marginBottom: 15,
      borderBottomEndRadius: 5,
      borderBottomLeftRadius: 5,
      flexDirection: 'row',
  },
});

export default Thumb