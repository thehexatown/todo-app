import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => this.props.navigation.replace('Home'), 1000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Splash</Text>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
