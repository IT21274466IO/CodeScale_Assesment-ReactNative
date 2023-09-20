import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { themeColors } from '../theme';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
  }

  const handleUserListNavigation = () => {
    navigation.navigate('UserList');
  }

  const handleProfileNavigation = () => {
    navigation.navigate('Profile');
  }

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Game of Thrones</Text>
      
        <TouchableOpacity onPress={handleUserListNavigation} style={styles.userListButton}>
          <Text style={styles.userListText}>Character List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfileNavigation} style={styles.profileButton}>
          <Text style={styles.profileText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()}
              style={styles.arrowContainer}
              className="bg-amber-300 top-10 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View> */}

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#180F02', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 16, 
    paddingHorizontal: 24, 
    borderRadius: 10,
    marginTop: 20, 
  },
  logoutText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userListButton: {
    backgroundColor: '#3498db',
    paddingVertical: 16, 
    paddingHorizontal: 24, 
    borderRadius: 10,
    marginTop: 20, 
  },
  userListText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#DBBD35',
    paddingVertical: 16, 
    paddingHorizontal: 24, 
    borderRadius: 10,
    marginTop: 20, 
  },
  profileText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
