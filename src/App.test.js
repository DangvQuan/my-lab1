import { render, screen } from "@testing-library/react";
import App from "./App";
import models from "./modelData/models";
import formatDateTime from "./lib/formatDateTime";

test("the side bar lists every user as a link to that user's details", () => {
  render(<App />);

  const users = models.userListModel();

  users.forEach((user) => {
    const links = screen.getAllByRole("link", {
      name: new RegExp(`${user.first_name} ${user.last_name}`),
    });
    expect(links[0]).toHaveAttribute("href", `/users/${user._id}`);
  });
});

test("the top bar shows the author's name and what the content region shows", () => {
  render(<App />);

  expect(screen.getByText("Nguyễn Văn A")).toBeInTheDocument();
  expect(screen.getByText("Photo Share")).toBeInTheDocument();
});

describe("formatDateTime", () => {
  test("formats a model date as a readable day-first string", () => {
    expect(formatDateTime("2012-08-30 10:44:23")).toBe("30/08/2012 10:44");
  });

  test("returns an empty string for an empty value", () => {
    expect(formatDateTime("")).toBe("");
  });

  test("leaves an unparseable value alone instead of showing Invalid Date", () => {
    expect(formatDateTime("not a date")).toBe("not a date");
  });
});