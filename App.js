import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "skyblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default App;
