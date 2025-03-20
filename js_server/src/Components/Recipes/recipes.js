import React, { useState, useEffect } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'

const Recipes = () => {
  const [data, setData] = useState([])
  const [delRecipe, setDelRecipe] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [edit,setEdit]=useState(false)
  const [existedRecipes, setExistedRecipes] = useState({
    name: "",
    image: "",
    instructions: "",
    ingredients: ""
  })

  useEffect(() => {
    axios.get("http://localhost:3000/recipes")
      .then(res => {
        setData(res.data)
        console.log(res.data);
      })
      .catch((err) => { console.log(err) })
  }, [delRecipe,edit])

  const handleAddToCart = (cartItem) => {
    alert("Item successfully added to cart")
    axios.post('http://localhost:3000/cartItem', cartItem)
    console.log(cartItem);
  }

  const handleDeleteRecipes = async (del) => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${del.id}`)
      alert("Item deleted from recipes")
      console.log(del);
      setDelRecipe(del)
    } catch (err) {
      console.log(err);
    }
  }

  const handleEditRecipes = (EditItem) => {
    setShowEditModal(true)
    setExistedRecipes(EditItem) 
  }

  const handleSubmitEditRecipes = async (e) => {
    e.preventDefault(); 
    try {
      await axios.put(`http://localhost:3000/recipes/${existedRecipes.id}`, existedRecipes)
      alert("Edited Successfully")
      setShowEditModal(false)  
      setEdit(true)
    } catch (err) {
      console.log(err);
    }
  }

  const handleEditChange = (e) => {
    setExistedRecipes({ ...existedRecipes, [e.target.name]: e.target.value })
  }

  const modalhidden = () => {
    setShowEditModal(false)
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
      {data.map((x) => {
        return (
          <div key={x.id}>
            <Card style={{ width: "26rem", padding: "20px" }}>
              <Card.Img variant="top" src={x.image} />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Subtitle><h5>{x.cuisine}</h5></Card.Subtitle>
                <Card.Subtitle><h5>{x.mealType}</h5></Card.Subtitle>
                <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
                  <Button variant="primary" onClick={() => handleAddToCart(x)}>AddToCart</Button>
                  <Button variant="primary" onClick={() => handleEditRecipes(x)}>EditRecipes</Button>
                  <Button variant="primary" onClick={() => handleDeleteRecipes(x)}>DeleteRecipe</Button>
                </div>
              </Card.Body>
            </Card>

            <Modal show={showEditModal} onHide={modalhidden}>
              <Modal.Header closeButton>
                <Modal.Title>Editing Recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmitEditRecipes}>
                  <Form.Group className="mb-3">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Recipe name"
                      autoFocus
                      onChange={handleEditChange}
                      value={existedRecipes.name}
                      name='name'
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Recipe Image URL</Form.Label>
                    <Form.Control
                      onChange={handleEditChange}
                      value={existedRecipes.image}
                      name='image'
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      onChange={handleEditChange}
                      value={existedRecipes.instructions}
                      name='instructions'
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      onChange={handleEditChange}
                      value={existedRecipes.ingredients}
                      name='ingredients'
                    />
                  </Form.Group>

                  <Modal.Footer>
                    <Button type="submit" variant="primary">Edit Changes</Button>
                    <Button variant="secondary" onClick={modalhidden}>Cancel</Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
