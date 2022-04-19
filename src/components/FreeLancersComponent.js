import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { GetFreelancerList } from '../action/FreelancerAPI';

import { Header } from '../controls/Header';

import { listStyles as styles } from './style';

// const windowHeight = Dimensions.get('window').height;

class FreeLancersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrAllFreelancers: [],
      arrDisplayFreelancers: [],
      fetched: false,
      filterVisible: false,
      allFilters: [
        { id: 1, title: "Beginner", subTitle: "Budget : Below Rs 50 K", minRating: 0.1, maxRating: 3 },
        { id: 2, title: "Moderate", subTitle: "Budget : Below Rs 100 K", minRating: 3.1, maxRating: 4 },
        { id: 3, title: "Expert", subTitle: "Budget : Below Rs 200 K", minRating: 4.1, maxRating: 5 },
      ],
      selectedFilters: [],
    };
    this.sheetRef = React.createRef();
  }

  componentDidMount() {
    GetFreelancerList().then((response) => {
      this.setState({
        arrAllFreelancers: response,
        arrDisplayFreelancers: [...response],
        fetched: true
      });
    }).catch((error) => {
      console.log(error)
    });
  }

  navigateToProfile = (item) => {
    this.props.navigation.navigate('ProfileScreen', { item });
  }

  handleSnapPress = () => {
    this.sheetRef.current.snapToIndex(0)
  }

  alert = () => {
    Alert.alert('coming soon ')
  }

  renderItem = ({ item }) => {
    console.log(item)
    return (
      <View style={{ alignSelf: 'stretch' }}>
        <TouchableOpacity
          onPress={() => this.navigateToProfile(item)}>
          <View style={styles.headerRow}>
            <View style={styles.headerLabel}>
              <Text style={styles.nameLabel}>{item.first_name + ' ' + item.last_name}</Text>
              <Text style={styles.completedCountLabel}>{'projects_completed : ' + item.projects_completed}</Text>
              <Text style={styles.emailLabel}>{item.email}</Text>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={styles.circleView}></View>
                <Text style={styles.specializationsLabel}>{item.specializations}</Text>
              </View>

            </View>
            <View>
              <View style={styles.profileImgContainer} >
                <Image
                  source={{ uri: item.image }}
                  style={styles.userPic} />
              </View>
              <View style={styles.ratingView}>
                <Image source={require('../assets/homeStar.png')} style={styles.imgStar} />
                <Text style={styles.ratingLabel} >{item.avg_ratings}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity >
      </View >
    )
  }

  renderRating = (count) => {
    const arrStar = []
    for (let index = 0; index < count; index++) {
      arrStar.push(<Image
        source={require('../assets/profileStar.png')}
        style={styles.filterStarImage} />)
    }
    return arrStar
  }

  onPressFilter = (filter) => {
    const { selectedFilters } = this.state;
    let updatedFilters = [...selectedFilters];

    if (selectedFilters.includes(filter)) {//found the filter already applied so removing it
      const index = selectedFilters.indexOf(filter);
      updatedFilters.splice(index, 1);
    } else {//filter not found so adding it.
      updatedFilters.push(filter);
    }

    //sorting this array so that during filter of items, we can pick min value of first item and max value of last item.
    //sorting based on max value because ids can be different when in future filters start coming from backend.
    updatedFilters = updatedFilters.sort((a, b) => a.maxRating - b.maxRating);

    this.setState({ selectedFilters: updatedFilters });
  }

  onPressSaveFilter = () => {
    this.sheetRef.current.close();
    const { arrAllFreelancers, selectedFilters } = this.state;

    if (selectedFilters.length > 0) {
      const filtered = arrAllFreelancers.filter((freelancer) => {
        return parseFloat(freelancer.avg_ratings) >= selectedFilters[0].minRating &&
        parseFloat(freelancer.avg_ratings) <= selectedFilters[selectedFilters.length - 1].maxRating;
      });
      this.setState({ arrDisplayFreelancers: filtered });
    } else {
      this.setState({ arrDisplayFreelancers: [...arrAllFreelancers] });
    }
  }


  renderFilter = (filter) => {
    const { selectedFilters } = this.state;
    const selected = require('../assets/on.png');
    const deselected = require('../assets/notSelected.png');

    return (
      <>
        <TouchableOpacity style={styles.headerRow} activeOpacity={0.7} onPress={() => this.onPressFilter(filter)}>
          <View style={styles.headerLabel}>
            <Text style={styles.expertiseLabel}>{filter.title}</Text>
            <Text style={styles.budgetLabel}>{filter.subTitle}</Text>
          </View>
          {this.renderRating(filter.maxRating)}
          <Image
            source={selectedFilters.includes(filter) ? selected : deselected}
            style={styles.selectedFilter} />
        </TouchableOpacity>
        <View style={styles.viewDashLine} />
      </>

    )
  };

  render() {
    const { arrDisplayFreelancers, arrAllFreelancers, fetched, allFilters } = this.state;
    const snapPoints = ["40%"]

    return (
      <SafeAreaView style={styles.container}>
        <Header
          header_title={"Freelancers"}
          onPressSearch={() => this.alert()}
          onPressMenu={() => this.alert()}
          onPressFilter={() => this.handleSnapPress()}
        />
        {fetched ? arrDisplayFreelancers.length > 0 ?
          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={arrDisplayFreelancers}
              extraData={this.state}
              keyExtractor={(item) => item.id}
              renderItem={(item) => this.renderItem(item)}
            />
          </View> : <View style={styles.emptyListView}>
            <Text style={styles.emptyListText}>
              {arrAllFreelancers.length > 0 ? "No records found for the applied filter." : "No records to display"}
            </Text>
          </View> : null}
        <BottomSheet
          index={-1}
          ref={this.sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <BottomSheetView>
            {allFilters.map((item) => {
              return this.renderFilter(item);
            })}
            <TouchableOpacity
              style={styles.panelButton}
              onPress={this.onPressSaveFilter}>
              <Text style={styles.panelButtonTitle}>{'Save'}</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>

    );
  }
}

export default FreeLancersComponent;
