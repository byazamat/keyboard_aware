import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';

type FormSchema = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  addressOne: string;
  addressTwo: string;
  phoneNumber: string;
  promoCode: string;
  message: string;
  comment: string;
};

type FormKey = keyof FormSchema;

function App(): React.JSX.Element {
  const [form, setForm] = useState<FormSchema>({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    addressOne: '',
    addressTwo: '',
    phoneNumber: '',
    promoCode: '',
    message: '',
    comment: '',
  });

  const changeFormChange = (key: FormKey, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  return (
    <KeyboardProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          bottomOffset={50}
          style={styles.container}
          contentContainerStyle={styles.content}>
          <Text style={styles.heading}>Keyboard Aware ScrollView</Text>
          <TextInput
            style={styles.input}
            value={form.username}
            placeholder="Username"
            placeholderTextColor="#747474"
            testID={`TextInput#Username`}
            onChangeText={value => changeFormChange('username', value)}
          />
          <TextInput
            style={styles.input}
            value={form.firstname}
            placeholder="Firstname"
            placeholderTextColor="#747474"
            testID={`TextInput#Firstname`}
            onChangeText={value => changeFormChange('firstname', value)}
          />
          <TextInput
            style={styles.input}
            value={form.lastname}
            placeholder="Lastname"
            placeholderTextColor="#747474"
            testID={`TextInput#Lastname`}
            onChangeText={value => changeFormChange('lastname', value)}
          />
          <TextInput
            style={styles.input}
            value={form.email}
            placeholder="Email"
            placeholderTextColor="#747474"
            testID={`TextInput#Email`}
            onChangeText={value => changeFormChange('email', value)}
          />
          <TextInput
            style={styles.input}
            value={form.addressOne}
            placeholder="Address 1"
            placeholderTextColor="#747474"
            testID={`TextInput#Address`}
            onChangeText={value => changeFormChange('addressOne', value)}
          />
          <TextInput
            style={styles.input}
            value={form.addressTwo}
            placeholder="Address 2"
            placeholderTextColor="#747474"
            testID={`TextInput#Address`}
            onChangeText={value => changeFormChange('addressTwo', value)}
          />
          <TextInput
            style={styles.input}
            value={form.phoneNumber}
            placeholder="Phone number"
            placeholderTextColor="#747474"
            testID={`TextInput#Phone`}
            onChangeText={value => changeFormChange('phoneNumber', value)}
          />
          <TextInput
            style={styles.input}
            value={form.message}
            placeholder="Message"
            placeholderTextColor="#747474"
            testID={`TextInput#Message`}
            onChangeText={value => changeFormChange('message', value)}
          />
          <TextInput
            style={styles.input}
            value={form.comment}
            placeholder="Comment"
            placeholderTextColor="#747474"
            testID={`TextInput#Comment`}
            onChangeText={value => changeFormChange('comment', value)}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 8,
    color: '#000',
  },
  content: {
    padding: 16,
    gap: 8,
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#dddddd',
    color: '#000',
  },
});

export default App;
