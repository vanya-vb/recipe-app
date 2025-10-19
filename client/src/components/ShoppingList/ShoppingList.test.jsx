import { test, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import ShoppingList from './ShoppingList';

describe('Shopping List', () => {
    test('displays the input and the button', () => {
        render(<ShoppingList/>);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Add product')).toBeInTheDocument();
    });

    test('renders the input values in the list', async () => {
        // arrange
        const user = userEvent.setup();
        render(<ShoppingList/>);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        // act
        await user.clear(input);
        await user.type(input, 'bread');
        await userEvent.click(button);

        // assert
        expect(screen.getByText('bread')).toBeInTheDocument();
    });
});