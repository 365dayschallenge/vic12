import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="login">
        <h1>AutoCalculator</h1>
        <form method="post">
          <input
            type="text"
            name="u"
            placeholder="Username"
            required="required"
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <button type="submit" class="btn btn-primary btn-block btn-large">
            Let me in.
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
