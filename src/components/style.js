import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch'
    },
    emptyListView: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyListText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#a2a2a2',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    headerLabel: {
        flex: 4,
        marginHorizontal: 15,
    },
    nameLabel: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 20,
        paddingTop: 3,
        fontWeight: 'bold'
    },
    completedCountLabel: {
        textAlign: 'left',
        color: '#494949',
        fontSize: 16,
        paddingTop: 3,
        fontWeight: 'bold'
    },
    emailLabel: {
        textAlign: 'left',
        color: '#007AFF',
        fontSize: 14,
        paddingTop: 3,
    },
    circleView: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        marginTop: 7,
        marginRight: 5
    },
    specializationsLabel: {
        textAlign: 'left',
        color: '#9a9a9a',
        fontSize: 12,
        paddingTop: 3,
    },
    profileImgContainer: {
        width: 60,
        height: 60,
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e1e1e1',
        borderWidth: 1,
    },
    userPic: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    ratingView: {
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 40,
        marginVertical: 5,
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        flexDirection: 'row'
    },
    imgStar: {
        width: 12,
        height: 12,
        marginRight: 5
    },
    ratingLabel: {
        // fontFamily:'Roboto',
        fontWeight: '400',
        fontSize: 11
    },
    contentContainerStyle: {
        padding: 16,
        backgroundColor: '#F3F4F9',
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHandle: {
        width: 40,
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4
    },
    expertiseLabel: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 15,
        paddingTop: 3,
        fontWeight: '500'
    },
    budgetLabel: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 11,
        paddingTop: 3,
        fontWeight: '400'
    },
    filterStarImage: {
        height: 14,
        width: 14
    },
    selectedFilter:{
        height: 25,
        width: 25,
        marginLeft:20
    },
    panelButton: {
        padding: 13,
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    viewDashLine: {
        borderStyle: 'dashed',
        borderWidth: 0.7,
        borderRadius: 1,
        borderColor: '#e1e1e1',
        marginHorizontal: 15
    },
});

export const profileStyles = StyleSheet.create({
    ratingView: {
        position: 'absolute',
        marginLeft: 10,
        borderWidth: 1,
        right: 0,
        top: 40,
        marginRight: 10,
        borderRadius: 40,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        flexDirection: 'row'
    },
    backButtonView: {
        position: 'absolute',
        marginLeft: 10,
        left: 0,
        top: 40,
        marginLeft: 10,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    backBtn: {
        width: 12,
        height: 20,
    },
    imgStar: {
        width: 12,
        height: 12,
        marginRight: 5
    },
    ratingLabel: {
        // fontFamily:'Roboto',
        fontWeight: '400',
        fontSize: 11
    },
    nameLabel: {
        color: '#000000',
        fontSize: 36,
        paddingTop: 3,
        fontWeight: '700'
    },
    emailLabel: {
        textAlign: 'left',
        color: '#007AFF',
        fontSize: 18,
        paddingTop: 3,
        top: 10
    },
    completedCountLabel: {
        textAlign: 'left',
        color: '#494949',
        fontSize: 14,
        paddingTop: 3,
        fontWeight: 'bold',
        top: 20
    },
    description: {
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: "400",
        color: '#000000',
        top: 30
    },
    circleView: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#87C637',
        marginTop: 7,
        marginRight: 5
    },
    specializationsLabel: {
        textAlign: 'left',
        color: '#9a9a9a',
        fontSize: 12,
        paddingTop: 3,
    },
    btnFullWidth: {
        height: 50,
        marginTop: 15,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        fontWeight: '700'
    }
})