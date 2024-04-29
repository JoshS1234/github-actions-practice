import App from "./App";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render app", () => {
  //arrange
  render(<App />);

  //act
  const countButton = screen.getByRole("button");

  //assert
  expect(countButton).toBeInTheDocument();
});

it("should increase count by 1 when button pressed", async () => {
  //arrange
  render(<App />);

  //act
  const countButton = screen.getByRole("button");
  expect(countButton.textContent).toContain("0");
  await userEvent.click(countButton);

  //assert
  expect(countButton.textContent).toContain("1");
});

// it("deliberate fail", async () => {
//   //arrange
//   render(<App />);

//   //act
//   const countButton = screen.getByRole("button");
//   expect(countButton.textContent).toContain("blah");
// });
