// @flow
import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    View,
    Image,
    ListView,
    Text,
    Dimensions,
} from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
              dataSource: ds.cloneWithRows([
                  {'url':'http://img.kaiyanapp.com/6fc362a8b9f6c7a08c365cff06372be3.png?imageMogr2/quality/60/format/jpg','title':'仔细看!这段沙画有你当年的梦中情人么','tag':'#创意','time':'03\'19\'\'','name':'-方浪浪-'},
                  {'url':'http://img.kaiyanapp.com/5cf2bb9a126066905e5642f200e3b7b4.jpeg?imageMogr2/quality/60/format/jpg','title':'长城上的功夫钢琴','tag':'#音乐','time':'02\'44\'\'','name':'ThePianoGuys 钢琴达人'},
                  {'url':'http://img.kaiyanapp.com/df776f22fa341e81398a0a2f2eced755.png?imageMogr2/quality/60/format/jpg','title':'风靡全国的超火爆人气甜品岩烧乳酪！','tag':'#生活','time':'01\'59\'\'','name':'迷迭香'},
              ]),
            };
        }

    _renderRow(rowData, rowId) {
        return (
            <View>

                <Image source={{uri: rowData.url}} style={styles.swiperImage}>
                    <View style={{flex:5}}>
                    </View>
                    <Text style={styles.imageTitleText}>
                        {rowData.title}
                    </Text>
                    <Text style={styles.imageSubTitleText}>
                        {rowData.tag}  /  {rowData.time}
                    </Text>
                    <Text style={styles.imageTagText}>
                        {rowData.name}
                    </Text>
                    <View style={{flex:3}}>
                    </View>
                </Image>
            </View>
        )
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.titleText}>
                    近 期 热 门
                </Text>
                <ListView style={styles.listview}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        width : screenWidth,
    },

    titleText : {
        textAlign : "center",
        fontWeight : 'bold',
        width : screenWidth,
        top : 20,
        fontSize: 16,
    },

    imageTitleText : {
        textAlign : "center",
        fontWeight : 'bold',
        fontSize: 18,
        color : "white",
        flex : 2,
        backgroundColor: 'rgba(0,0,0,0)',
    },

    imageSubTitleText : {
        textAlign : "center",
        fontSize: 12,
        color : "white",
        flex : 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },

    imageTagText : {
        textAlign : "center",
        fontSize: 11,
        color : "white",
        flex : 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },

    listview: {
        top : 40,
    },

    swiperImage: {
        height: 220,
        flexDirection: "column",
        alignItems: 'center',
    },
});

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
