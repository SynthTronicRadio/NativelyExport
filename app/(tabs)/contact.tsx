
import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/commonStyles';

const { width, height } = Dimensions.get('window');

export default function ContactScreen() {
  console.log('Contact screen rendered with YouTube button added');

  const handleSocialLink = async (url: string) => {
    try {
      console.log('Opening social media link:', url);
      await Linking.openURL(url);
    } catch (error) {
      console.error('Error opening link:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/07aab9fc-1fad-42d2-942c-9f1894ba0d10.jpeg')}
        style={styles.image}
        resizeMode="contain"
      />
      
      <View style={styles.socialContainer}>
        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => handleSocialLink('https://www.tiktok.com/@synthtronic.radio')}
        >
          <Ionicons name="logo-tiktok" size={40} color={colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => handleSocialLink('https://www.instagram.com/synthtronicradio')}
        >
          <Ionicons name="logo-instagram" size={40} color={colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => handleSocialLink('https://www.facebook.com/synthtronicradio')}
        >
          <Ionicons name="logo-facebook" size={40} color={colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => handleSocialLink('https://www.youtube.com/@synthtronicradio')}
        >
          <Ionicons name="logo-youtube" size={40} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.6,
    marginBottom: 40,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 20,
  },
  socialButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
