// __tests__/Explore.test.tsx
import { render, screen } from '@testing-library/react';
import Explore from '@/components/Explore'; // Adjust this path based on where your Explore component is located

describe('Explore Component', () => {
  test('renders the Explore section', () => {
    // Render the Explore component
    render(<Explore />);

    // Check if certain elements are in the document
    expect(screen.getByText(/Posinnove for Organizations/i)).toBeInTheDocument();
    expect(screen.getByText(/Achieve success by leveraging students' expertise to elevate your projects./i)).toBeInTheDocument();
    expect(screen.getByText(/Find the perfect student team to help implement your ideas./i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Propose Project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book Demo/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Student collaboration/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Talents/i)).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    render(<Explore />);
    // Check if the image has the correct alt text
    const image = screen.getByAltText('Student collaboration');
    expect(image).toHaveAttribute('src', '/python.png'); // Check if image source is correct
  });

  test('buttons should be clickable', () => {
    render(<Explore />);
    // Check if buttons are clickable by simulating a click event
    const proposeProjectButton = screen.getByRole('button', { name: /Propose Project/i });
    const bookDemoButton = screen.getByRole('button', { name: /Book Demo/i });

    // Simulate clicks
    proposeProjectButton.click();
    bookDemoButton.click();

    // Optionally, check if something happens after click (you can mock functions or check state updates)
    // This is a basic example and won't trigger actual navigation, but you could add that later with mocks
  });
});
