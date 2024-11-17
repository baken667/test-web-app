// import { useLaunchParams } from "@telegram-apps/sdk-react"

import { useState } from "react";

function App() {
  // const lp = useLaunchParams()
  // @ts-ignore
  const webApp = window?.Telegram?.WebApp

  console.log(webApp)

  
  function fullscreen() {
    webApp.requestFullscreen();
  }

  function homescreen() {
    webApp.addToHomeScreen();
  }

  const [style, setStyle] = useState<'light'|'medium'|'heavy'|'rigid'|'soft'>('light')
  const [notStyle, setNotStyle] = useState<'error'|'success'|'warning'>('error')

  function impactOccurred() {
    webApp.HapticFeedback.impactOccurred(style)
  }

  function notification() {
    webApp.HapticFeedback.notificationOccurred(notStyle)
  }

  function startGyro() {
    webApp.Gyroscope.start({
      refresh_rate: 500
    })
  }

  return (
    <>
    <span>{webApp.version}</span>
      <pre style={{ color: "var(--tg-theme-text-color)"}}>
        {JSON.stringify(webApp.initData, null, 2)}
      </pre>    
      <button onClick={fullscreen}>FULLSCREEN</button>
      <button onClick={homescreen}>homescreen</button>
      <div>
        <h3>Haptic feedback</h3>
        <div>
        <select onChange={(e) => setStyle(e.target.value as any)} value={style}>
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="heavy">heavy</option>
        <option value="rigid">rigid</option>
        <option value="soft">soft</option>
      </select>
      <button onClick={impactOccurred}>impactOccurred</button>
        </div>
        <div>
        <select onChange={(e) => setNotStyle(e.target.value as any)} value={notStyle}>
        <option value="error">error</option>
        <option value="success">success</option>
        <option value="warning">warning</option>  
      </select>
      <button onClick={notification}>notification</button>
        </div>
        <h3>Gyroscope</h3>
        <button onClick={startGyro}>start</button>
        <pre>{JSON.stringify(webApp.Gyroscope, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
