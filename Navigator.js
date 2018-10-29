import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';

import Post from './Post';
import Posts from './Posts';
import navStyles from './styles/navStyles';

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  gotToPostPage = () => {
    this.props.navigation.navigate('Post');
  };

  render() {
    return (
      <View>
        <Posts {...this.props} />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post : {
    screen: Post
  }
});
