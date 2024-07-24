import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Header } from 'react-native-elements';

class Popular extends React.Component{
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
                Jogos populares para celular
              </Text>
            </View>
            <View style={styles.scroll}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Swar.jpg')}
                    />          
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Summoners War </Text>  
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/FF.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Free Fire </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Eseven.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Epic Seven </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/PUBGM.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> PUBG MOBILE </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Teppen.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> TEPPEN </Text> 
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
    backgroundColor: '#ebebed',
    height: 250
  },
  scroll: {
    backgroundColor: '#ebebed',
    flex: 8,    
  },
  title: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: '#ebebed',
    textAlign: "left",
    marginBottom: 5
  },
  texto: {
    fontFamily: "Helvetica-Neue",
    color: 'black',
  },
  imageContainer: {
    flex: 4, backgroundColor: "#ebebed",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  image: {
    width: 130
  },
  content: {
    marginLeft: 20,
    marginRight: 10,
    backgroundColor: '#ebebed',
    fontSize: 20,
    width: 130
  },
    rodape: {
      flex: 1, 
      backgroundColor: "white",
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: "center",
      alignItems: "center",
      marginBottom: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5
  },
});

export default Popular