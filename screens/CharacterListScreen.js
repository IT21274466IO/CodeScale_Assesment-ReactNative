import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons'; // You can import icons from a library like FontAwesome5

const CharacterListScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the ThronesAPI
    axios
      .get('https://thronesapi.com/api/v2/Characters')
      .then((response) => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game of Thrones Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterItem}>
            <Text style={styles.characterName}>{item.fullName}</Text>
            <Text style={styles.characterTitle}>{item.title}</Text>
            <FontAwesome5 name="dragon" style={styles.icon} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0F0902',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#fff',
    textAlign: 'center', // Center the text
  },
  characterItem: {
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row', // Display text and icon in a row
    alignItems: 'center', // Center items vertically
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1, // Expand to fill available space
  },
  characterTitle: {
    fontSize: 16,
    color: '#01E6FF',
    flex: 1, // Expand to fill available space
  },
  icon: {
    fontSize: 24,
    color: '#FF5733',
    marginLeft: 8,
  },
});

export default CharacterListScreen;
