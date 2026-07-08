import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  let foodItems=[ "Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  return (
    <>
      <h1>Food Items</h1>
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