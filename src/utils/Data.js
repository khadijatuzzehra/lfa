const CountryCode = ['+1', '+92', '+44', '+61'];
const Country = ['Pakistan', 'South Africa', 'Bangladesh'];
const City = [
  'Islamabad',
  'Lahore',
  'Karachi',
  'Cape Town',
  'Pretoria',
  'Dhaka',
];
const Gender = ['Male', 'Female', 'Prefer not to say'];
const Interests = [
  'Tech',
  'Artificial Intelligence',
  'Business',
  'Education',
  'Music',
  'Sports',
  'Business Development',
];
const Profession = [
  'Actor',
  'Accountant',
  'Air traffic controller',
  'Archiect',
  'Artist',
  'Attorney',
  'Barber',
  'Book keeper',
  'Builder',
];
const Education = [
  'Undergraduate',
  'Graduate',
  'Postgraduate',
  'none of the above',
];
const ImageOption = ['Edit Cover', 'Edit Profile'];
const OnBoarding = [
  {
    id: '1',
    imgName: 'OnBoarding1',
    svgName2: 'ProgressBar1',
    heading: 'Lorem Ipsum',
    text: "Unleashing Africa's Collective Ingenuity\nlorem ipsum consectetur adipiscing\nvoluptatem accusantium doloremque",
  },
  {
    id: '2',
    imgName: 'OnBoarding2',
    svgName2: 'ProgressBar2',
    heading: 'Lorem Ipsum',
    text: "Unleashing Africa's Collective Ingenuity\nlorem ipsum consectetur adipiscing\nvoluptatem accusantium doloremque",
  },
  {
    id: '3',
    imgName: 'OnBoarding3',
    svgName2: 'ProgressBar3',
    heading: 'Lorem Ipsum',
    text: "Unleashing Africa's Collective Ingenuity\nlorem ipsum consectetur adipiscing\nvoluptatem accusantium doloremque",
  },
];
const StoriesData = [
  {
    user_id: 1,
    user_image:
      'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
    user_name: 'Sarah Forest',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
      },
      {
        story_id: 2,
        story_image:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_1280.png',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Adam Smith',
    stories: [
      {
        story_id: 1,
        story_image: 'http://techslides.com/demos/sample-videos/small.mp4',
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Jake Paul',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
];

const PostsData = [
  {
    id: 1,
    user_id: 1,
    user_name: 'Sarah Faraway',
    user_image: 'ProfilePicture',
    verified: false,
    post_text: 'Lorem Ipsum!',
    images: ['Post1', 'Post2'],
    likes: 5,
    liked: false,
  },
  {
    id: 2,
    user_id: 2,
    user_name: 'Adam Smith',
    user_image: 'ProfilePicture2',
    verified: false,
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: ['Post4'],
    likes: 5,
    liked: false,
  },
  {
    id: 3,
    user_id: 2,
    user_name: 'Ashley Rave',
    user_image: 'OnBoarding1',
    verified: false,
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: ['Post2'],
    likes: 8,
    liked: false,
  },
  {
    id: 4,
    user_id: 2,
    user_name: 'Ashley Rave',
    user_image: 'OnBoarding1',
    verified: false,
    post_text: 'Lorem ipsum',
    images: ['Post3'],
    likes: 10,
    liked: false,
  },
];
const ProfileNavigation = [
  {
    id: 1,
    name: 'Personal Bio',
    image: 'PersonalBio',
    navigation: 'PersonalBio',
  },
  {
    id: 2,
    name: 'Experiences',
    image: 'Experiences',
    navigation: 'Experiences',
  },
  {
    id: 3,
    name: 'Education',
    image: 'Education',
    navigation: 'Education',
  },
  {
    id: 4,
    name: 'Projects',
    image: 'Projects',
    navigation: 'Projects',
  },
  {
    id: 5,
    name: 'Recommendations',
    image: 'Recommendations',
    navigation: 'Recommendations',
  },
  {
    id: 6,
    name: 'Language',
    image: 'Language',
    navigation: 'Language',
  },
];

const ProfileNavigation2 = [
  {
    id: 1,
    name: 'Contact Us',
    image: 'Contact',
    navigation: 'Contact',
  },
  {
    id: 2,
    name: 'Share',
    image: 'Share',
    navigation: 'Share',
  },
  {
    id: 3,
    name: 'Terms',
    image: 'Terms',
    navigation: 'Terms',
  },
  {
    id: 4,
    name: 'Privacy',
    image: 'Privacy',
    navigation: 'Privacy',
  },
  {
    id: 5,
    name: 'Sign Out',
    image: 'SignOut',
    navigation: 'SignOut',
  },
];
const Experience = [
  {
    id: 1,
    companyName: 'United Nations',
    years: '2017-2018',
    role: 'HR Manager | Trainee | Project Manager',
  },
  {
    id: 2,
    companyName: 'Unileiver Pakistan',
    years: '2014-2017',
    role: 'Program Manager',
  },
  {
    id: 3,
    companyName: 'Indus Motors',
    years: '2011-2013',
    role: 'Salels and Marketing Manager',
  },
];
const Educations = [
  {
    id: 1,
    instName: 'Institute of Space Technology',
    years: '2008-2011',
    role: 'Bs Materials Engineering',
  },
  {
    id: 2,
    instName: 'Imperial International',
    years: '2006-2008',
    role: 'A-Levels',
  },
  {
    id: 3,
    instName: 'Pak-Turk International School',
    years: '2004-2006',
    role: 'O-Levels',
  },
];
const Projects = [
  {
    id: 1,
    projectName: 'Seccuracy',
    role: 'Transit Processor',
    years: '2016-2017',
    description:
      'We realize that businesses require partners who understand the business operations and processes of the maritime security Industry.',
    skills: [
      'Problem Solving',
      'Project Management',
      'Distribution',
      'Organization',
    ],
  },
  {
    id: 2,
    projectName: 'Look for Qatar',
    role: 'Developer',
    years: '2013-2014',
    description:
      'We realize that businesses require partners who understand the business operations and processes of the maritime security Industry.',
    skills: ['Problem Solving', 'Project Management', 'Development'],
  },
];
const Users = [
  {
    id: 1,
    user_id: 2,
    user_name: 'Ashely Rave',
    user_image: 'userPhoto',
    designation: 'Senior Vice President',
    date: 'October 22, 2021',
    bio: 'I highly recommend the Overture Maps Foundation to developers looking to create cutting-edge mapping and navigation products.',
    followed: false,
  },
  {
    id: 2,
    user_id: 2,
    user_name: 'Adam Smith',
    user_image: 'ProfilePicture2',
    designation: 'Designer Teacher',
    date: 'March 22, 2022',
    bio: 'I highly recommend the Overture Maps Foundation to developers looking to create cutting-edge mapping and navigation products.',
    followed: false,
  },
  {
    id: 3,
    user_id: 2,
    user_name: 'Jake Paul',
    user_image: 'Post1',
    designation: 'Mobile App Developer',
    date: 'March 22, 2022',
    bio: 'I highly recommend the Overture Maps Foundation to developers looking to create cutting-edge mapping and navigation products.',
    followed: false,
  },
  {
    id: 4,
    user_id: 2,
    user_name: 'Sarah Faraway',
    user_image: 'userImage',
    designation: 'UI/UX Designer',
    date: 'October 22, 2021',
    bio: 'I highly recommend the Overture Maps Foundation to developers looking to create cutting-edge mapping and navigation products.',
    followed: false,
  },
];
export default {
  CountryCode,
  Country,
  City,
  Gender,
  Interests,
  Profession,
  Education,
  OnBoarding,
  StoriesData,
  PostsData,
  ProfileNavigation,
  ProfileNavigation2,
  Experience,
  Educations,
  Projects,
  Users,
  ImageOption,
};
