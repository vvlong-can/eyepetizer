/**
 * Created by vvmacbook on 2017/3/12.
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
    Dimensions } from 'react-native';

import VideoListItem from "./VideoListItem";
import VideoDetail from "./VideoDetail";
import ScrollableTabView from 'react-native-scrollable-tab-view';


export default class Choiceness extends Component {

    constructor(props) {
        super(props);  // 纯数组rowHasChanged(prevRowData, nextRowData)
        // var ds = new ListView.DataSource(getSectionHeaderData(dataBlob, sectionID));
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedTab: 'home',
            title: '',
            dataSource: ds,
            // picUrls: ds.cloneWithRows(['row 1','row 2']),
        };
    }

    fetchData = () => {
        fetch('http://baobab.kaiyanapp.com/api/v1/feed?num=1')
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson.dailyList[0].videoList);
                // var videoList = [],
                //     length,
                //     video = {},
                //     videoTitles = [],
                //     videoPic = [],
                //     i;
                videoList = responseJson.dailyList[0].videoList;
                // length = videoList.length;
                // videoTitles.push("都在这里了\n今年所有值得一看的大片");
                // videoPic.push('https://facebook.github.io/react/img/logo_og.png');
                // for (i = 0; i < length; i++) {
                //     video = videoList[i];
                //     videoTitles.push(video.title);
                //     videoPic.push(video.coverForFeed);
                // }
                //console.log(videoTitles);
                //console.log(videoPic);
                // videoList.push("都在这里了\n今年所有值得一看的大片");
                this.setState({
                    title: responseJson.dailyList[0].videoList[0].title,
                    dataSource: this.state.dataSource.cloneWithRows(videoList),
                })
            })
            .catch((error) => {
                console.error(error);
            });
    };


    // 渲染头部
    // _renderSectionHeader: function() {
    //
    // }

    // past() {
    //     alert('past!');
    // }


    _genRows(flag){
        const dataBlob = [];
        alert(flag);
        alert('555');
        return dataBlob;
    }




    //渲染列表项
    _renderRow(rowData, rowId) {
        return <VideoListItem
            rowData = {rowData}
            rowID = {rowId}
            _pressRow = {()=>this._pressRow(rowData, rowId)}
            goToDetail={ this._goToDetail.bind(this)}
            imgUrl = {rowData.coverForFeed}
            title = {rowData.title}
            subTitle = {rowData.category}/>
    }

    _pressRow() {
        alert('666');

    }

    _goToDetail(rowData) {
        const { navigator } = this.props;
        const imageUrl = `https:${rowData.imagePath}`;
        // console.log("去商品详情页",rowData);
        // Storage.mergeArrayWithKeyValue('lastestRecord',{name: rowData.companyName,id: rowData.companyId, imagePath: rowData.imagePath, productName: rowData.productName});

        if(navigator) {
            navigator.push({
                component: VideoDetail,
                params: {
                    rowTitle: this.state.title,
                    subTitle: rowData.category,
                    videoUrl: rowData.playUrl,
                    videoCover: rowData.coverForFeed,
                    authorDic: rowData.author,
                    consumptionDic: rowData.consumption,
                    descriptionEditor:rowData.descriptionEditor
                }
            })
        }
    }

    render() {
        if(this.state.title) {
            return (
                <ScrollView>
                    {/*<View>*/}
                        <Image resource={{uri:"http://img.kaiyanapp.com/9fb34512de6d12a6b22d821079d06ff3.jpeg"}}/>
                    {/*</View>*/}
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionId, rowId)=>this._renderRow(rowData, rowId)}
                    />
                    <TouchableOpacity onPress={() => {
                        alert('555');
                        console.log('Press Basic Button!');
                    }}>
                        <Text>点我获取数据</Text>
                        <Text style={{
                            paddingTop: screenHeight/2,
                            textAlign: 'center',
                            fontSize:25,}}>查看往期编辑精选
                            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                        </Text>
                    </TouchableOpacity>
                    {/*<Button*/}
                        {/*onPress={this.past()}*/}
                        {/*title="查看往期编辑精选"*/}
                        {/*color="gray"*/}
                        {/*fontSize="12"*/}
                    {/*/>*/}
                </ScrollView>


            );
        } else {
            return (
                <View style={{flex: 1, paddingTop: 22}}>
                    <Text>测试</Text>
                    <TouchableOpacity onPress={this.fetchData()}>
                        <Text>点我获取数据</Text>
                        <Text style={{
                            paddingTop: screenHeight/2,
                            textAlign: 'center',
                            fontSize:25,}}>Loading</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

var styles =  StyleSheet.create({
    checkOld:{
        width: screenWidth,
        height: 40,
        color: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
