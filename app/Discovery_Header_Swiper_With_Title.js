import React,{ Component } from 'react';
import Discovery_Header_Swiper from './Discovery_Header_Swiper';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import Discovery_Swiper from './Discovery_Swiper';

export default class extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.titleText}>
                    热 门 排 行
                </Text>
                <View style={styles.swiper}>
                    <Discovery_Swiper
                    />
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        width : screenWidth,
        height : 240,
        flexDirection : "column",
    },

    titleText : {
        textAlign : "center",
        fontWeight : 'bold',
        width : screenWidth,
        top : 20,
        flex: 1,
        fontSize: 16,
    },

    swiper : {
        flex: 3,
    },
});

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
