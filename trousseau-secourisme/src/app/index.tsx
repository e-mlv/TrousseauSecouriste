import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import CategoryButton from "../components/categoryButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryButton title="Constantes" onPress={() => console.log("Constantes pressed")} image="https://example.com/constant.png" />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
