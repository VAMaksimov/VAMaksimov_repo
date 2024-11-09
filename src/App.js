import './App.css';

function App() {
  return (
    <div class="mainContainer">
      <div class="container">
        <h1>Unit Converter</h1>
        <div class="tabs">
          <button class="tab-btn active" onclick="loadForm('length.html')">Length</button>
          <button class="tab-btn" onclick="loadForm('temperature.html')">Temperature</button>
        </div>
        <div id="form-container"></div>
        <div id="result-container" class="result-container" style="display: none;">
          <p id="result-text"></p>
          <button class="reset-button" onclick="reset()">Reset</button>
        </div>
      </div>
      <footer class="footer-layout">
        <button class="theme-btn"></button>
      </footer>
    </div>
  );
}

export default App;
