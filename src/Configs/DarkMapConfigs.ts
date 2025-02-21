import { MapStyleElement } from "react-native-maps";
import COLORS from "../Utilities/Colors";

export const darkMapStyle: MapStyleElement[] = [
  // Set the base geometry color (e.g., background) to a very dark gray/black to match dark mode
  { elementType: "geometry", stylers: [{ color: "#1A1A1A" }] },

  // Hide all labels across the map to declutter and maintain a clean dark mode appearance
  { elementType: "labels", stylers: [{ visibility: "off" }] },

  // Style the landscape (e.g., land areas) geometry to match the dark background for consistency in dark mode
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#1A1A1A" }],
  },

  // Hide administrative boundaries (e.g., borders, districts) to simplify the map in dark mode
  { featureType: "administrative", stylers: [{ visibility: "off" }] },

  // Hide points of interest (e.g., businesses, landmarks) to reduce clutter in dark mode
  { featureType: "poi", stylers: [{ visibility: "off" }] },

  // Hide road labels to maintain a minimalist design in dark mode, focusing on road geometry
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },

  // Show transit features (e.g., bus stops, train stations) to keep them visible for navigation in dark mode
  { featureType: "transit", stylers: [{ visibility: "on" }] },

  // Style water bodies (e.g., rivers, lakes, oceans) with a dark blue color for a natural look in dark mode
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#1E3A5F" }],
  },

  // Style highway roads with a specific dark pink color (from COLORS.blackPink) for visibility in dark mode
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: COLORS.blackPink }],
  },

  // Style arterial roads (secondary roads) with a dark gray color for distinction in dark mode
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#414651" }],
  },
];
