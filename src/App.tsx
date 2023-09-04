import Header from './components/header/header';
import Main from './components/main/main';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
