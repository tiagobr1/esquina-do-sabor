import { createRoot } from 'react-dom/client'
import App from './pages/App'
import LoginPage from './pages/login'
import { browser } from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LoginPage />
    </BrowserRouter>
)  