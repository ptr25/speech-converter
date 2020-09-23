import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  
} from 'react-native';
import { Header } from 'react-native-elements';
import* as Speech from 'expo-speech';
export default class App extends React.Component {
  speak=()=>{
    var say= this.state.text;
    Speech.speak(say)
  }
  constructor() {
    super();
    this.state = {
      text: '',
      phonicSounds:[],
      chunks:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Mind the Mic',
            style: { color: 'black', fontSize: 20, fontFamily:'algeria' },
          }}
        />
<Image 
style={styles.imageIcon}
source={require('./mkic.jpg')}
/>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.buttonText}>Test your Text</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor:'white'
  },
  goButton: {
    width: '50%',
    height: 125,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'blue'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'zapfino'
  },
  
    imageIcon:{
    width:150,
    height:150,
    marginLeft:85,
    marginTop:40
  },

});
