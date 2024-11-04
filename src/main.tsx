import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import Dashboard from './pages/dashboard/app'
import Calendar from './pages/calendar/page'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <Dashboard />
            } />

            <Route path="/c" element={
                <Calendar />
            } />
        </Routes>
    </BrowserRouter>
)
