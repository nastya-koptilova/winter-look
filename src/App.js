import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { MainSection } from "./components/MainSection/MainSection";
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
    <Header/>
    <Hero/>
    <MainSection/>
    </div>
  );
}

export default App;
