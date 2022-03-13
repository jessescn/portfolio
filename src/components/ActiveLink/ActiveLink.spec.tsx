import { useRouter } from "next/router";
import { ActiveLink } from ".";
import { mocked } from "ts-jest/utils";
import { render, screen } from "../../jest";

jest.mock("next/router");

describe("ActiveLink component", () => {
  it("should renders correctly", () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/",
    } as any);

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should have active class when asPath equals to href", () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/",
    } as any);

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });

  it("should not have active class when asPath different to href", () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/fakePath",
    } as any);

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).not.toHaveClass("active");
  });
});
