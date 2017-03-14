import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    Text,
    View,
    Image,
    } from 'react-native';
import Discovery_Header_Swiper from './Discovery_Header_Swiper';
import Discovery_Header_Swiper_With_Title from './Discovery_Header_Swiper_With_Title';

export default class extends Component {
    render() {
        return(
            <View>
                <Discovery_Header_Swiper/>
                <Discovery_Header_Swiper_With_Title/>
            </View>

        )
    }
}
