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
                    Todas as categorias
                </Text>
            </View>
            <View style={styles.category}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/Fort.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textCategory}>Fortnite</Text>
                <Text style={styles.textCategory}>96,9 mil espectadores</Text>
                <Text style={styles.textCategory}>Jogo de tiro</Text>
              </View>
            </View>
            <View style={styles.category}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/Lol.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textCategory}>League of legends</Text>
                <Text style={styles.textCategory}>94,2 mil espectadores</Text>
                <Text style={styles.textCategory}>MOBA</Text>
              </View>
            </View>
            <View style={styles.category}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/GTA.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textCategory}>Grand Theft Auto V</Text>
                <Text style={styles.textCategory}>88,9 mil espectadores</Text>
                <Text style={styles.textCategory}>Ação</Text>
              </View>
            </View>
            <View style={styles.category}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/chat.jpg')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textCategory}>Just Chatting</Text>
                <Text style={styles.textCategory}>85,3 mil espectadores</Text>
                <Text style={styles.textCategory}>Vida Real</Text>
              </View>
            </View>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebed',
    height: 520
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
  textCategory: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
    marginTop: 5,
    marginBottom: 5
  },
  imageContainer: {
    width: 60, 
    height: 90,
    marginLeft: 20,
    marginTop: 15,
  },
  image: {
    width: 60, 
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
    category: {
      flex: 4, 
      backgroundColor: "white",
      borderBottomColor: "black",
      elevation: 1,
      marginBottom: 1,
      flexDirection: 'row',
  },
});

export default Categories