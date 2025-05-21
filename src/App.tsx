import Calculator from './components/Calculator';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="text-center flex flex-col items-center">
        <Calculator />
      </main>
    </>
  );
};

export default App;
