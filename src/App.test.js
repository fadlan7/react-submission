import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";
import Form from "./views/Form";
import Redux from "./views/redux";
import LiftingState from "./views/lifting-state";
import Home from "./views/Home";
import ListKeys from './views/list-key';

// test("renders learn react", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders learn react", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("object equality", () => {
  const iniObject = render(<ListKeys/>);
  iniObject["kedua"] = 2;
  expect(iniObject).toEqual({
    pertama: 1,
    kedua: 2,
  });
});
