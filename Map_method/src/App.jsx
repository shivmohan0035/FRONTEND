import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // let foodItems = [];
  let foodItems=[ "Pizza", "Burger", "Pasta", "Salad", "Sushi"];

// (1) Using if-else statement
  // if(foodItems.length===0){
  //   return <h1>No Food Items Available</h1>
  // }
  return (
    <>
      <h1>Food Items</h1>
      {/* (2) Using Ternary Operator ---> agar return ke andhar ==> null, empty,undefined hoga to ye line ignore ho jayegi by JSX */}
      
      {foodItems.length===0 ? <h1>No Food Items Available</h1> : null}

       <ul className="list-group">
        {foodItems.map(item=>
          <li key={item} className="list-group-item">
            {item}
          </li>
        )}
       </ul>
    </>
  );
}

export default App;