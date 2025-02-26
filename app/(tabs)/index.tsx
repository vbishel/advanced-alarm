import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.mainContainer}
    >
      <ThemedView style={styles.view}>
        <Text style={styles.text}>Проектирование ПО</Text>
        <Text style={styles.text}>Спринт 1</Text>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    gap: 6,
    paddingTop: 48,
  },
  view: {
    backgroundColor: "black",
  },
  text: {
    color: "white"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
