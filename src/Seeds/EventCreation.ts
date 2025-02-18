export type FilterCategory = "musicTypes" | "eventTypes" | "venueTypes";

type EventFilter = {
  title: string;
  maxSelection: number;
  options: string[];
};

const eventFilters: Record<FilterCategory, EventFilter> = {
  musicTypes: {
    title: "Music type",
    maxSelection: 4,
    options: [
      "Disco/Funk/Soul",
      "EDM/Dance music",
      "Hip-hop/R&B",
      "Commercial",
      "Latin/Reggaeton",
      "House",
      "Tech-House",
      "70s",
      "Pop/Rock",
      "Underground",
    ],
  },
  eventTypes: {
    title: "Event type",
    maxSelection: 4,
    options: [
      "Pregame",
      "Afterparty",
      "Party",
      "Concert",
      "Festival",
      "Raves",
      "Nightclubs",
      "Themed night",
      "VIP Events",
    ],
  },
  venueTypes: {
    title: "Venue type",
    maxSelection: 4,
    options: [
      "Nightclub",
      "Bar",
      "Rooftop",
      "Lounge",
      "Restaurant",
      "House",
      "Apartment",
      "Outdoor",
      "Warehouse",
    ],
  },
};

export { eventFilters };
