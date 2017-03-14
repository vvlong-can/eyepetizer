import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    View,
    Image,
    } from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList : [],
        }
    }

    fetchData = () => {
        fetch('http://baobab.kaiyanapp.com/api/v4/discovery/hot?udid=1bad43a8c2be4aa283d95ab7a32708ff056bf200&vc=168&vn=3.3.1')
            .then((response) => response.json())
            .then((responseJson) => {
                itemList = responseJson.itemList[0].data.itemList;
                length = itemList.length;
                var imgs = [];
                for (var i = 0; i < itemList.length; i++) {
                    imgs.push(itemList[i].data.image)
                }
                this.setState({
                    imageList : imgs
                })
            })
            .catch((error) => {
            });
    };

    render() {
        return(
            <Swiper
                height={240}
                style={styles.wrapper}
                activeDot={<View style={styles.activeDot}/>}>
                <Image source={{uri: "http://img.kaiyanapp.com/39d7d055bceb72666c8c192bd9b5e5d8.jpeg?imageMogr2/quality/60/format/jpg"}} style={styles.swiperImage}/>
                <Image source={{uri: "http://img.kaiyanapp.com/45ec952ff9e3a8d21dc603df4ad1d874.jpeg?imageMogr2/quality/60/format/jpg"}} style={styles.swiperImage}/>
                <Image source={{uri: "http://img.kaiyanapp.com/fc652727a588c237b5d7df0c3e710d3e.jpeg?imageMogr2/quality/60/format/jpg"}} style={styles.swiperImage}/>
            </Swiper>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },

    swiperImage: {
        height: 240,
        resizeMode:'contain',
    },

    activeDot: {
        backgroundColor: '#ffffff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    }
});
