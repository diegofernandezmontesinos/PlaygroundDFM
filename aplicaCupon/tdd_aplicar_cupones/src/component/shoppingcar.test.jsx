import { screen, render, fireEvent } from "@testing-library/react";
import ShoppingCar from "./shoppingcar";

describe("ShoppingCar", () => {
  it("should render the shopping car", () => {
    render(<ShoppingCar />);
    expect(screen.getByText("Shopping Car")).toBeInTheDocument();
  });

  it("should show an input to enter a number as car", () => {
    render(<ShoppingCar />);
    expect(screen.getByPlaceholderText("Enter a number")).toBeInTheDocument();
    expect(screen.getByText("Add number")).toBeInTheDocument();
  });

  it("should show an input to enter a cupon", () => {
    render(<ShoppingCar />);
    expect(screen.getByPlaceholderText("Enter a cupon")).toBeInTheDocument();
    expect(screen.getByText("Add a cupon")).toBeInTheDocument();
  });

  it("should call a function after click on add cupon", () => {
    const mockAddCoupon = jest.fn();
    render(<ShoppingCar onAddCoupon={mockAddCoupon} />);
    
    fireEvent.click(screen.getByText("Add a cupon"));

    expect(mockAddCoupon).toHaveBeenCalledTimes(1);
  });

  it('should allow adding numbers and update the total', () => {
    render(<ShoppingCar />);
    const input = screen.getByPlaceholderText('Enter a number');
    const button = screen.getByText('Add number');
    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "20" } });
    fireEvent.click(button);

    expect(screen.getByText(/Total: €30.00/)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(2);
  })
});
