import { describe, expect, it } from "vitest";
import {
  buildEventDetailViewModel,
  buildWidgetEventPayload,
  countEventsForDate,
  countEventsForWeek,
  filterEventsForWeek,
  getWeekRange,
} from "./scout-events.js";

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

  it("counts events for the selected Fort Polk day", () => {
    expect(countEventsForDate([
      { starts_at: "2026-06-24T15:00:00.000Z" },
      { starts_at: "2026-06-24T22:00:00.000Z" },
      { starts_at: "2026-06-25T01:00:00.000Z" },
    ], "2026-06-24")).toBe(3);
  });

  it("counts visible events for the Scout icon badge", () => {
    expect(countEventsForWeek([
      { id: "one" },
      { id: "two" },
      null,
    ])).toBe(2);
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
      submitterEmail: "helper@example.com",
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
      submitterEmail: "helper@example.com",
      submitterName: "",
      externalUrl: "",
    });
  });

  it("normalizes typed mobile-friendly date and time values", () => {
    const payload = buildWidgetEventPayload({
      title: "Outdoor movie night",
      hostedBy: "MWR",
      date: "06/24/2026",
      startTime: "7:30 PM",
      address: "Main Exchange lot",
    });

    expect(payload.date).toBe("2026-06-24");
    expect(payload.startTime).toBe("19:30");
    expect(payload.endTime).toBe("20:30");
  });
});

describe("Scout widget event details", () => {
  it("builds the detail panel content for a tappable event card", () => {
    const detail = buildEventDetailViewModel({
      title: "Story Time at Allen Memorial Library",
      starts_at: "2026-06-23T16:30:00.000Z",
      ends_at: "2026-06-23T17:30:00.000Z",
      contact: "Allen Memorial Library",
      location_name: "Allen Memorial Library",
      address: "7460 Colorado Ave Bldg 660",
      description: "Stories, songs, and an easy morning activity for younger kids.",
      external_url: "https://example.com/story-time",
      tags: ["kid-friendly", "free"],
    });

    expect(detail.title).toBe("Story Time at Allen Memorial Library");
    expect(detail.when).toBe("11:30 AM - 12:30 PM");
    expect(detail.hostedBy).toBe("Allen Memorial Library");
    expect(detail.locationName).toBe("Allen Memorial Library");
    expect(detail.address).toBe("7460 Colorado Ave Bldg 660");
    expect(detail.description).toEqual(["Stories, songs, and an easy morning activity for younger kids."]);
    expect(detail.externalUrl).toBe("https://example.com/story-time");
    expect(detail.tags).toEqual(["kid-friendly", "free"]);
  });
});
