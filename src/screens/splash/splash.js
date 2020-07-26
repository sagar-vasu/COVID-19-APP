import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatable_singup: null,
      animatable_login: null,
      show: false,
    };
  }

  // Dashboard

  moveOnDashboard = () => {
    this.props.navigation.navigate('Main');
  };

  onIndexChanged = (index) => {
    if (index == 1) {
      this.setState({
        animatable_singup: 'bounceInLeft',
        animatable_login: 'bounceInRight',
        show: true,
      });
    } else {
      this.setState({
        animatable_singup: null,
        animatable_login: null,
        show: false,
      });
    }
  };
  render() {
    return (
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activedot} />}
        onIndexChanged={(index) => this.onIndexChanged(index)}>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/asset1.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>COVID-19</Text>
            <Text style={styles.text}>
              See the Realtime Pakistan and Worldwide COVID-19 situation!
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/asset2.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>COVID-19 SYMPTOMS</Text>
            <Text style={styles.text}>
              It can take up to 14 days for symptoms of coronavirus to appear
            </Text>

            {this.state.show ? (
              <View style={styles.container}>
                <Animatable.View
                  animation={this.state.animatable_login}
                  delay={0}
                  duration={1500}
                  useNativeDriver>
                  <TouchableOpacity
                    onPress={this.moveOnDashboard}
                    activeOpacity={0.6}
                    style={[
                      styles.button,
                      {
                        backgroundColor: '#3465d9',
                        borderWidth: 1,
                        borderRadius: 50,

                        marginTop: 15,
                        marginLeft: 20,
                      },
                    ]}>
                    <Text style={styles.loginText}>Get Started</Text>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
            ) : null}
          </View>
        </View>
      </Swiper>
    );
  }
}

const {width, height} = Dimensions.get('screen');

const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width_image,
    height: height_image,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3465d9',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(52,101,217,0.4)',
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activedot: {
    backgroundColor: '#3465d9',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  container: {
    flexDirection: 'row',
  },

  button: {
    width: width - 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    color: '#3465d9',
  },
  loginText: {
    color: 'white',
  },
});
