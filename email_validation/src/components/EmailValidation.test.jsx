import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailValidation from "./EmailValidation";

const renderEmailValidationComponent = () => {
  render(<EmailValidation />);
};

describe("Component EmailValidation", () => {
  // it('should render the component',() => {
  //     renderEmailValidationComponent()
  //     expect(screen.getByText(/Email Validation/i)).toBeInTheDocument();
  // })

  it("should have an email input", () => {
    renderEmailValidationComponent();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
  });

  it("should have a button to submit but it have to be disabled until an email is validated", () => {
    renderEmailValidationComponent();
    const input = screen.getByPlaceholderText("email");
    const button = screen.getByText(/submit/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(button).not.toBeDisabled();
  });

  it("should show a message if the email is not valid", () => {
    renderEmailValidationComponent();
    const input = screen.getByPlaceholderText("email");
    const button = screen.getByText(/submit/i);
    fireEvent.change(input, { target: { value: "cualquiercosa" } });
    expect(button).toBeDisabled();
    expect(screen.getByText("Email is not valid")).toBeInTheDocument();
  });

  it("should remove the error message if the user write a valid email", async () => {
    renderEmailValidationComponent();
    const input = screen.getByLabelText(/email/i);

    fireEvent.change(input, { target: { value: "cualquiercosa" } });

    await userEvent.type(input, "Email is not valid");
    expect(screen.getByText("Email is not valid")).toBeInTheDocument();

    await userEvent.clear(input);
    await userEvent.type(input, "dfm@email.com");
    expect(screen.queryByText("Email is not valid")).not.toBeInTheDocument();
  });
});
