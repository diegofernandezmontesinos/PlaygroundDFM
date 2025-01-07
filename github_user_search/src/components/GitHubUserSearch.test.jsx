/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { GitHubUserSearch } from "./GitHubUserSearch";

describe("GitHubUserSearch", () => {
  it("should render correctly", () => {
    render(<GitHubUserSearch />);
    expect(screen.getByText("GitHub User Search")).toBeInTheDocument();
  });

  it("should render an input with a button", () => {
    render(<GitHubUserSearch />);
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should fetch and display users when searching", async () => {
    //mock of the API response
    const mockUsers = [
      {
        login: "user1",
        avatar_url: "https://via.placeholder.com/150",
        html_url: "https://github.com/user1",
      },
      {
        login: "user2",
        avatar_url: "https://via.placeholder.com/150",
        html_url: "https://github.com/user2",
      },
    ];

    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () => Promise.resolve(mockUsers),
      });
    });

    render(<GitHubUserSearch />);

    //shoot an event

    fireEvent.change(screen.getByPlaceholderText("Enter username"), {
      target: { value: "user" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    await waitFor(() => {
      expect(screen.getByText("user1")).toBeInTheDocument();
      expect(screen.getByText("user2")).toBeInTheDocument();
    });

    //to check if we call the correct endpoint
    expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/search/users?q=user');
  });
});
