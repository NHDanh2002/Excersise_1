import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Platform, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const {userName, setUserName} = useState("");
  const {passWord, setPassWord} = useState("");
  const onPress = ()=>
  {
    const message = `Đăng nhập với: TaiKhoan: ${userName} Matkhau: ${passWord}`;
    if (Platform.OS === 'web') {
      window.alert(message); 
    } else {
      Alert.alert('Thông tin đăng nhập', message); 
    }
  };
  return (
    <View style={styles.container}>
      <View
      style={{height:"100%", width:"30%"}}>
        <ImageBackground source={require('../Excersise_1/assets/bg.png')}
        style = {styles.bg}>
          <View style={styles.content}>
            <Image source={require('../Excersise_1/assets/banner.png')}
            style={styles.img}/>
            <Text style={{
              color: "white",
              fontWeight: "bold",
              textAlign:"right",
              fontStyle: "italic",
              width: "85%",
              padding:10
            }}>
              REGISTER
            </Text>
            <TextInput style = {styles.textinput}
              //onChangeText={(text) => setUserName(text)}
              onChangeText={setUserName}
              autoFocus
              placeholder="UserName"
              value = {userName}
            />
            <TextInput style = {styles.textinput}
              secureTextEntry
              //onChangeText={(text) => setUserName(text)}
              onChangeText={setPassWord}
              //autoCorrect
              placeholder="PassWord"
              value = {passWord}
            />
            <TouchableOpacity
              style = {styles.button}
              onPress = {onPress}
            >
              <Text style = {styles.textbutton}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
  },
  bg: {
    height: "100%",
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    resizeMode: "cover",
    width: "100%"
  },
  img: {
    height: 200,
    width: 400,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    fontSize: 15,
    padding: 5,
    backgroundColor:"white",
    width: "60%"
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    margin: 10,
    width: "60%"
  },
  textbutton: {
    fontSize: 15,
    fontWeight:"bold",
  }
});
