import React, { useContext} from 'react'
import { StyleSheet } from 'react-native'
import { Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const id =navigation.getParam('id')
  //using Context to find that blog you're editing
  const { state, editBlogPost } = useContext(Context)
  //state is all the Blogs
  const blogPost = state.find(
    (blogPost) => blogPost.id === id
  )

  return (
    <BlogPostForm
    initialValues={{title: blogPost.title, content: blogPost.content}}

    onSubmit={(title, content) => {
      editBlogPost(id, title, content)
    }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
