import styles from "./app.module.scss";
import ContainerRoxoPastel from "./components/ContainerRoxoPastel";
import ContainerSobre from "./components/ContainerSobre";
import Footer from "./components/Footer";
import SquadSection from './components/SquadSection';
import dentesWallpaper from "../public/wallpaper.png";

function App() {
  return (
    <div className={styles.container}>
      <ContainerRoxoPastel/>
      <ContainerSobre/>
      <img src={dentesWallpaper} alt="Wallpaper de dentes" className={styles.foto}/>
      <SquadSection />
      <Footer />
    </div>
  )
}

export default App
