import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AssetTagScanning from './components/asset-tag-scanning';
import styles from './style/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <AssetTagScanning />
    </View>
  );
}
