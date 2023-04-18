import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
    <Header/>
    <Hero/>
    <About/>
    </div>
  );
}

export default App;
