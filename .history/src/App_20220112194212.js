import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="login">
        <h1>AutoCalculator</h1>
        <form >
          <input
            type="text"
            name="u"
            placeholder="Enter amount to use"
            required="required"
          />
          <button type="submit" class="btn btn-primary btn-block btn-large">
            Start Shopping
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
