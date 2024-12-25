
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1> hellooooo, here are some cute cats</h1>
      <ul>
        <li>
          <Link to="cat-one">CatOne</Link>
        </li>
        <li>
          <Link to="cat-two">CatTwo</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
