// import { useLaunchParams } from "@telegram-apps/sdk-react"

import { useState } from "react";

function App() {
  // const lp = useLaunchParams()
  // @ts-ignore
  const webApp = window?.Telegram?.WebApp

  const [gyroscopeData, setGyroscopeData] = useState<{
    x: number | null,
    y: number | null,
    z: number | null
  }>({
    x: null,
    y: null,
    z: null
  })

  function updateGyroscopeData() {
    setGyroscopeData({
      x: webApp.Gyroscope.x,
      y: webApp.Gyroscope.y,
      z: webApp.Gyroscope.z
    })
  }

  
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

    setInterval(updateGyroscopeData, 500)
  }

  return (
    <>
      <h1>Telegram Web App</h1>
      <span>{webApp.platform}</span>
      <button onClick={() => console.log(webApp) }>console log webapp</button>
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
        <pre>isStarted: {webApp.Gyroscope.isStarted ? 'true' : 'false'}</pre>
        <pre>{JSON.stringify(gyroscopeData, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
