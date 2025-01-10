import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AgregarPedido from "./AgregarPedido";

const renderAgregarPedido = () => {
  render(<AgregarPedido />);
};

describe("agregar pedido", () => {
  it("should render the componente agregarPedido", () => {
    renderAgregarPedido();
    expect(screen.getByText(/Agregar Pedido/i)).toBeInTheDocument();
  });

  it('should render an input with placeholder "client Name"', () => {
    renderAgregarPedido();
    const input = screen.getByPlaceholderText("Client Name");
    expect(input).toBeInTheDocument();
  });

  it('should render a textarea with placeholder "Order Details"', () => {
    renderAgregarPedido();
    const textarea = screen.getByPlaceholderText("Order Details");
    expect(textarea).toBeInTheDocument();
  });

  it('should have a button with text "Submit"', () => {
    renderAgregarPedido();
    const button = screen.getByText(/Submit/i);
    expect(button).toBeInTheDocument();
  });

  //Commented code because this functionality is evaluated in the next test
  // it("should disable the button when the input is empty", () => {
  //   renderAgregarPedido();
  //   const input = screen.getByPlaceholderText("Client Name");
  //   const button = screen.getByText(/Submit/i);

  //   expect(button).toBeDisabled();

  //   fireEvent.change(input, { target: { value: "John Doe" } });
  //   expect(button).not.toBeDisabled();
  // });

  it("should enable the button only when both inputs have values", () => {
    renderAgregarPedido();
    const input = screen.getByPlaceholderText("Client Name");
    const textarea = screen.getByPlaceholderText("Order Details");
    const button = screen.getByText(/Submit/i);

    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(button).toBeDisabled();

    fireEvent.change(textarea, { target: { value: "Pizza" } });
    expect(button).toBeEnabled();
  });

  it("should disable the button after clicked on it", () => {
    renderAgregarPedido();
    const input = screen.getByPlaceholderText("Client Name");
    const textarea = screen.getByPlaceholderText("Order Details");
    const button = screen.getByText(/Submit/i);

    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(button).toBeDisabled();

    fireEvent.change(textarea, { target: { value: "Pizza" } });
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(button).toBeDisabled();
  });

  it("should re-enable the button after 2 seconds", async () => {
    renderAgregarPedido();
    const input = screen.getByPlaceholderText("Client Name");
    const textarea = screen.getByPlaceholderText("Order Details");
    const button = screen.getByText(/Submit/i);

    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.change(textarea, { target: { value: "Pizza" } });
    fireEvent.click(button);

    expect(button).toBeDisabled();

    await waitFor(
      () => {
        expect(button).not.toBeDisabled();
      },
      { timeout: 2500 }
    );
  });

  it("should show a confirmation message after submitting the form", async () => {
    renderAgregarPedido();
    const input = screen.getByPlaceholderText("Client Name");
    const textarea = screen.getByPlaceholderText("Order Details");
    const button = screen.getByText(/Submit/i);

    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.change(textarea, { target: { value: "Pizza" } });
    fireEvent.click(button);

    expect(screen.getByText("Order sent to kitchen")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          screen.queryByText("Order sent to kitchen")
        ).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
