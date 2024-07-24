import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

class Categories extends React.Component{
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
                    Canais Ao Vivo
                </Text>
            </View>
            <View style={styles.channel}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/gaules.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.channelName}>gaules</Text>
                <Text style={styles.textChannel}>!prime red canids</Text>
                <Text style={styles.textChannel}>Counter Strike GO</Text>
              </View>
            </View>
            <View style={styles.title}> 
                <Text style={styles.texto}>
                    Canais Recomendados
                </Text>
            </View>
            <View style={styles.channel}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/coelho.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.channelName}>Coelho</Text>
                <Text style={styles.textChannel}>será que hoje vai?</Text>
                <Text style={styles.textChannel}>Just Chatting</Text>
              </View>
            </View>
            <View style={styles.channel}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/tecnosh.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.channelName}>Tecnosh</Text>
                <Text style={styles.textChannel}>Jogando GLL Wingman</Text>
                <Text style={styles.textChannel}>PUBG</Text>
              </View>
            </View>
            <View style={styles.channel}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/zigueira.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.channelName}>ziGueira</Text>
                <Text style={styles.textChannel}>!amazonprime</Text>
                <Text style={styles.textChannel}>Rainbow Six: Siege</Text>
              </View>
            </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebed',
    height: 620
  },
  title: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#ebebed',
    textAlign: "left",
  },
  texto: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
  },
  textChannel: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    marginTop: 10
  },
  channelName: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    fontWeight: "bold"
  },
  imageContainer: {
    width: 150, 
    height: 90,
    marginLeft: 20,
    marginTop: 15,
  },
  image: {
    width: 150, 
    height: 90,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  textContainer: {
    height: 90,
    marginTop: 20,
    marginLeft: 5,
    width: 300
  },
    channel: {
      flex: 2, 
      backgroundColor: "white",
      borderBottomColor: "black",
      elevation: 1,
      marginBottom: 1,
      flexDirection: 'row',
  },
});

export default Categories