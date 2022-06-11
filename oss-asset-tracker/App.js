import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AssetTagScanning from './src/views/asset-tag-scanning';
import styles from './src/style/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <AssetTagScanning />
    </View>
  );
}