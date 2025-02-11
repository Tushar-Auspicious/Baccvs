import IMAGES from "../Assets/Images";

export type SlideType = {
  id: string;
  image: any;
  title: string;
  subtitle: string;
};

const OnBoardingSlides: SlideType[] = [
  {
    id: "1",
    image: IMAGES.slide1,
    title: "STRESS LESS.",
    subtitle: "Make mindfulness a daily habit and be kind to your mind.",
  },
  {
    id: "2",
    image: IMAGES.slide2,
    title: "RELAX MORE.",
    subtitle: "Unwind and find serenity in a guided meditation sessions",
  },
];

export default OnBoardingSlides;
