import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
   let food_Items = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

  return (
    <>
      <h1 style={{ color: "#3f0fdb", backgroundColor: "#e88463" }}>Food Items</h1>
      
      <ErrorMessage  items={food_Items}></ErrorMessage>
      <FoodItems items={food_Items} ></FoodItems>
      

    </>
  );
}

export default App;