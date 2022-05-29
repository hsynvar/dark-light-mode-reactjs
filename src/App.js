import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./content/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
