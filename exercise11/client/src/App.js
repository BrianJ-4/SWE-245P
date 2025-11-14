import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.log(json);
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
