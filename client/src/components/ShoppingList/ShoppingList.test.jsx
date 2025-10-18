import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('Shopping List', () => {
    test('displays the input and the button', () => {
        render(<ShoppingList/>);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Add product')).toBeInTheDocument();
    });
});