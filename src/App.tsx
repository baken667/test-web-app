// import { useLaunchParams } from "@telegram-apps/sdk-react"

function App() {
  // const lp = useLaunchParams()
  // @ts-ignore
  const webApp = window?.Telegram?.WebApp

  return (
    <>
      <pre>
        {JSON.stringify(webApp.initData, null, 2)}
      </pre>    
    </>
  )
}

export default App
