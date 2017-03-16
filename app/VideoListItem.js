/**
 * Created by vvmacbook on 2017/3/12.
 */
import React, {Component} from "react";
import {StyleSheet, Image, Text, Dimensions, TouchableOpacity} from "react-native";

export default class VideoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoModel: {
                title: '这里显示标题',
                subTitle: '',
                playUrl: '',
                imgUrl: 'https://facebook.github.io/react/img/logo_og.png',
            },
        }
    }


    _pressRow(rowData,rowID) {
        alert('666');

    }

    render() {
        const {rowData, rowID, goToDetail} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={()=> goToDetail(rowData) } >
                <Image
                    style={VideoListItemStyle.backgroundImage} source={{uri: this.props.imgUrl}}>
                    <Text style={VideoListItemStyle.title}>{this.props.title}</Text>
                    <Text style={VideoListItemStyle.subTitle}>#{this.props.subTitle}</Text>
                </Image>
            </TouchableOpacity>
        )
    }
}
const screenWidth = Dimensions.get('window').width;

const VideoListItemStyle = StyleSheet.create({
    backgroundImage: {
        height: 250,
        resizeMode: "cover",
    },
    title: {
        width: screenWidth,
        height: 20,
        flex: 1,
        paddingTop: 250/2,
        backgroundColor: "#0000008C",
        textAlignVertical: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        lineHeight:10,
    },
    subTitle: {
        width: screenWidth,
        flex: 1,
        backgroundColor: "#0000008C",
        textAlignVertical: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
    }
})