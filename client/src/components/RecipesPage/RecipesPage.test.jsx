import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import RecipesPage from './RecipesPage';

describe('RecipesPage', () => {
    test('displays the title the filters', () => {
        render(
            <MemoryRouter>
                <RecipesPage />
            </MemoryRouter>
        );
        
        expect(screen.getByText('Recipes')).toBeInTheDocument();
        
        const filters = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];
        filters.forEach(filter => {
            expect(screen.getByText(filter)).toBeInTheDocument();
        });
    });
});