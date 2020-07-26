import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import {CustomCard, DashboardChart} from '../../components';

const axios = require('axios');

const chartData = [
  {
    name: 'Confirmed',
    color: '#0000FF',
    legendFontColor: '#0000FF',
    legendFontSize: 10,
  },
  {
    name: 'Recovered',
    color: 'green',
    legendFontColor: '#289228',
    legendFontSize: 10,
  },
  {
    name: 'Deaths',
    color: 'red',
    legendFontColor: '#FF0000',
    legendFontSize: 10,
  },
];

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'Confirmed Cases',
          backgroundColor: '#0000FF',
        },
        {
          title: 'Recovered Cases',
          backgroundColor: 'green',
        },

        {
          title: 'Deaths',
          backgroundColor: 'red',
        },
      ],
    };
  }

  //

  async componentDidMount() {
    try {
      let {data} = this.state;
      const getData = await axios.get('https://covid19.mathdro.id/api');
      let confirmed = getData.data.confirmed.value;
      let recovered = getData.data.recovered.value;
      let deaths = getData.data.deaths.value;
      data[0].number = confirmed;
      data[1].number = recovered;
      
      data[2].number = deaths;

      chartData[0].population = confirmed;
      chartData[1].population = recovered;
      chartData[2].population = deaths;
      this.setState({
        data,
        chartData,
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    let {data, chartData} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Covid-19 Cases Dashboard</Text>
          </View>
          {data &&
            data.map((val, i) => {
              return <CustomCard data={val} key={i} />;
            })}

          <DashboardChart data={chartData} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3465d9',
  },
});
