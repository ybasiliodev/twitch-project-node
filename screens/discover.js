import React from 'react'
import {View, ScrollView } from 'react-native'
import Header from "../components/header";
import Thumb from "../components/thumb";
import Lives from "../components/lives";

class Discover extends React.Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View backgroundColor='#f2f1ed'>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <Header />
                    <Lives />
                    <Thumb />
                </ScrollView>
            </View>
        )
    }
}

export default Discover