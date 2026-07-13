import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let food_Items = [];
  //  let food_Items = ["Pizza", "Burger", "Pasta", "Salad", "Momos", "Samosa", "Dosa", "Idli", "Vada", "Chole Bhature"];


  //  let textInputAdd=useState();
  //  let textToShow=textInputAdd[0];
  //  let setTextState=texInputAdd[1];

   let [food_Items,setfoodItems]=useState([]);

   const onKeyDown=(event)=>{
    if(event.key==="Enter"){
      let newItems=event.target.value;
      event.target.value=""
      let newfoodItems=[...food_Items,newItems];
      setfoodItems(newfoodItems);

    }
   };
  return (
    <>
    <Container>
      <h1 style={{ color: "#3f0fdb", backgroundColor: "#e88463" }}>Food Items</h1>
       <FoodInput
      // Parent passing via props
       handleOnKeyDown= {onKeyDown}
      ></FoodInput>
      
      <ErrorMessage  items={food_Items}></ErrorMessage>
      <FoodItems items={food_Items} ></FoodItems>
      
    </Container>

    {/* <Container>
      <h2>This is second Container.</h2>
    </Container> */}


    {/* <Container>
      <FoodInput

      // Parent passing via props
       handleOnChange= {handleonChange}
      ></FoodInput>
    </Container> */}
    </>
  );
}

export default App;