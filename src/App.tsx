import { useLaunchParams } from "@telegram-apps/sdk-react"

function App() {
  const lp = useLaunchParams()

  return (
    <>
      <pre>
        {JSON.stringify(lp, null, 2)}
      </pre>    
    </>
  )
}

export default App
