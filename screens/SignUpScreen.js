import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';


export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const handleSignUp = async () => {
  //   // Add your sign-up logic here, and make sure to validate password and confirmPassword.
  //   if (password !== confirmPassword) {
  //     alert('Password and Confirm Password do not match.');
  //     return;
  //   }
  //   try {
  //     // Create the user in Firebase Authentication
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     // Create a user document in Firestore with additional information
  //     const userDocRef = doc(db, 'users', user.uid);
  //     await setDoc(userDocRef, {
  //       displayName: name, // Replace 'name' with the actual user's name
  //       email: email,
  //       // Add more user data fields as needed
  //     });
  
  //     // Navigate to the Home screen or wherever you want
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     alert(error.message);
  //   }
    
  // };

  // const handleSubmit = async () => {
  //   if(email && password){
  //       try {
  //           await createUserWithEmailAndPassword(auth, email, password);
  //           navigation.navigate('Home')
  //       } catch (error) {
  //           alert(error.message)
  //       }
  //   }
  // }

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        displayName: name,
        email: email,
      });
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    }
    
  };

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-amber-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/signup.png')} style={{ width: 165, height: 110 }} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            value={name}
            onChangeText={value=>setName(value)}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Name"
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={email}
            onChangeText={value=>setEmail(value)}
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className={`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3 ${passwordError ? 'border-red-500' : ''}`}
            secureTextEntry
            value={password}

            onChangeText={value => {
                setPassword(value);
                const lowercaseRegex = /[a-z]/;
                const uppercaseRegex = /[A-Z]/;
                const digitRegex = /[0-9]/;
                const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

                let error = '';

                if (value.length < 8) {
                error = 'Password must be at least 8 characters long.';
                } else if (!lowercaseRegex.test(value)) {
                error = 'Password must contain at least one lowercase character.';
                } else if (!uppercaseRegex.test(value)) {
                error = 'Password must contain at least one uppercase character.';
                } else if (!digitRegex.test(value)) {
                error = 'Password must contain at least one number.';
                } else if (!specialCharacterRegex.test(value)) {
                error = 'Password must contain at least one special character.';
                }
                setPasswordError(error);
            }}
            placeholder="Enter Password"
            />
            {passwordError ? (
                <Text className="text-red-500 ml-4">{passwordError}</Text>
            ) : null}
            <Text className="text-gray-700 ml-4">Confirm Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder="Confirm Password"
            />
          <TouchableOpacity className="py-3 bg-amber-300 rounded-xl"

            onPress={() => {
                handleSignUp();
            }}>
            <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-semibold text-yellow-500"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
