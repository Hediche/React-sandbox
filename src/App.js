import "./styles.css";

const fname = "Khadijah";
const lname = "Zunun";
const num = Math.floor(Math.random() * 10);
export default function App() {
  return (
    <div className="App">
      <h1>What would you like to eat, {fname + " " + lname} ? </h1>
      <h2>
        Nice, {name} ! you dont have to pay {num}$.{" "}
      </h2>
      <ul>
        <li>لەغمەن</li>
        <li>پولو</li>
        <li>مانتا</li>
      </ul>
    </div>
  );
}
