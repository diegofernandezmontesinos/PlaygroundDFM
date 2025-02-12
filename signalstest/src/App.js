import { useSignal } from "react-signals";

function App() {
  // Crear la señal reactiva
  const count = useSignal(0);

  // Incrementar la señal
  const increment = () => {
    count.set(count.value + 1);
  };

  return (
    <div>
      <p>{count.value}</p> {/* Mostrar el valor de la señal */}
      <button onClick={increment}>Increase</button>{" "}
      {/* Botón para incrementar */}
    </div>
  );
}

export default App;
