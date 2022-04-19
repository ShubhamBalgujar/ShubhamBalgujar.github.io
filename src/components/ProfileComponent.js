import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileStyles as styles } from './style';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objFreeLancer: {},
            imageVisible: false,
            imgRatio: 1
        };
    }

    componentDidMount() {
        const { route } = this.props;
        if (route && route.params) {
            Image.getSize(route.params.item.image, (width, height) => {
                this.setState({ objFreeLancer: route.params.item, imgRatio: height / width, imageVisible: true });
            });
        }
    }

    navigateBack = () => {
        this.props.navigation.pop();
    }

    render() {
        const { objFreeLancer, imageVisible, imgRatio } = this.state;
        const screen = Dimensions.get('screen');
        const imageHeight = (screen.width) * imgRatio;
        const placeHolderHeight = (240 / 375) * screen.width;
        const contentHeight = screen.height - placeHolderHeight;
        return (
            <SafeAreaView edges={['right', 'bottom', 'left']}>
                {imageVisible ?
                    <Image
                        source={{ uri: objFreeLancer.image }}
                        style={{ width: '100%', height: imageHeight, position: 'absolute' }}
                    /> : null}
                <View style={styles.ratingView}>
                    <Image source={require('../assets/profileStar.png')} style={styles.imgStar} />
                    <Text style={styles.ratingLabel} >{objFreeLancer.avg_ratings}</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', height: placeHolderHeight }}></View>
                    <View style={{ height: contentHeight, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <Text style={styles.nameLabel}>{objFreeLancer.first_name + ' ' + objFreeLancer.last_name}</Text>
                            <Text style={styles.emailLabel}>{objFreeLancer.email}</Text>
                            <Text style={styles.completedCountLabel}>{'projects_completed : ' + objFreeLancer.projects_completed}</Text>
                            <Text style={styles.description}>{objFreeLancer.about}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                                <View style={styles.circleView}></View>
                                <Text style={styles.specializationsLabel}>{objFreeLancer.specializations}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image source={require('../assets/location.png')} style={{ width: 13, height: 19, marginRight: 5 }} />
                                <Text style={styles.specializationsLabel}>{objFreeLancer.address}</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.navigateBack()} style={styles.btnFullWidth}>
                                <Text style={styles.btnText}>{'Proceed'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity  style={styles.backButtonView}>
                    <Image source={require('../assets/back.png')} style={styles.backBtn} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default ProfileComponent;
