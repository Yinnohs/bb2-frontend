import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider resetCSS={true}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
