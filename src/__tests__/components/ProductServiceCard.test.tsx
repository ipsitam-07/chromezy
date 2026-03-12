import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductServiceCard from "@/components/product-engg/ProductServiceCard";
import { SERVICE_CARD_UI } from "@/utils/constants";

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
  svgSrc: "/services/mvp.svg",
  heading: "MVP",
  content: "We specialise in rapid MVP development.",
  bgColor: "#2F41A3",
};

describe("ProductServiceCard", () => {
  it("renders the heading", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(screen.getByText("MVP")).toBeInTheDocument();
  });

  it("renders the content description", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(
      screen.getByText("We specialise in rapid MVP development.")
    ).toBeInTheDocument();
  });

  it("renders the 'Our Services' badge", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(screen.getByText(SERVICE_CARD_UI.LABELS.BADGE)).toBeInTheDocument();
  });

  it("renders the CTA button with correct label", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(screen.getByText(SERVICE_CARD_UI.LABELS.BUTTON)).toBeInTheDocument();
  });

  it("button has correct aria-label referencing the heading", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(
      screen.getByRole("button", {
        name: `Talk to a product expert about ${baseProps.heading}`,
      })
    ).toBeInTheDocument();
  });

  it("applies the provided bgColor as inline style", () => {
    const { container } = render(<ProductServiceCard {...baseProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card.style.backgroundColor).toBe("rgb(47, 65, 163)");
  });

  it("falls back to DEFAULT_BG_COLOR when bgColor is not provided", () => {
    const { container } = render(
      <ProductServiceCard
        svgSrc={baseProps.svgSrc}
        heading={baseProps.heading}
        content={baseProps.content}
      />
    );
    const card = container.firstChild as HTMLElement;
    expect(card.style.backgroundColor).toBe("rgb(61, 0, 160)");
  });

  it("renders the service illustration image with correct alt text", () => {
    render(<ProductServiceCard {...baseProps} />);
    expect(
      screen.getByAltText(`${baseProps.heading} service illustration`)
    ).toBeInTheDocument();
  });
});
