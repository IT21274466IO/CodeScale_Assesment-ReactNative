import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth } from '../config/firebase';
import { getDatabase, ref, get } from 'firebase/database';

export default function ProfileScreen() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get the currently authenticated user
    const user = auth.currentUser;

    if (user) {
      // Fetch the user's profile data from the Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `profiles/${user.uid}`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <Image
            source={{ uri: userData.profilePicture }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
          {/* Add more user information here */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
});
