import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import { init } from './lib/init.ts'
import("eruda").then((lib) => lib.default.init()).catch(console.error);

const rootEl = document.getElementById('root')
const root = createRoot(rootEl!)

try {
  // init(true)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

} catch (e) {
  root.render(<>{JSON.stringify(e)}</>)
}
