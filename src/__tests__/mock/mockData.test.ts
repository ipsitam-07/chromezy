/**
 * Tests that mock data arrays have the correct shape and required fields.
 */

import { describe, it, expect } from "vitest";
import {
  SERVICE_CARD_CONTENT,
  TESTIMONIALS,
  STORIES,
  INSIGHTS,
  CATEGORIES,
  NAV_ITEMS,
  STATS_DATA,
} from "@/mock";

//SERVICE_CARD_CONTENT

describe("SERVICE_CARD_CONTENT", () => {
  it("has exactly 4 service cards", () => {
    expect(SERVICE_CARD_CONTENT).toHaveLength(4);
  });

  it("every card has required string fields", () => {
    for (const card of SERVICE_CARD_CONTENT) {
      expect(typeof card.key).toBe("string");
      expect(typeof card.svgSrc).toBe("string");
      expect(typeof card.heading).toBe("string");
      expect(typeof card.content).toBe("string");
      expect(typeof card.bgColor).toBe("string");
    }
  });

  it("every card key is unique", () => {
    const keys = SERVICE_CARD_CONTENT.map((c) => c.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("every svgSrc starts with /services/", () => {
    for (const card of SERVICE_CARD_CONTENT) {
      expect(card.svgSrc).toMatch(/^\/services\//);
    }
  });

  it("every bgColor is a valid hex color", () => {
    for (const card of SERVICE_CARD_CONTENT) {
      expect(card.bgColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });
});

//TESTIMONIALS

describe("TESTIMONIALS", () => {
  it("has at least one testimonial", () => {
    expect(TESTIMONIALS.length).toBeGreaterThan(0);
  });

  it("every testimonial has required string fields", () => {
    for (const t of TESTIMONIALS) {
      expect(typeof t.key).toBe("string");
      expect(typeof t.feedback).toBe("string");
      expect(typeof t.name).toBe("string");
      expect(typeof t.designation).toBe("string");
      expect(typeof t.company).toBe("string");
      expect(typeof t.starRating).toBe("string");
      expect(typeof t.project).toBe("string");
      expect(typeof t.country).toBe("string");
      expect(typeof t.brandLogo).toBe("string");
    }
  });

  it("every testimonial key is unique", () => {
    const keys = TESTIMONIALS.map((t) => t.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("no testimonial has empty feedback", () => {
    for (const t of TESTIMONIALS) {
      expect(t.feedback.trim().length).toBeGreaterThan(0);
    }
  });
});

//SUCCESS STORIES

describe("STORIES", () => {
  it("has exactly 5 stories", () => {
    expect(STORIES).toHaveLength(5);
  });

  it("every story has required fields with correct types", () => {
    for (const s of STORIES) {
      expect(typeof s.id).toBe("number");
      expect(typeof s.image).toBe("string");
      expect(typeof s.title).toBe("string");
      expect(typeof s.subtitle).toBe("string");
      expect(typeof s.label).toBe("string");
    }
  });

  it("story ids are unique", () => {
    const ids = STORIES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every image path starts with /cards/", () => {
    for (const s of STORIES) {
      expect(s.image).toMatch(/^\/cards\//);
    }
  });
});

//INSIGHTS

describe("INSIGHTS", () => {
  it("has exactly 3 insights", () => {
    expect(INSIGHTS).toHaveLength(3);
  });

  it("every insight has required fields", () => {
    for (const i of INSIGHTS) {
      expect(typeof i.key).toBe("number");
      expect(typeof i.imgSrc).toBe("string");
      expect(typeof i.heading).toBe("string");
      expect(typeof i.text).toBe("string");
    }
  });

  it("insight keys are unique", () => {
    const keys = INSIGHTS.map((i) => i.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

//CATEGORIES

describe("CATEGORIES", () => {
  it("has exactly 5 tech categories", () => {
    expect(CATEGORIES).toHaveLength(5);
  });

  it("every category has an id, title, and non-empty items array", () => {
    for (const cat of CATEGORIES) {
      expect(typeof cat.id).toBe("string");
      expect(typeof cat.title).toBe("string");
      expect(Array.isArray(cat.items)).toBe(true);
      expect(cat.items.length).toBeGreaterThan(0);
    }
  });

  it("category ids follow zero-padded format (01, 02, ...)", () => {
    for (const cat of CATEGORIES) {
      expect(cat.id).toMatch(/^\d{2}$/);
    }
  });

  it("all items in every category are non-empty strings", () => {
    for (const cat of CATEGORIES) {
      for (const item of cat.items) {
        expect(typeof item).toBe("string");
        expect(item.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

//NAV ITEMS
describe("NAV_ITEMS", () => {
  it("has at least one nav item", () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
  });

  it("every nav item has id, label, and target", () => {
    for (const item of NAV_ITEMS) {
      expect(typeof item.id).toBe("string");
      expect(typeof item.label).toBe("string");
      expect(typeof item.target).toBe("string");
    }
  });

  it("nav item ids are unique", () => {
    const ids = NAV_ITEMS.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

//STATS DATA

describe("STATS_DATA", () => {
  it("has exactly 4 stats", () => {
    expect(STATS_DATA).toHaveLength(4);
  });

  it("every stat has a non-empty value and label", () => {
    for (const stat of STATS_DATA) {
      expect(typeof stat.value).toBe("string");
      expect(typeof stat.label).toBe("string");
      expect(stat.value.trim().length).toBeGreaterThan(0);
      expect(stat.label.trim().length).toBeGreaterThan(0);
    }
  });
});
