import { ThemeProvider } from "styled-components";
import lightTheme from "../styles/themes/light";

import { render as jestRender } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

type Options = {
  theme?: typeof lightTheme;
};

export const customRender = (
  component: JSX.Element,
  options: Options = { theme: lightTheme }
) => {
  return jestRender(
    <ThemeProvider theme={options.theme || lightTheme}>
      {component}
    </ThemeProvider>
  );
};

export * from "@testing-library/react";
export { customRender as render, userEvent };
