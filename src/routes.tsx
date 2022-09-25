import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { pagesContent } from './constants';

// FONT
import '@fontsource/jua/400.css';

// THEME
import { theme } from './theme';
import { Game } from './pages/Game';

export const AppRoutes = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Game />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
