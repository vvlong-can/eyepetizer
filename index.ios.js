/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TestPage from './TestPage';

export default class eyepetizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "精选"
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={styles.tab}>
                <TabNavigator.Item selected={this.state.selectedTab === "精选"} title="精选" onPress={() => this.setState({selectedTab: "精选"})}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>我是第一个选项卡，直接书写出的视图!</Text>
                    </View>
                </TabNavigator.Item>

                <TabNavigator.Item selected={this.state.selectedTab === "发现"} title="发现" onPress={() => this.setState({selectedTab: "发现"})}>

                    <TestPage/>

                </TabNavigator.Item>

                <TabNavigator.Item selected={this.state.selectedTab === "关注"} title="关注" onPress={() => this.setState({selectedTab: "关注"})}>

                    <TestPage/>

                </TabNavigator.Item>

                <TabNavigator.Item selected={this.state.selectedTab === "我的"} title="我的" onPress={() => this.setState({selectedTab: "我的"})}>

                    <TestPage/>

                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

var styles = StyleSheet.create({
    tab: {
        height: 40,
        backgroundColor: '#eee',
        alignItems: 'center',
        bottom: 0
    },
    himiTextStyle: {
        backgroundColor: '#eee',
        color: '#f00',
        fontSize: 30,
        marginTop: 30
    }
});

AppRegistry.registerComponent('eyepetizer', () => eyepetizer);
