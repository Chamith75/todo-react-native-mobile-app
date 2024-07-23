
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './components/Todo';
import { useState } from 'react';



export default function App() {
  let [Task , setTask] = useState();
  const [TaskList, setTaskList] = useState([]);

  let HandleOnchange = (task) => {
    setTask(task)
    console.log(task)
  }

  let AddTask = () => {
    Keyboard.dismiss();
    if (Task && Task.trim() !== "") {
      setTaskList([...TaskList, Task]);
      setTask('');
    }
    
  }

  let deletetask = (index) => {
    let itemscopy = [...TaskList];
    itemscopy.splice(index, 1);
    setTaskList(itemscopy);  

  }

  
  
  return (
    
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      > 
      {/* Todays Tasks */}
      <View style={styles.taskswraper}>
        <Text style={styles.sectionTitle}>Today'S Tasks</Text>
        <View style={styles.items}>
          
          {/* Tasks List */}
          {TaskList.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => deletetask(index)}>
                <Todo text={item} />
              </TouchableOpacity>
            ))}
        </View>

      </View>
      </ScrollView>
     

      {/* Write an task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Add Task' value={Task}  onChangeText={HandleOnchange} />
        <TouchableOpacity onPress={AddTask}>
          <View style={styles.addTask}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskswraper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:0,
    paddingHorizontal:15
   
    
    
    
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
    
    
  },
  addTask:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  scrollViewContent:{
    flexGrow: 1,
    paddingBottom: 60,
  }

});
