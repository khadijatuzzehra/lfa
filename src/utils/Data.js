const CountryCode = ['+1', '+91', '+44'];
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
  'Business',
  'Educational',
  'Music',
  'Sports',
  'Art',
  'Travel',
  'Cooking',
  'Reading',
  'Gaming',
  'Data Science',
  'Data Engineering',
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
const OnBoarding = [
  {
    id: '1',
    imgName: 'OnBoarding1',
    svgName2: 'ProgressBar1',
    heading: 'Lorem Ipsum',
    text: 'Unleashing Africas Collective Ingenuity ',
  },
  {
    id: '2',
    imgName: 'OnBoarding2',
    svgName2: 'ProgressBar2',
    heading: 'Lorem Ipsum',
    text: 'Unleashing Africas Collective Ingenuity ',
  },
  {
    id: '3',
    imgName: 'OnBoarding3',
    svgName2: 'ProgressBar3',
    heading: 'Lorem Ipsum',
    text: 'Unleashing Africas Collective Ingenuity ',
  },
];
const StoriesData = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Fatima Ali',
    stories: [
      // {
      //   story_id: 1,
      //   story_image:
      //     'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
      //   swipeText: 'Custom swipe text for this story',
      //   onPress: () => console.log('story 1 swiped'),
      // },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Ahmet Çağlar Durmuş',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
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
};
