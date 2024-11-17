// import { useLaunchParams } from "@telegram-apps/sdk-react"

import { useState } from "react";

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

  const [style, setStyle] = useState<'light'|'medium'|'heavy'|'rigid'|'soft'>('light')

  function impactOccurred() {
    webApp.impactOccurred(style)
  }

  return (
    <>
    <span>{webApp.version}</span>
      <pre style={{ color: "var(--tg-theme-text-color)"}}>
        {JSON.stringify(webApp.initData, null, 2)}
      </pre>    
      <button onClick={fullscreen}>FULLSCREEN</button>
      <button onClick={homescreen}>homescreen</button>
      <select onChange={(e) => setStyle(e.target.value as any)} value={style}>
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="heavy">heavy</option>
        <option value="rigid">rigid</option>
        <option value="soft">soft</option>
      </select>
      <button onClick={impactOccurred}>impactOccurred</button>
    </>
  )
}

export default App
