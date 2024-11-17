// import { useLaunchParams } from "@telegram-apps/sdk-react"

function App() {
  // const lp = useLaunchParams()
  // @ts-ignore
  const webApp = window?.Telegram?.WebApp

  
  function fullscreen() {
    webApp.requestFullscreen();
  }

  function homescreen() {
    webApp.addToHomeScreen();
  }

  console.log(webApp)

  return (
    <>
      <pre style={{ color: "var(--tg-theme-text-color)"}}>
        {JSON.stringify(webApp.initData, null, 2)}
      </pre>    
      <button onClick={fullscreen}>FULLSCREEN</button>
      <button onClick={homescreen}>homescreen</button>
    </>
  )
}

export default App
