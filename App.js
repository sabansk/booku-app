import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>When impostor is sus, then it's sus!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  rectangle: {
    width: 125 * 2,
    height: 125,
    backgroundColor: "#30a8f9",
  },
});

// ini tidak kelihatan di exponya, helppp
const Rectangle = () => {
  return (
    <View style={styles.rectangle}>
      <Text>Tes shape lmao</Text>
    </View>
  );
};
