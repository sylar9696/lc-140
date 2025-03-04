import { CounterProvider } from "./context/CounterContext"
import CounterDisplay from "./components/CounterDisplay"
import CounterButton from "./components/CounterButton"

function App() {

  return (
    <>
     <CounterProvider>
        {/* //componenti children */}
        <CounterDisplay/>
        <CounterButton/>

     </CounterProvider>
    </>
  )
}

export default App
