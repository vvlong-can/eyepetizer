/**
 * Created by vvmacbook on 2017/3/15.
 */
import React, { Component } from 'react';
import {
    ListView,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    TouchableHighlight,
    Navigator,
    Dimensions } from 'react-native';

import VideoListItem from "./VideoListItem";

export default class VideoDetail extends Component {
    constructor(props) {
        super(props);
        // 这个东西有点鬼畜  author这个字典有可能为空的
        if (this.props.authorDic == null) {
            // alert('null');
            this.state = {
                authorIcon: null,
                authorName: null,
                authorDec: null
            };
        } else {
            // alert('not null');
            this.state = {
                authorIcon: this.props.authorDic.icon,
                authorName: this.props.authorDic.name,
                authorDec: this.props.authorDic.description,
            };
            // alert(this.state.authorName)
        }
        this.state = {
            rowTitle: this.props.rowTitle,
            subTitle: this.props.subTitle,
            videoUrl: this.props.videoUrl,
            videoCover: this.props.videoCover,
            consumptionDic: this.props.consumptionDic,
            descriptionEditor:this.props.descriptionEditor
        };
    }

    //处理从VideoList传递过来的参数    这里可以做点数据处理
    componentDidMount() {
        alert('2')
        this.setState({

        });
    }

    _back() {
        const { navigator } = this.props;

        if (this.props.rowTitle) {
            // alert(this.props.id);
        }

        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:VideoList
            navigator.pop();
        }
    }

    render() {
        // 有作者icon的 这里还要加个关注的button
        if (this.props.authorDic == null) {
            // alert('author is null');
            return (
                <View refreshing>
                    <Text>获得的参数:rowTitle = { this.state.rowTitle }</Text>
                    <Text>subTitle{ this.state.subTitle }</Text>
                    <Text>videoUrl{ this.state.videoUrl }</Text>
                    <Text>videoCover{ this.state.videoCover }</Text>
                    <Text>收藏{ this.state.consumptionDic.collectionCount }</Text>
                    <Text>分享{ this.state.consumptionDic.shareCount }</Text>
                    <Text>评论{ this.state.consumptionDic.replyCount }</Text>
                    <Text>{ this.state.descriptionEditor }</Text>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text>点我跳回去</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            // alert('not null');
            return (
                <View refreshing>
                    <Text>获得的参数:rowTitle = { this.state.rowTitle }</Text>
                    <Text>subTitle{ this.state.subTitle }</Text>
                    <Text>videoUrl{ this.state.videoUrl }</Text>
                    <Text>videoCover{ this.state.videoCover }</Text>

                    {/*神奇 这里还没设置进来  ！！！*/}
                    <Text>作者头像{ this.props.authorDic.icon }</Text>
                    <Text>作者名{ this.props.authorDic.name }</Text>
                    <Text>作者描述{ this.props.authorDic.description }</Text>
                    <Text>收藏{ this.state.consumptionDic.collectionCount }</Text>
                    <Text>分享{ this.state.consumptionDic.shareCount }</Text>
                    <Text>评论{ this.state.consumptionDic.replyCount }</Text>
                    <Text>{ this.state.descriptionEditor }</Text>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text>点我跳回去</Text>
                    </TouchableOpacity>
                </View>
            );
        }



    }
}

