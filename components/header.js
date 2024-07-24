import React from 'react'
import {View, Text, Button} from 'react-native'
import { Header, Icon } from 'react-native-elements';


class Menu extends React.Component{
    render(){
        return(
            <Header
                placement="left"
                backgroundColor="#6441a4"
                leftComponent={
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{marginTop:5 }}>
                      <Icon
                        name="search"
                        color="#fff"
                        type='feather'
                      />
                    </View>
                  </View>
                }
                rightComponent={
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{marginRight: 15, marginTop:5 }}>
                      <Icon
                        name="bell"
                        color="#fff"
                        type='feather'
                      />
                      </View>
                      <View style={{marginRight: 15, marginTop:5 }}>
                      <Icon
                        name="message-square"
                        color="#fff"
                        type='feather'
                      />
                      </View>
                      <View style={{marginTop:5}}>
                      <Icon
                        name="user"
                        color="#fff"
                        type='feather'
                      />
                      </View>
                    </View>
                  }
            />
        )
    }
}

export default Menu