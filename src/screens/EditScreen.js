import React, { useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Context} from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  //using Context to find that blog you're editing
  const { state } = useContext(Context)
  //state is all the Blogs
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text> Edit Title </Text>
      <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
