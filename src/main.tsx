import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { createRoot } from 'react-dom/client'

import Dashboard from './pages/dashboard/app'
import Calendar from './pages/calendar/page'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Dashboard />
                </ThemeProvider>
            } />

            <Route path="/c" element={
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Calendar />
                </ThemeProvider>
            } />
        </Routes>
    </BrowserRouter>
)
