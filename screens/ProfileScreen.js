import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUser(userData);
          } else {
            console.error('User data not found in Firestore');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.glassEffect}>
        <Text style={styles.title}>User Profile</Text>
        {user ? (
          <View>
            <View style={styles.section}>
              <Text style={styles.label}>Name:</Text>
              <View style={styles.glassBackground}>
                <Text style={styles.userDetails}>{user.displayName}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Email:</Text>
              <View style={styles.glassBackground}>
                <Text style={styles.userDetails}>{user.email}</Text>
              </View>
            </View>
            
          </View>
        ) : (
          <Text style={{color:'#FFFFFF'}}>Loading user data...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#180F02', 
  },
  glassEffect: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01E6FF',
  },
  glassBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
  },
  userDetails: {
    fontSize: 18,
    color: 'gold',
  },
});
