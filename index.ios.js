/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Dimensions,Navigator} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TestPage from './TestPage';
import Choiceness from './app/Choiceness';
import Discovery from './app/Discovery';
import LaunchAnimatedImage from './app/LaunchAnimatedImage';

export default class eyepetizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "feature"
        };
    }
    render() {
        let defaultName = 'Choiceness';
        let defaultComponent = Choiceness;
        return (
            <View style={styles.container}>

                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === "feature"}
                        title="精选"
                        onPress={() => this.setState({selectedTab: "feature"})}
                        renderIcon={() => <Image source={require('./images/feature.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./images/feature_selected.png')} style={styles.tabIcon} />}
                        >

                            <Navigator
                            initialRoute={{ name: defaultName, component: defaultComponent }}
                            configureScene={(route) => {
                                return Navigator.SceneConfigs.VerticalDownSwipeJump;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator} />
                            }} />
                            {/*<Choiceness/>*/}

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'discovery'}
                        title="发现"
                        onPress={() => this.setState({selectedTab: 'discovery'})}
                        renderIcon={() => <Image source={require('./images/discovery.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./images/discovery_selected.png')} style={styles.tabIcon} />}
                        >
                        <Discovery/>

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'follow'}
                        title="关注"
                        onPress={() => this.setState({selectedTab: 'follow'})}
                        renderIcon={() => <Image source={require('./images/follow.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./images/follow_selected.png')} style={styles.tabIcon} />}
                        >

                        <TestPage/>

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'settings'}
                        title="我的"
                        onPress={() => this.setState({selectedTab: 'settings'})}
                        renderIcon={() => <Image source={require('./images/settings.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./images/settings_selected.png')} style={styles.tabIcon} />}
                        >

                        <TestPage/>

                    </TabNavigator.Item>
                </TabNavigator>

                <LaunchAnimatedImage/>
            </View>
        );
    }
}

const screenWidth = Dimensions.get('window').width;
const screenHeigh = Dimensions.get('window').height;

var styles = StyleSheet.create({
    container: {
        width:screenWidth,
        height:screenHeigh,
    },
    tab: {
        height: 40,
        backgroundColor: '#eee',
        alignItems: 'center',
        bottom: 0
    },
    tabIcon: {
        height: 25,
        width: 25
    },
    himiTextStyle: {
        backgroundColor: '#eee',
        color: '#f00',
        fontSize: 30,
        marginTop: 30
    }
});



AppRegistry.registerComponent('eyepetizer', () => eyepetizer);
