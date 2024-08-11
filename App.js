import {StyleSheet , Image ,Text , View, Touchable , TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import { launchCamera , launchImageLibrary } from 'react-native-image-picker';

const OpenCamera = () => {

  const [imgUrl  , setImgUrl] = useState("https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607656105-0257.jpg?im=FeatureCrop,size=(826,465)")
  const openCameraLib = async() => {
    
    const result = await launchCamera({saveToPhotos: true});
  console.log('result' , result);
  setImgUrl(result?.assets[0]?.uri);
  }
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.img} source={{uri : imgUrl}} />
    <Button  
    onPress={openCameraLib}
    title='Open Camera'
    />

    </View>
  );  
}

export default OpenCamera;

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},  
img:{
  width: '90%',
  height: 300,
  alignSelf: 'center',
},
btnCam:{
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width:100,
  height: 50,
  borderRadius: 6,
  backgroundColor: 'green',
},
textBtn:{
  color: '#fff',
},

}) 