import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F86D3B",
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 10,
    height: 80,
    width: 80,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
