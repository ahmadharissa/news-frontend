import PageSwitch from "./pages/page_switch";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set body direction based on language
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <div className="App">
        <Router basename="/">
          <Provider store={Store}>
            <PageSwitch />
          </Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
