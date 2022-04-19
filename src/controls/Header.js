import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const Header = ({ header_title, onPressMenu, onPressSearch, onPressFilter }) => {
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={onPressMenu}>
                <Image style={{ height: 15, width: 23, resizeMode: 'contain' }}
                    source={require('../assets/menu.png')} />
            </TouchableOpacity>
            <View style={styles.headerView}>
                <Text style={styles.titleStyle} >{header_title}</Text>
            </View>

            <TouchableOpacity style={{ marginRight: 20 }} onPress={onPressSearch}>
                <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                    source={require('../assets/searchIcon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={onPressFilter}>
                <Image style={{ height: 39, width: 39, resizeMode: 'contain' }}
                    source={require('../assets/filterIcon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    viewStyle: {
        height: 44,
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: '#000000',
        // fontFamily: '',
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '700',
    },
    userPic: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
    },
}

export { Header };
