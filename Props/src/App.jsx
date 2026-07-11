import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  // let food_Items = [];
   let food_Items = ["Pizza", "Burger", "Pasta", "Salad", "Momos", "Samosa", "Dosa", "Idli", "Vada", "Chole Bhature"];

  return (
    <>
    <Container>
      <h1 style={{ color: "#3f0fdb", backgroundColor: "#e88463" }}>Food Items</h1>
      
      <ErrorMessage  items={food_Items}></ErrorMessage>
      <FoodItems items={food_Items} ></FoodItems>
      
    </Container>

    <Container>
      <h2>This is second Container.</h2>
    </Container>
    </>
  );
}

export default App;