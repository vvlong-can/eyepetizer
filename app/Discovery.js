// @flow
'use strict';

import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Button,
    TouchableHighlight
    } from 'react-native';
import Util from './Utils'
import Swiper from 'react-native-swiper';
import Choiceness from './Choiceness';
import Discovery_Hot_Page from './Discovery_Hot_Page';

class HeaderFace extends Component{
    constructor(props){
      super(props);
      this.state = {
        btnColor:"#787878",
      };
    }

    render() {
        return(
            <View style={styles.headerFaceView}>
                <TouchableHighlight
                    style={styles.headerFaceLeftBtn}
                    underlayColor="#f7f7f7"
                    onPress={() => {
                        console.log('Press Basic Button!');
                    }}>
                    <Text style={styles.headerFaceLeftBtnText}>
                        全部分类
                    </Text>
                </TouchableHighlight>
                <Image source={require('../images/discover.jpg')} style={styles.headerTitleImage}/>
                <TouchableHighlight
                    style={styles.headerFaceRightBtn}
                    underlayColor="#f7f7f7"
                    onPress={() => {
                        console.log('Press Basic Button!');
                    }}>
                    <Text style={styles.headerFaceRightBtnText}>
                        搜索
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class KindView extends Component{
    render() {
        return (
            <View style={styles.kindView}>
                <TouchableHighlight
                    style={styles.flex1}
                    underlayColor="#f7f7f7"
                    onPress={() => {
                        console.log('Press Basic Button!');
                    }}>
                    <Text style={styles.kindViewBtnText}>
                        热 门
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.flex1}
                    underlayColor="#f7f7f7"
                    onPress={() => {
                        console.log('Press Basic Button!');
                    }}>
                    <Text style={styles.kindViewBtnText}>
                        分 类
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.flex1}
                    underlayColor="#f7f7f7"
                    onPress={() => {
                        console.log('Press Basic Button!');
                    }}>
                    <Text style={styles.kindViewBtnText}>
                        作 者
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default class extends Component {
    render() {
        return(
            <View>
                <HeaderFace></HeaderFace>
                <KindView/>

                <Swiper style={styles.wrapper} showsButtons={false}>
                    <Choiceness/>
                    <Discovery_Hot_Page/>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>作 者</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    flex1: {
        flex:1,
    },

    headerFaceView: {
        width: screenWidth,
        height: 40,
        backgroundColor: "#f7f7f7",
        top: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    headerTitleImage: {
        flex: 1,
        height: 40,
    },

    headerFaceLeftBtn: {
        flex: 1,
        paddingLeft: 10,
    },

    headerFaceRightBtn: {
        flex: 1,
        paddingRight: 10,
    },

    headerFaceLeftBtnText: {
        fontSize: 12,
        color: "#4c4c4c",
    },

    headerFaceRightBtnText: {
        fontSize: 12,
        color: "#3a3a3a",
        textAlign: "right",
    },

    kindView: {
        width: screenWidth,
        height: 40,
        backgroundColor: "#d9d9d9",
        flexDirection: "row",
        alignItems: "center",
        top: 20,
    },

    kindViewBtnText: {
        fontSize: 10,
        color: "#232323",
        textAlign: "center",
        fontWeight: "bold",
    },

    wrapper: {
        paddingTop: 10,
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
