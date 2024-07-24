import React from 'react'
import {View, ScrollView } from 'react-native'
import Header from "../components/header";
import Popular from '../components/popular';
import Categories from '../components/categories';

class Search extends React.Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View backgroundColor='#f2f1ed'>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <Header />
                    <Popular />
                    <Categories />
                </ScrollView>
            </View>
        )
    }
}

export default Search