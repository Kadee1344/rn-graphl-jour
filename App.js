import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import navStyles from './styles/navStyles';
import Post from './Post';
import Posts from './Posts';


const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjmq0qqyg39rg0147n4k0typm"
  }),
  cache
});

console.log(client);

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  gotToPostPage = () => {
    this.props.navigation.navigate('Post');
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Posts />
          <Button onPress={this.gotToPostPage} title="Go to the Post Page" />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default createStackNavigator({
  Home: {
    screen: App
  },
  Post : {
    screen: Post
  }
});