import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from '@/components/footer';
import { describe, expect } from "vitest";

describe('Footer component', () => {
  it('Renders all titles correctly', () => {
    const { getByText } = render(<Footer />);
    
    expect(getByText('Guía sobre la plataforma de control de centros de distribución')).toBeInTheDocument();
    expect(getByText('Otros centros de distribución')).toBeInTheDocument();
    expect(getByText('Accesibilidad')).toBeInTheDocument();
    expect(getByText('Ayuda')).toBeInTheDocument();
    expect(getByText('Información sobre seguros')).toBeInTheDocument();
  });

  it('Renders copyright text correctly', () => {
    const { getByText } = render(<Footer />);
    
    expect(getByText('Copyright © 1999-2024 MercadoLibre S.R.L.')).toBeInTheDocument();
  });

  it('Renders address text correctly', () => {
    const { getByText } = render(<Footer />);
    
    expect(getByText('Ramon Falcon 6200, La Matanza, Gran Buenos Aires')).toBeInTheDocument();
  });
});
