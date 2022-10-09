import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import TodoItem from "./screens/TodoItem";
import { Button, Input } from "react-native-elements";

export default function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([
    {
      _id: 1,
      name: "CRISTIANAN SIIIIIUUUU",
      isChecked: false,
    },
  ]);

  const onPressNameHandler = () => {
    setTodos((prev) => [...prev, { _id: new Date(), name, isChecked: false }]);
    setName("");
  };

  const toggleCheckedTodo = (id) => {
    const newArray = todos.map((item) =>
      item._id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    // newArray[idx].isChecked = !newArray[idx].isChecked;
    setTodos(newArray);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((item) => item._id !== id);
    setTodos(newArray);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading} h1>
        ToDo
      </Text>

      <View style={styles.actions}>
        <Input
          value={name}
          style={styles.input}
          onChangeText={setName}
          placeholder="Name"
        />
        <Button
          onPress={onPressNameHandler}
          style={styles.button}
          title="Add"
          disabled={!name.length}
        />
      </View>

      {todos &&
        todos.map((todo, idx) => (
          <TodoItem
            idx={idx}
            name={todo.name}
            _id={todo._id}
            isChecked={todo.isChecked}
            toggleCheckedTodo={toggleCheckedTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eaee",
    paddingTop: "13%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "10%",
  },
  input: {
    borderRadius: 15,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    border: "none",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
  },
  button: {
    fontSize: 18,
    width: "100%",
    paddingHorizontal: 20,
  },
  actions: {
    marginBottom: "5%",
  },
});
