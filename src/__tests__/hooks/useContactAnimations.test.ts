import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useContactAnimations } from "@/hooks/useContactAnimations";

describe("useContactAnimations", () => {
  const getMockRef = () => {
    const div = document.createElement("div");
    return { current: div } as React.RefObject<HTMLDivElement>;
  };

  beforeEach(() => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) =>
      setTimeout(cb, 0)
    );
    vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("returns all expected keys", () => {
    const mockRef = getMockRef();
    const { result } = renderHook(() => useContactAnimations(mockRef));

    const expectedKeys = [
      "cartoonScale",
      "cartoonY",
      "cartoonOpacity",
      "formY",
      "formOverflow",
      "envelopeY",
      "envelopeX",
      "envelopeScale",
      "envelopeOpacity",
      "blurFilter",
    ];

    expectedKeys.forEach((key) => {
      expect(result.current).toHaveProperty(key);
    });
  });

  it("returns MotionValues for animation properties", () => {
    const mockRef = getMockRef();
    const { result } = renderHook(() => useContactAnimations(mockRef));
    const motionValueKeys = [
      "cartoonScale",
      "cartoonY",
      "cartoonOpacity",
      "formY",
      "envelopeY",
      "envelopeX",
      "envelopeScale",
      "envelopeOpacity",
      "blurFilter",
    ] as const;

    motionValueKeys.forEach((key) => {
      expect(typeof result.current[key].get).toBe("function");
    });
  });

  it("handles formOverflow as a static string", () => {
    const { result } = renderHook(() => useContactAnimations(getMockRef()));
    expect(result.current.formOverflow).toBe("visible");

    const overflowAsRecord = result.current.formOverflow as unknown as Record<
      string,
      unknown
    >;
    expect(overflowAsRecord.get).toBeUndefined();

    expect(typeof result.current.formOverflow).toBe("string");
  });
});
