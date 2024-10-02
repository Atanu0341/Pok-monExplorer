import { Pokemon } from "./components";
import GitHubLink from "./components/GitHubLink";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-yellow-200 flex items-center justify-center">
      <Pokemon />
      <GitHubLink />
    </div>
  );
}

export default App;
