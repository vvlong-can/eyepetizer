import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions
} from 'react-native';

export default class extends Component {
    constructor() {
        super()
        this.state = {
            fadeInOpacity: new Animated.Value(0),
            fadeInScale: new Animated.Value(1),
            show: true,
        }
    }

    componentDidMount() {
        // 淡出效果
        // Animated.timing(this.state.fadeInOpacity, {
        //     toValue: 1,
        //     duration: 1,
        //     easing: Easing.linear
        // }).start();

        Animated.timing(this.state.fadeInScale, {
            toValue: 1.1,
            duration: 1500,
            easing: Easing.liner,
        }).start();

        setTimeout(() => {
            this.setState({show:false})
        }, 2000);
    }

    render() {
        let enterance = this.state.show ? <Animated.Image source={require('../images/launchImage.jpeg')} style={[styles.image,{transform:[{scale:this.state.fadeInScale}]},{opacity:this.state.opacity}]}/> : <View/>
        return (
            <View>
                {enterance}
            </View>
        )
    }
}


const screenWidth = Dimensions.get('window').width;
const screenHeigh = Dimensions.get('window').height;

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:0, left:0,
        width:screenWidth,
        height:screenHeigh,
    },
    text: {
        fontSize: 30
    },
    image: {
        resizeMode:"stretch",
        width:screenWidth,
        height:screenHeigh,
    }
});
