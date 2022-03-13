import { ThemeProvider } from "styled-components";
import lightTheme from "../../styles/themes/light";
import { Header } from ".";
import { render, screen, fireEvent, userEvent } from "../../jest";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("Header component", () => {
  it("should renders correctly", () => {
    render(
      <Header
        toggleTheme={jest.fn()}
        setShowMenu={jest.fn()}
        showMenu={false}
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should toggle theme when user click on switch", () => {
    const toggleThemeMocked = jest.fn();

    render(
      <Header
        toggleTheme={toggleThemeMocked}
        setShowMenu={jest.fn()}
        showMenu={false}
      />
    );

    const switchBtn = screen.getByTestId("switch-btn");

    userEvent.click(switchBtn);

    expect(toggleThemeMocked).toHaveBeenCalled();
  });

  it("should open sidebar when user click on menu", () => {
    const toggleMenuMocked = jest.fn();

    render(
      <Header
        toggleTheme={jest.fn()}
        setShowMenu={toggleMenuMocked}
        showMenu={true}
      />
    );

    const mobileMenu = screen.getByTestId("mobile-menu");

    userEvent.click(mobileMenu);

    expect(toggleMenuMocked).toHaveBeenCalled();
  });
});
