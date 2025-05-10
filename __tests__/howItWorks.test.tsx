import { render, screen } from '@testing-library/react';
import HowItWorks from '@/components/HowItWorks'; // Adjust path accordingly

describe('HowItWorks Component', () => {
  test('renders images with correct alt text', () => {
    render(<HowItWorks />);

    // Check the first image
    const image1 = screen.getByAltText('Tell Us Your Needs');
    expect(image1).toHaveAttribute(
      'src',
      expect.stringContaining('/_next/image?url=%2Fimages%2FRectangle4.png')
    );

    // Check the second image
    const image2 = screen.getByAltText('We Match You with Talent');
    expect(image2).toHaveAttribute(
      'src',
      expect.stringContaining('/_next/image?url=%2Fimages%2FRectangle5.png')
    );

    // Check the third image
    const image3 = screen.getByAltText('Get Your Solution');
    expect(image3).toHaveAttribute(
      'src',
      expect.stringContaining('/_next/image?url=%2Fimages%2FRectangle6.png')
    );
  });
});
