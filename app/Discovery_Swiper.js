import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    View,
    Image,
    ListView,
    Text
    } from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
              dataSource: ds.cloneWithRows([
                  'http://img.kaiyanapp.com/5992fbf7468c2174a31fb7b438ebd414.jpeg',
                  'http://img.kaiyanapp.com/33a59b02f3d8e57831844b54771f72d6.jpeg',
                  'http://img.kaiyanapp.com/9fb34512de6d12a6b22d821079d06ff3.jpeg',
              ]),
            };
        }

    _renderRow(rowData, rowId) {
        return (
            <View style={styles.wrapper}>
                <Image source={{uri: rowData}} style={styles.swiperImage}/>
            </View>

        )
    }

    render() {
        return(
            <ListView style={styles.listview}
                horizontal={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

var styles = StyleSheet.create({
    listview: {
        flex : 1,
    },

    wrapper: {
        flex: 1,
        width: 170,
        height: 170,
        marginLeft: 5,
    },

    swiperImage: {
        height: 170,
    },
});
