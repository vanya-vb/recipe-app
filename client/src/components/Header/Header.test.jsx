import { test, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import { UserContext } from '../../contexts/UserContext';

const mockGuestUser = {
    accessToken: null
};

const mockAuthUser = {
    accessToken: 'token'
};

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

    test('displays the guest navigation', () => {
        render(
            <BrowserRouter>
                <UserContext.Provider value={mockGuestUser}>
                    <Header />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const guestNav = ['Home', 'Recipes', 'Shopping List', 'Login', 'Register'];

        guestNav.forEach(navItem => {
            expect(screen.getByText(navItem)).toBeInTheDocument();
        });
    });

    test('displays the auth user navigation', () => {
        render(
            <BrowserRouter>
                <UserContext.Provider value={mockAuthUser}>
                    <Header />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const authNav = ['Home', 'Recipes', 'Add Recipe', 'Shopping List', 'AI Chef', 'Logout'];

        authNav.forEach(navItem => {
            expect(screen.getByText(navItem)).toBeInTheDocument();
        });
    });

    test('toggles the mobile menu when buttons are clicked', async () => {
        const user = userEvent.setup();
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        const hamburger = screen.getByRole('button', { name: 'Open main menu' });
        await user.click(hamburger);

        const menu = screen.getByRole('dialog');
        expect(menu).toBeVisible();

        const closeBtn = screen.getByRole('button', { name: 'Close menu' });
        await user.click(closeBtn);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
