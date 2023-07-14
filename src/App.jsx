import { Feeds, Home, Navbar, Popup } from "./components";


function App() {
  return (
    <>
    <Navbar />
    <section>
      <Home />
    </section>
    <section>
      <Feeds />
    </section>
    <section>
      <Popup />
    </section>
    </>
  );
}

export default App;
