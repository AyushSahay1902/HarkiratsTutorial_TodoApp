import React from 'react'

const CreateTodo = () => {
  return (
    <div>
    <h1>CreateTodo</h1>
    <input style={{
        padding: 20,
        margin: 5

    }} type="text" placeholder='title' ></input> <br />
    <input type="text" placeholder='description' ></input> <br />

    <button>Add Todo</button>
    </div>
  )
}

export default CreateTodo