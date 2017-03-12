/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TestPage from './TestPage';

export default class eyepetizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "feature"
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={styles.tab}>
                <TabNavigator.Item selected={this.state.selectedTab === "feature"} title="精选" onPress={() => this.setState({selectedTab: "feature"})} renderIcon={() => <Image source={require('./images/feature.png')}/>}>
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

                <TabNavigator.Item selected={this.state.selectedTab === 'discovery'} title="发现" onPress={() => this.setState({selectedTab: 'discovery'})}>

                    <TestPage/>

                </TabNavigator.Item>

                <TabNavigator.Item selected={this.state.selectedTab === 'follow'} title="关注" onPress={() => this.setState({selectedTab: 'follow'})}>

                    <TestPage/>

                </TabNavigator.Item>

                <TabNavigator.Item selected={this.state.selectedTab === 'settings'} title="我的" onPress={() => this.setState({selectedTab: 'settings'})}>

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
