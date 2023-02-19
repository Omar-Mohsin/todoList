import axios from "axios"

const API_URL = "http://localhost:3001"

async function createItem(task) {
  const { data: newTodo } = await axios.post(API_URL, {
    task,
  })
  return newTodo
}

async function deleteItem(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateItem(id, payload) {
  const { data: newItem } = await axios.put(`${API_URL}${id}`, payload)
  return newItem
}

async function getAllItems() {
  const { data: items } = await axios.get(API_URL)
  return items
}

export default { createItem, deleteItem, updateItem, getAllItems }