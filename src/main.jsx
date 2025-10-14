import { createRoot } from 'react-dom/client'
import '@/assets/css/index.css'
import App from './App.jsx'
import '@/mock/index.js'

createRoot(document.getElementById('root')).
render(<App />)
