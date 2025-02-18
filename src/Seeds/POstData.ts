import IMAGES from "../Assets/Images";
import { PostCardProps } from "../Components/Cards/PostCard";

const dummyPosts: PostCardProps[] = [
  {
    id: "9634269",
    userName: "Devon Lane",
    userProfilePic: IMAGES.randomUser1,
    createdAt: "30 mins ago",
    description:
      "Friday night plans: Dance floor, good vibes, and maybe a little karaoke if I’m brave enough. Who’s joining? 🎶💃",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1739216906055-ff4bc897c339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    ],
    likesCount: 2500,
    commentsCount: 500,
    repostCount: 245,
  },
  {
    id: "963426asswew9",
    userName: "Sophia Richards",
    userProfilePic: IMAGES.randomUser2,
    createdAt: "2 hours ago",
    description: "Had the best brunch today! 🥞🍓☕",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fHww",
    ],

    likesCount: 1200,
    commentsCount: 230,
    repostCount: 80,
  },
  {
    id: "963426jkgs213139",
    userName: "Liam Carter",
    userProfilePic: IMAGES.randomUser1,
    createdAt: "1 hour ago",
    description: "Sunsets and good company 🌅✨",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnR5fGVufDB8fDB8fHww",
    ],
    likesCount: 1800,
    commentsCount: 310,
    repostCount: 150,
  },
  {
    id: "963426kdjsf0909",
    userName: "Emma Johnson",
    userProfilePic: IMAGES.randomUser2,
    createdAt: "4 hours ago",
    description: "Exploring new coffee spots ☕💙",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fHww",
    ],

    likesCount: 900,
    commentsCount: 120,
    repostCount: 60,
  },
  {
    id: "9634269dfljlkyt546",
    userName: "James Anderson",
    userProfilePic: IMAGES.randomUser1,
    createdAt: "3 hours ago",
    description: "Game night with the squad 🎮🔥",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnR5fGVufDB8fDB8fHww",
    ],

    likesCount: 1400,
    commentsCount: 200,
    repostCount: 95,
  },
  {
    id: "9634269asjkbd213",
    userName: "Olivia Martinez",
    userProfilePic: IMAGES.randomUser2,
    createdAt: "5 hours ago",
    description: "New art piece finished! 🎨✨",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1739216906055-ff4bc897c339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    ],

    likesCount: 2200,
    commentsCount: 450,
    repostCount: 190,
  },
  {
    id: "9634269hlgk43523",
    userName: "Daniel Roberts",
    userProfilePic: IMAGES.randomUser1,
    createdAt: "6 hours ago",
    description: "Hiking to the top was worth it! 🏞️",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8fDA%3D",
    ],
    likesCount: 1700,
    commentsCount: 270,
    repostCount: 130,
  },
  {
    id: "963426967343435",
    userName: "Ava Thompson",
    userProfilePic: IMAGES.randomUser2,
    createdAt: "7 hours ago",
    description: "Best homemade pasta ever 🍝👩‍🍳",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8fDA%3D",
    ],

    likesCount: 1300,
    commentsCount: 180,
    repostCount: 85,
  },
  {
    id: "96342692133kjahs",
    userName: "William Scott",
    userProfilePic: IMAGES.randomUser1,
    createdAt: "8 hours ago",
    description: "Late night coding session 🚀💻",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fHww",
    ],
    likesCount: 2000,
    commentsCount: 350,
    repostCount: 160,
  },
  {
    id: "9634269dfkj9009586",
    userName: "Mia Perez",
    userProfilePic: IMAGES.randomUser2,
    createdAt: "9 hours ago",
    description: "Beach vibes all day! 🌊🏖️",
    videos: [],
    photos: [
      "https://images.unsplash.com/photo-1739216906055-ff4bc897c339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    ],

    likesCount: 2400,
    commentsCount: 490,
    repostCount: 210,
  },
];

export default dummyPosts;
