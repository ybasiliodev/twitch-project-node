import React from 'react'
import {View, ScrollView } from 'react-native'
import Header from "../components/header";
import Follows from "../components/follows";
import Channels from "../components/channels";

class Following extends React.Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View backgroundColor='#f2f1ed'>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <Header />
                    <Follows />
                    <Channels />
                </ScrollView>
            </View>
        )
    }
}

export default Following