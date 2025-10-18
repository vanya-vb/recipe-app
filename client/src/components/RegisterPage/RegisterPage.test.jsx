import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import RegisterPage from './RegisterPage';

describe('RegisterPage', () => {
    test('displays the inputs and the button', () => {
        render(
            <MemoryRouter>
                <RegisterPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Email address')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Repeat Password')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toBe('Sign Up');
    });
});