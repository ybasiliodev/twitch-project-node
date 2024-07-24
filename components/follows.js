import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

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
                Categorias Seguidas
              </Text>
            </View>
            <View style={styles.scroll}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Cuphead.jpg')}
                    />          
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Cuphead </Text>  
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Dark.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Dark Souls III </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Minecraft.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Minecraft </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/GTA.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Grand Theft Auto V </Text> 
                  </View>                  
                </View>
                <View style={styles.content}> 
                  <View style={styles.imageContainer}>
                    <Image
                     style={styles.image}
                     source={require('../assets/images/Blood.jpg')}
                    />
                  </View>
                  <View style={styles.rodape}>
                    <Text style={styles.texto}> Bloodborne </Text> 
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