import Calculator from './components/Calculator';

const App = () => {
  return (
    <main className="grid place-items-center h-screen text-center">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl text-pink-700 font-mono font-bold uppercase">
          🔢 Simple React Calculator
        </h1>
        <p className="text-xl font-sans text-lime-800 p-4">
          A simple calculator built with React, TypeScript, and Tailwind CSS.
        </p>
      </section>
      <Calculator />
    </main>
  );
};

export default App;
