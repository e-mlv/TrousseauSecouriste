import { Text, View, StyleSheet } from "react-native";
import CategoryButton from "../components/categoryButton";
import React from "react";
import { ScrollView } from "react-native";
import { CATEGORY_IMAGES } from "@/constants/images";
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryButton
          title="Conduite à tenir"
          onPress={() => console.log("CAT pressed")}
          image={require("@/assets/images/categoryicon/cat.png")}
        />
        <CategoryButton
          title="Constantes & Bilan"
          onPress={() => console.log("Constantes pressed")}
          image={CATEGORY_IMAGES.constantes}
        />
        <CategoryButton
          title="Gestes"
          onPress={() => console.log("Gestes pressed")}
          image={CATEGORY_IMAGES.gestes}
        />
        <CategoryButton
          title="Matériel"
          onPress={() => console.log("Matériel pressed")}
          image={CATEGORY_IMAGES.materiel}
        />
        <CategoryButton
          title="Urgences"
          onPress={() => console.log("Urgences pressed")}
          image={CATEGORY_IMAGES.urgences}
        />
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
