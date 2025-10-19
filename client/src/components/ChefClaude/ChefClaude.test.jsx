vi.mock('../../api/ai', () => ({
    getRecipeFromChefClaude: vi.fn().mockResolvedValue('Mocked recipe content'),
}));

import { test, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChefClaude from './ChefClaude';
import { getRecipeFromChefClaude } from '../../api/ai'

const ingredients = ['pasta', 'chicken', 'oregano', 'cream'];

async function addIngredients(user, ingredients) {
    const input = screen.getByRole('textbox');
    const addBtn = screen.getByRole('button', { name: 'Add ingredient' });

    for (let ingredient of ingredients) {
        await user.type(input, ingredient)
        await user.click(addBtn);
    }
};

describe('ChefClaude', () => {
    test('renders the input values in the list', async () => {
        // arrange
        const user = userEvent.setup();
        render(<ChefClaude />);
        const input = screen.getByRole('textbox');
        const addButton = screen.getByRole('button', { name: 'Add ingredient' });

        // act
        await user.clear(input);
        await user.type(input, 'bread');
        await userEvent.click(addButton);

        // assert
        expect(screen.getByText('bread')).toBeInTheDocument();
    });

    test('request a recipe button initially disabled', () => {
        render(<ChefClaude />);

        const getRecipeBtn = screen.getByRole('button', { name: 'Get a recipe' });

        expect(getRecipeBtn).toBeDisabled();
    });

    test('enables the request button when the list has more than 4 ingredients', async () => {
        // arrange
        const user = userEvent.setup();
        render(<ChefClaude />);
        const getRecipeBtn = screen.getByRole('button', { name: 'Get a recipe' });

        // act 
        await addIngredients(user, ingredients);

        // assert
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
        expect(getRecipeBtn).toBeEnabled();
    });

    test('integration test: calls getRecipeFromChefClaude when button clicked', async () => {
        const user = userEvent.setup();
        render(<ChefClaude />);
        const getRecipeBtn = screen.getByRole('button', { name: 'Get a recipe' });

        await addIngredients(user, ingredients);
        await user.click(getRecipeBtn);

        expect(getRecipeFromChefClaude).toHaveBeenCalledWith(ingredients);
    });
});