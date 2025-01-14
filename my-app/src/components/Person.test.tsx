import { screen, render } from "@testing-library/react";
import Person from "./Person.tsx";

describe("component Person", () => {
  it("should render the component Person", () => {
    render(<Person />);
    expect(screen.getByText("Person")).toBeInTheDocument();
  });
});
