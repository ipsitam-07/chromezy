import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "@/app/error";
import NotFound from "@/app/not-found";
import { ERROR_PAGE, NOT_FOUND_PAGE } from "@/utils/constants";

// Mock next/link for NotFound
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

//ErrorPage

describe("ErrorPage", () => {
  const mockReset = vi.fn();
  const mockError = new Error("Test error");

  it("renders the main error heading", () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(
      screen.getByText(ERROR_PAGE.SOMETHING_WENT_WRONG)
    ).toBeInTheDocument();
  });

  it("renders the error description", () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(screen.getByText(ERROR_PAGE.ERROR_OCCURRED)).toBeInTheDocument();
  });

  it("renders the try again button", () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(
      screen.getByRole("button", { name: ERROR_PAGE.TRY_AGAIN })
    ).toBeInTheDocument();
  });

  it("calls reset() when the try again button is clicked", async () => {
    const user = userEvent.setup();
    render(<ErrorPage error={mockError} reset={mockReset} />);

    await user.click(
      screen.getByRole("button", { name: ERROR_PAGE.TRY_AGAIN })
    );

    expect(mockReset).toHaveBeenCalledOnce();
  });

  it("reset is only called once per click", async () => {
    const user = userEvent.setup();
    const resetSpy = vi.fn();
    render(<ErrorPage error={mockError} reset={resetSpy} />);

    await user.click(
      screen.getByRole("button", { name: ERROR_PAGE.TRY_AGAIN })
    );

    expect(resetSpy).toHaveBeenCalledTimes(1);
  });
});

//NotFound
describe("NotFound", () => {
  it("renders the 404 status code", () => {
    render(<NotFound />);
    expect(screen.getByText(NOT_FOUND_PAGE.STATUS_CODE)).toBeInTheDocument();
  });

  it("renders the page not found heading", () => {
    render(<NotFound />);
    expect(screen.getByText(NOT_FOUND_PAGE.NOT_FOUND)).toBeInTheDocument();
  });

  it("renders the descriptive message", () => {
    render(<NotFound />);
    expect(screen.getByText(NOT_FOUND_PAGE.DOES_NOT_EXIST)).toBeInTheDocument();
  });

  it("renders a link back to home", () => {
    render(<NotFound />);
    const link = screen.getByRole("link", {
      name: NOT_FOUND_PAGE.BACK_TO_HOME,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
