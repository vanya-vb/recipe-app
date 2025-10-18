import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';

describe('Header', () => {
    test('displays the logo image', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        // expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img').src).toContain('logo.png');
    });

    test('displays the navigation', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const navigation = ['Home', 'Recipes', 'Shopping List', 'Login', 'Register'];

        navigation.forEach(navItem => {
            expect(screen.getByText(navItem)).toBeInTheDocument();
        });
    });
});
