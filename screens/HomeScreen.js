import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
  }

  const handleUserListNavigation = () => {
    // Navigate to the UserListScreen
    navigation.navigate('UserList');
  }

  const handleProfileNavigation = () => {
    // Navigate to the Profile
    navigation.navigate('Profile');
  }

  return (
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0902', // Updated background color
  },
  title: {
    fontSize: 36, // Increased font size
    fontWeight: 'bold',
    marginBottom: 24, // Increased margin bottom
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 16, // Adjusted padding
    paddingHorizontal: 24, // Adjusted padding
    borderRadius: 10,
    marginTop: 20, // Increased margin top
  },
  logoutText: {
    color: 'white',
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userListButton: {
    backgroundColor: '#3498db',
    paddingVertical: 16, // Adjusted padding
    paddingHorizontal: 24, // Adjusted padding
    borderRadius: 10,
    marginTop: 20, // Increased margin top
  },
  userListText: {
    color: 'white',
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#DBBD35',
    paddingVertical: 16, // Adjusted padding
    paddingHorizontal: 24, // Adjusted padding
    borderRadius: 10,
    marginTop: 20, // Increased margin top
  },
  profileText: {
    color: 'white',
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
