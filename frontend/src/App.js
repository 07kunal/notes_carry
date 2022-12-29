import RouteList from "./routes/RouteList";
import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {
  return (

    <div className="mainDiv">
      <section id="header">
        <Header />

      </section>
      <div className="subDiv" >
        <RouteList />
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>

  );
}

export default App;
