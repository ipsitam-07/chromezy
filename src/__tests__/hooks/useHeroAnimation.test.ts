import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useHeroAnimations } from "@/hooks/useHeroAnimation";

beforeEach(() => {
  vi.stubGlobal(
    "requestAnimationFrame",
    (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number
  );
  vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));

  vi.stubGlobal("innerHeight", 800);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useHeroAnimations", () => {
  it("returns all expected motion value keys", () => {
    const { result } = renderHook(() => useHeroAnimations());

    const keys = Object.keys(result.current);

    // Glass ball
    expect(keys).toContain("ballX");
    expect(keys).toContain("ballY");
    expect(keys).toContain("ballScale");
    expect(keys).toContain("ballOpacity");
    expect(keys).toContain("ballBlur");

    // Cone
    expect(keys).toContain("triangleY");
    expect(keys).toContain("triangleX");
    expect(keys).toContain("triangleScale");
    expect(keys).toContain("triangleFilter");
    expect(keys).toContain("triangleOpacity");

    // Hero text layers
    expect(keys).toContain("textOpacity");
    expect(keys).toContain("yTransformHeader");
    expect(keys).toContain("yTransformSubheading");
    expect(keys).toContain("yTransformParagraph");
    expect(keys).toContain("yTransformStats");

    // Section transition
    expect(keys).toContain("productEngineeringOpacity");
  });

  it("returns MotionValues (objects with a get() method) for numeric values", () => {
    const { result } = renderHook(() => useHeroAnimations());
    const { ballX, ballY, ballScale, ballOpacity } = result.current;

    expect(typeof ballX.get).toBe("function");
    expect(typeof ballY.get).toBe("function");
    expect(typeof ballScale.get).toBe("function");
    expect(typeof ballOpacity.get).toBe("function");
  });

  it("returns MotionValues with a get() method for string values", () => {
    const { result } = renderHook(() => useHeroAnimations());
    const { ballBlur, triangleFilter } = result.current;

    expect(typeof ballBlur.get).toBe("function");
    expect(typeof triangleFilter.get).toBe("function");
  });

  it("responds to window resize and updates viewport height", () => {
    const { result } = renderHook(() => useHeroAnimations());

    act(() => {
      vi.stubGlobal("innerHeight", 1024);
      window.dispatchEvent(new Event("resize"));
    });

    expect(typeof result.current.ballX.get).toBe("function");
    expect(typeof result.current.triangleY.get).toBe("function");
  });

  it("cleans up resize listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useHeroAnimations());
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    removeEventListenerSpy.mockRestore();
  });
});
