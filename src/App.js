import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import SearchRecipe from './Components/SearchRecipe';

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <SearchRecipe />
      <Footer />
    </div>
  );
}

export default App;
