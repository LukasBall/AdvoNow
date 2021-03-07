import logo from './logo.svg';
import './landing_page.css';

function App() {
  return (
    <div>
      <main class="Site-content">
        <body class="Site">
          <div class="head_container">
          <div class="banner">Anwalt oder Anwältin? Hier&nbsp <a class="klicken_btn" href="anwalt_anmeldung.html">klicken.</a></div>
          <div class="header">
            <div class="logo"><a href="index.html"><img src="./Logo_AdvoNow_zugeschnitten.png" alt="Hier müsste das Logo sein." height="60px" width="300px"></img></a></div>
            <div class="header_btn">
              <div class="about"><a href="about.html"></a>ABOUT</div>
              <div class="services"><a href="services">SERVICES</a></div>
              <div class="contact"><a href="contact"></a>KONTAKT</div>
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
            <div class="AGB">AGB</div>
            <div class="Impressum">Impressum</div>
            <div class="Datenschutz">Datenschutz</div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
