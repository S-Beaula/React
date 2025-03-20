import React, { useState } from 'react'
import { Modal,Form, Button} from 'react-bootstrap'
import axios from 'axios'
const Addrecipes = () => {
  const [showModal,setShowModal]=useState(true)
  const [addNewRecipe,setAddNewRecipe]=useState(
    {
        name:"",
        image:"",
        instructions:"",
        ingredients:""
    }
  )
  const modalhidden=()=>{
    setShowModal(false)
  }
  const handleRecipeChange=(e)=>{
    setAddNewRecipe({...addNewRecipe,[e.target.name]:e.target.value})
  }
  const handleSubmitNewRecipe=async(e)=>{
   e.preventDefault()
   console.log(addNewRecipe);
   try{
    await
   axios.post("http://localhost:3000/recipes",addNewRecipe)
   setShowModal(false)
   }catch(err){
    console.log(err);
   }
  }
 
  return (
    <div>
        <Modal show={showModal} onHide={modalhidden}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitNewRecipe}>
            <Form.Group className="mb-3">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={handleRecipeChange}
                name='name'
                value={addNewRecipe.name} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recipe ImageURL</Form.Label>
              <Form.Control
                
                onChange={handleRecipeChange}
                name='image'
                value={addNewRecipe.image} 
              />
              
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows={5} onChange={handleRecipeChange}  value={addNewRecipe.instructions}  name='instructions'  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={handleRecipeChange} value={addNewRecipe.ingredients} name='ingredients' />
            </Form.Group>
            <Button type='submit'>Add Recipe</Button>
          </Form>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default Addrecipes