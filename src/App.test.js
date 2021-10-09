import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("<App/>", () => {

  test('Renders Book Id', () => {
    render(<App />);
    const input_bookid = screen.getByTestId("txt_bookid");
    expect(input_bookid).toBeInTheDocument();
    expect(input_bookid).toHaveAttribute("type", "number");
  });

  test('Renders Book ISBN No', () => {
    render(<App />);
    const input_isbnno = screen.getByTestId("txt_isbnno");
    expect(input_isbnno).toBeInTheDocument();
    expect(input_isbnno).toHaveAttribute("type", "text");
  });

  test('Renders Book Publish Date', () => {
    render(<App />);
    const input_publishdate = screen.getByTestId("txt_publishdate");
    expect(input_publishdate).toBeInTheDocument();
    expect(input_publishdate).toHaveAttribute("type", "date");
  });

});


