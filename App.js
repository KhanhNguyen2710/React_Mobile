import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View,TextInput,Button,StyleSheet, Alert} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RadioButton } from "react-native-paper";


export default function App() {
  const [textName, setName] = React.useState(null);
  const [textDestination, setDestination] = React.useState(null);
  const [textDate, setDate] = React.useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  


  const [value, setValue] = React.useState("");
  const [textDescription, setDescription] = React.useState(null);
// bug nhập vào đi =)))
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textDestination.trim()) {
      alert('Please Enter Destination');
      return;
    }
    if (!value.trim()) {
      alert('Please Require Risks');
      return;
    }
    if (!textDescription.trim()) {
      alert('Please Enter Destination');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    Alert.alert('Details entered','Name: ' + textName + '\nDestination: ' + textDestination
    + '\nDate: ' + textDate + '\nRisks: ' + value+ '\nDescription: ' + textDescription);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <StatusBar style="auto" />
        <Text style={styles.texBar}>Trip</Text>
      </View>

      <View style={styles.Layout}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={textName}
          placeholder="Name"
        ></TextInput>

        <Text style={styles.name}>Destination</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDestination}
          value={textDestination}
          placeholder="Destination"
        ></TextInput>

        <Text style={styles.name}>Date of the Trip</Text>
        
        <View style={styles.buttonDate}>
          <Button
            title={textDate.toLocaleDateString()}
            onPress={showDatePicker}
            color={"#F07168"}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <Text style={styles.name}>Require Risks Assessment</Text>

        <View>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View style={styles.radioButton}>
              <RadioButton value="Yes" />
              <Text style={{ fontSize: 20 }}>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="No" />
              <Text style={{ fontSize: 20 }}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.name}>Description</Text>
        <TextInput
          style={styles.inputDescription}
          multiline={true}
          maxLength={100}
          onChangeText={setDescription}
          value={textDescription}
          placeholder="Description..."
        ></TextInput>

        <View style={styles.saveButton}>
          <Button
            title="Save"
            color={"#0081A8"}
            onPress={checkTextInput}
          />
        </View>
      </View>
    </View>
  );
}
//css
const styles = StyleSheet.create({
  tabBarContainer: {
    // flex: 1,
    backgroundColor: "#01AFBA",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  texBar: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5,
  },

  Layout: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FDFCDD",
  },
  name: {
    fontSize: 20,
    marginTop: 14,
    marginStart: 20,
  },

  input: {
    height: 40,
    margin: 10,
    marginHorizontal: 20,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 18,
    borderColor: "#F07168",
  },

  buttonDate: {
    fontSize: 20,
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 5,
    borderRadius: 16,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 20,
    marginTop: 10,
  },
  inputDescription: {
    height: 100,
    margin: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 18,
    borderWidth: 2,
    textAlignVertical: "top",
    borderColor: "#F07168",
  },
  saveButton: {
    marginHorizontal: 130,
  },
});
