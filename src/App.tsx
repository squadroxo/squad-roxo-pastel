import styles from "./app.module.scss";
import ContainerRoxoPastel from "./components/ContainerRoxoPastel";
import ContainerSobre from "./components/ContainerSobre";
import Footer from "./components/Footer";
import SquadSection from './components/SquadSection';

function App() {

  return (
    <div className={styles.container}>
      <ContainerRoxoPastel/>
      <ContainerSobre/>
      <SquadSection />
      <Footer />
    </div>
  )
}

export default App
