import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { Button } from "@rneui/themed";

const TodoItem = ({
  idx,
  name,
  isChecked,
  _id,
  toggleCheckedTodo,
  deleteTodo,
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.checkbox}>
        <CheckBox onPress={() => toggleCheckedTodo(_id)} checked={isChecked} />
        <Text
          style={
            isChecked
              ? {
                  textDecorationLine: "line-through",
                  color: "gray",
                }
              : null
          }
        >
          {name}
        </Text>
      </View>
      <Button onPress={() => deleteTodo(_id)} title={"Delete"} color="error" />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: "5%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 160,
  },
  name: {
    fontSize: 18,
    marginLeft: 5,
  },
});
