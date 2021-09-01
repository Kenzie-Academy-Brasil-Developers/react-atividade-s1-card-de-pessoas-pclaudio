import "./App.css";
import Developer from "./components/Developer";

const developers = [
  {
    name: "Gabriel",
    age: 19,
    country: "Brasil",
  },
  {
    name: "Filipe",
    age: 28,
    country: "Brasil",
  },
  {
    name: "Mariana",
    age: 24,
    country: "Itália",
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {developers.map((developer) => (
          <Developer
            name={developer.name}
            age={developer.age}
            country={developer.country}
          />
        ))}
      </header>
    </div>
  );
};

export default App;
