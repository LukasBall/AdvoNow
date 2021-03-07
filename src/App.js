import logo from './logo.svg';
import './landing_page.css';

function App() {
  return (
    <div>
      <main class="Site-content">
        <body class="Site">
          <div class="head_container">
          <div class="banner">Anwalt oder Anwältin? Hier&nbsp <a class="klicken_btn" href="https://bit.ly/3eijYny">klicken.</a></div>
          <div class="header">
            <div class="logo"><a href="index.html"><img src="./Logo_AdvoNow_zugeschnitten.png" alt="Hier müsste das Logo sein." height="60px" width="300px"></img></a></div>
            <div class="header_btn">
              <div class="about"><a href="about.html">ABOUT</a></div>
              <div class="services"><a href="services.html">SERVICES</a></div>
              <div class="contact"><a href="contact.html">KONTAKT</a></div>
            </div>
          </div>
          </div>
          <div class="main_body">
            <div class="decision_tree"> /*Hier sollte dieses Entscheidungsbaum-Tool rein.*/</div>
          </div>
        </body>
      </main>
      <footer>
        <div class="footer_container">
          <div class="footer_links">
            <div class="AGB"><a href="agb.html">AGB</a></div>
            <div class="Impressum"><a href="impressum.html">Impressum</a></div>
            <div class="Datenschutz"><a href="datenschutz.html">Datenschutz</a></div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
