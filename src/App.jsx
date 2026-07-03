import Counter from './components/Counter.jsx'

// App composes components only (per repo rulebook: Pages/App compose, they don't hold logic).
function App() {
  return (
    <main>
      <h1>Pulse Test</h1>
      <Counter />
    </main>
  )
}

export default App
