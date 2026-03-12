import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useInnovativeAnimations } from "@/hooks/useInnovativeAnimations";
import { useProductAnimations } from "@/hooks/useProductAnimations";

describe("Scroll Animation Hooks", () => {
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

  describe("useInnovativeAnimations", () => {
    const expectedKeys = [
      "sphereY",
      "sphereX",
      "sphereScale",
      "sphereRotate",
      "sphereOpacity",
    ] as const;

    it("returns exactly the expected MotionValue keys", () => {
      const { result } = renderHook(() =>
        useInnovativeAnimations(getMockRef())
      );

      expect(Object.keys(result.current)).toHaveLength(expectedKeys.length);

      expectedKeys.forEach((key) => {
        expect(result.current).toHaveProperty(key);
        expect(typeof result.current[key].get).toBe("function");
      });
    });
  });

  describe("useProductAnimations", () => {
    const expectedKeys = [
      "yBall",
      "opacityBall",
      "scaleBall",
      "scaleBlur",
      "yContent",
    ] as const;

    it("returns exactly the expected MotionValue keys", () => {
      const { result } = renderHook(() => useProductAnimations(getMockRef()));

      expect(Object.keys(result.current)).toHaveLength(expectedKeys.length);

      expectedKeys.forEach((key) => {
        expect(result.current).toHaveProperty(key);
        expect(typeof result.current[key].get).toBe("function");
      });
    });
  });
});
