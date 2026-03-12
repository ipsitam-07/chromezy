import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TestimonialCards from "@/components/our-clients/TestimonialCards";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

const baseProps = {
  feedback: "They delivered an outstanding product on time.",
  name: "JANE DOE",
  designation: "CEO",
  company: "Acme Corp",
  starRating: "5/5",
  project: "SaaS Platform",
  country: "United States",
  brandLogo: "/brands/acme.png",
};

describe("TestimonialCards", () => {
  it("renders the feedback text", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(screen.getByText(baseProps.feedback)).toBeInTheDocument();
  });

  it("renders the reviewer name", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(screen.getByText(baseProps.name)).toBeInTheDocument();
  });

  it("renders designation and company together", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(
      screen.getByText(`${baseProps.designation}, ${baseProps.company}`)
    ).toBeInTheDocument();
  });

  it("renders star rating with the correct label", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(
      screen.getByText(`Star Rating – ${baseProps.starRating}`)
    ).toBeInTheDocument();
  });

  it("renders project with the correct label", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(
      screen.getByText(`Project – ${baseProps.project}`)
    ).toBeInTheDocument();
  });

  it("renders country with the correct label", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(
      screen.getByText(`Country – ${baseProps.country}`)
    ).toBeInTheDocument();
  });

  it("renders the brand logo with correct alt text", () => {
    render(<TestimonialCards {...baseProps} />);
    const logo = screen.getByAltText(`${baseProps.company} logo`);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", baseProps.brandLogo);
  });

  it("renders the quote icon", () => {
    render(<TestimonialCards {...baseProps} />);
    expect(screen.getByAltText("quote")).toBeInTheDocument();
  });
});
