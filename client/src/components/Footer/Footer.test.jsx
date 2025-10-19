import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('displays links', () => {
        render(<Footer />);

        expect(screen.getAllByRole('link')).toHaveLength(3);
    });

    test('footer links have correct hrefs', () => {
        render(<Footer />);

        const links = screen.getAllByRole('link');
        const expectedHrefs = [
            "https://github.com/vanya-vb",
            "https://linkedin.com/in/vanya-b-9893851bb/",
            "https://vanya-vb.github.io/portfolio-page/"
        ];

        links.forEach((link, i) => {
            expect(link).toHaveAttribute('href', expectedHrefs[i]);
        });
    });
});