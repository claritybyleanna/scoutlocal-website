import { describe, expect, it } from "vitest";
import { buildWidgetEventPayload, filterEventsForWeek, getWeekRange } from "./scout-events.js";

describe("Scout website event week helpers", () => {
  it("builds a Sunday through next-Sunday range", () => {
    const range = getWeekRange(new Date("2026-06-24T12:00:00-05:00"));

    expect(range.start.toISOString()).toBe("2026-06-21T05:00:00.000Z");
    expect(range.end.toISOString()).toBe("2026-06-28T05:00:00.000Z");
  });

  it("keeps events that overlap the current Sunday-Saturday week", () => {
    const range = getWeekRange(new Date("2026-06-24T12:00:00-05:00"));
    const events = filterEventsForWeek([
      {
        id: "before",
        title: "Before",
        starts_at: "2026-06-20T20:00:00.000Z",
        ends_at: "2026-06-20T22:00:00.000Z",
      },
      {
        id: "overlap",
        title: "Overnight",
        starts_at: "2026-06-21T03:00:00.000Z",
        ends_at: "2026-06-21T07:00:00.000Z",
      },
      {
        id: "inside",
        title: "Library Day",
        starts_at: "2026-06-24T15:00:00.000Z",
        ends_at: "2026-06-24T17:00:00.000Z",
      },
      {
        id: "after",
        title: "Next Week",
        starts_at: "2026-06-28T15:00:00.000Z",
        ends_at: "2026-06-28T17:00:00.000Z",
      },
    ], range);

    expect(events.map((event) => event.id)).toEqual(["overlap", "inside"]);
  });
});

describe("Scout widget event submission payload", () => {
  it("converts the lightweight widget form into the backend event payload", () => {
    const payload = buildWidgetEventPayload({
      title: "Spouses coffee",
      hostedBy: "ACS",
      date: "2026-06-24",
      startTime: "10:00",
      locationName: "",
      address: "1591 Bell Richard Ave Bldg 920",
      category: "community",
      cost: "free",
      description: "Bring a mug.",
    });

    expect(payload).toEqual({
      title: "Spouses coffee",
      date: "2026-06-24",
      startTime: "10:00",
      endTime: "11:00",
      locationName: "",
      address: "1591 Bell Richard Ave Bldg 920",
      description: "Bring a mug.\n\nHosted by: ACS\nCategory: community\nCost: free",
      contact: "ACS",
      externalUrl: "",
    });
  });
});
