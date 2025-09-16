import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CPAN 213</Text>
          <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.greeting}>Hello, I'm Vishal Vihol!</Text>
          <Text style={styles.info}>Student ID: n01710516</Text>
          <Text style={styles.info}>Program: CPAN </Text>
          <View style={styles.goals}>
            <Text style={styles.sectionTitle}>My Course Goals:</Text>
            <Text style={styles.goal}>• Learn React Native fundamentals</Text>
            <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
            <Text style={styles.goal}>• Master state management with Redux</Text>
            <Text style={styles.goal}>• Deploy apps to app stores</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes the full screen height
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    flexGrow: 1, // Allows ScrollView to expand and scroll
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default App;