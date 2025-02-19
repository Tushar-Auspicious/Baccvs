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

const TicketBenefits = [
  { id: "1", label: "Entry to the event." },
  { id: "2", label: "Access to all general areas." },
  { id: "3", label: "VIP lounge access." },
  { id: "4", label: "Complimentary drink/snack." },
  { id: "5", label: "Photo opportunities and autographs." },
  { id: "6", label: "Get in before the crowds." },
  { id: "7", label: "Covers entry, food, drinks, and premium perks." },
  { id: "8", label: "Guarantees the best views and comfort." },
];

export { eventFilters, TicketBenefits };
