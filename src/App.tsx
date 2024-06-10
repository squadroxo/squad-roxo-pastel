import styles from "./app.module.scss";
import Footer from "./components/Footer";
import SquadSection from './components/SquadSection';

function App() {

  return (
    <div className={styles.container}>
      <SquadSection />
      <Footer />
    </div>
  )
}

export default App
