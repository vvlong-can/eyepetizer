import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    } from 'react-native';
import Discovery_Header_Swiper from './Discovery_Header_Swiper';
import Discovery_Header_Swiper_With_Title from './Discovery_Header_Swiper_With_Title';
import Discovery_ListView_With_Title from './Discovery_ListView_With_Title';

export default class extends Component {
    render() {
        return(
            <ScrollView style={styles.wrapper}>
                <Discovery_Header_Swiper/>
                <Discovery_Header_Swiper_With_Title/>
                <Discovery_ListView_With_Title/>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        marginBottom:140,
    },
});
