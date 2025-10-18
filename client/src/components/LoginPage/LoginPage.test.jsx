import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('displays the inputs and the button', () => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Email address')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toBe('Sign In');
    });
});