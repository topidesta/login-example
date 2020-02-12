import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Ingresar datos:</Text>
        <Text style={styles.textForInput}>Nombre:</Text>
        <TextInput style={styles.input} testID="name" />
        <Text style={styles.textForInput}>Apellido:</Text>
        <TextInput style={styles.input} testID="lastName" />

        <Button
          title={'Crear cuenta'}
          onPress={butttonClicked}
          style={styles.buttons}
        />
      </View>
    );
  }
}

const butttonClicked = () => {
  alert('Has pulsado!!!');
};

export default Home;

// npx react-native run-ios
