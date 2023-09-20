import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: character.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.detail}>{character.id}</Text>
        </View>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.detail}>{character.firstName}</Text>
        </View>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.detail}>{character.lastName}</Text>
        </View>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.detail}>{character.fullName}</Text>
        </View>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.detail}>{character.title}</Text>
        </View>
        <View style={styles.glassBackground}>
          <Text style={styles.label}>Family:</Text>
          <Text style={styles.detail}>{character.family}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180F02',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 300,
    borderWidth: 2, 
    borderColor: '#F6D965', 
    borderRadius: 10, 
  },
  detailsContainer: {
    padding: 16,
  },
  glassBackground: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F6D965',
  },
  detail: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default CharacterDetailScreen;
