import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomInput from '../components/common/CustomInput/CustomInput';
import CustomModal from '../components/common/CustomModal/CustomModal';

const CreateAdScreen = () => {
  const [adInfo, setAdInfo] = useState({
    name: '',
    desc: '',
    dep: '',
    eta: '',
    remarks: '',
    time: '',
  });

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      <CustomInput
        label="Task Title"
        value={adInfo.name}
        mode="outlined"
        onChangeText={text => setAdInfo({...adInfo, name: text})}
      />

      <CustomInput
        label="Describe the task"
        value={adInfo.desc}
        mode="outlined"
        onChangeText={text => setAdInfo({...adInfo, name: text})}
      />

      <CustomInput
        label="Task Title"
        value={adInfo.name}
        mode="outlined"
        onChangeText={text => setAdInfo({...adInfo, name: text})}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default CreateAdScreen;

const styles = StyleSheet.create({});
