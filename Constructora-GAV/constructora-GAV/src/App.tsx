import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainInfo from './pages/MainInfo'; // Asegúrate de tener la ruta correcta hacia MainInfo.tsx
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal para redirigir a la pantalla informativa */}
        <Route path="/" element={<MainInfo />} />
        {/* Aquí puedes agregar más rutas si tienes otras páginas */}
      </Routes>
    </Router>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
