import Home from "./home";
import logo1A from "./logo/logo1-tbg.png";
import Navbar from "./nav";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./footer";

const allImg = {
  rt31: require("./img/rt31.jpg"),
  rt10: require("./img/rt10.jpg"),
  rt12: require("./img/rt12.jpg"),
  rt1: require("./img/rt01.jpg"),
  rt2: require("./img/rt02.jpg"),
  rt4: require("./img/rt04.jpg"),
  rt5: require("./img/rt05.jpg"),
  rt6: require("./img/rt06.jpg"),
  rt7: require("./img/rt07.jpg"),
  rt8: require("./img/rt08.jpg"),
  rt9: require("./img/rt09.jpg"),
  rt11: require("./img/rt11.jpg"),
  rt14: require("./img/rt14.jpg"),
  rt16: require("./img/rt16.jpg"),
  rt19: require("./img/rt19.jpg"),
  rt21: require("./img/rt21.jpg"),
  rt22: require("./img/rt22.jpg"),
  rt23: require("./img/rt23.jpg"),
  rt25: require("./img/rt25.jpg"),
  rt26: require("./img/rt26.jpg"),
  rt28: require("./img/rt28.jpg"),
  rt30: require("./img/rt30.jpg"),
  rt32: require("./img/rt32.jpg"),
  rt33: require("./img/rt33.jpg"),
  rt34: require("./img/rt34.jpg"),
  rt35: require("./img/rt35.jpg"),
  rt36: require("./img/rt36.jpg"),
}
const allImg2 = {
  rt3: require("./img/rt03.jpg"),
  rt13: require("./img/rt13.jpg"),
  rt17: require("./img/rt17.jpg"),
  rt20: require("./img/rt20.jpg")
}
const copyPasteBtn = {
  copyBtn: require("./logo/copy-btn.png")
}
const socioLogo = {
  pf: require("./soc-logo/pumpfun.png"),
  dexs: require("./soc-logo/dexs.png"),
  dext: require("./soc-logo/dext.png"),
  ray: require("./soc-logo/ray.png"),
  tg: require("./soc-logo/tg.png"),
  tw: require("./soc-logo/twitter.png")
}

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar logo1={logo1A} />
            <div className="AllPage">
              <Switch>
                <Route exact path="*">
                  <Home 
                      logo1A={logo1A}
                      allImg={allImg} 
                      allImg2={allImg2} 
                      copyPasteBtn={copyPasteBtn}
                      socioLogo={socioLogo}
                  />
                </Route>
              </Switch>
            </div>
            <Footer />
      </div>
      </Router>
    );
}

export default App;
