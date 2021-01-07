import {AdasShortDesc} from '../../String'
import {cookingAppShortDesc} from '../../String'
import {
  QuickCoachingAppShortDesc,
  WeatherShortDesc,
  portShortDesc,
  cakeShortDesc,
} from '../../String';
export const arrayOne = [
  {
    id: 1,
    carouselId: 'mobileProjects',
    projectTitle: 'Quick Coaching App',
    imgC: 'image webImgs',
    type: 'Android App',
    projectsImgUrl: 'assets/images/project-screens/project_1.png',
    desc: QuickCoachingAppShortDesc,
    btnVUrl: 'qca',
    viewBtnUrl: '/qca',
    btnGUrl: 'https://github.com/RMelvina/RecipesApp.git',
    target: false,
    item: 'carousel-item active',
    // slideTo: '0',

    classN: 'active',
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  {
    id: 2,
    carouselId: 'mobileProjects',
    projectTitle: 'Cooking Apps',
    imgC: 'image webImgs',
    type: 'Android App',
    projectsImgUrl: 'assets/images/project-screens/project_2.png',
    desc: cookingAppShortDesc,
    btnVUrl: 'ca',
    btnGUrl: 'https://github.com/timeoutmode/ADAS.git',
    target: false,
    item: 'carousel-item',
    // slideTo: '1',

    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  {
    id: 3,
    carouselId: 'mobileProjects',
    projectTitle: 'ADAS App',
    imgC: 'image webImgs',
    type: 'Android App',
    projectsImgUrl: 'assets/images/project-screens/project_3.jpg',
    btnVUrl: 'adas',
    desc: AdasShortDesc,
    btnGUrl: 'https://github.com/RMelvina/QuickCoachingApp.git',
    target: false,
    item: 'carousel-item',
    // slideTo: '2',

    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  {
    id: 4,
    projectTitle: 'Weather',
    type: 'Web Application',
    projectsImgUrl: 'assets/images/project-screens/weather.png',
    desc: WeatherShortDesc,
    btnVUrl: 'qca',
    viewBtnUrl: '/qca',
    btnGUrl: 'https://github.com/RMelvina/RecipesApp.git',
    target: '_blank',
    item: 'carousel-item ',

    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  {
    id: 5,
    projectTitle: 'Portfolio',
    type: 'Web Application',
    projectsImgUrl: 'assets/images/projects_5/screen1.png',
    desc: portShortDesc,
    btnVUrl: 'qca',
    viewBtnUrl: '/qca',
    btnGUrl: 'https://github.com/RMelvina/RecipesApp.git',
    target: '_blank',
    item: 'carousel-item ',

    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  {
    id: 6,
    projectTitle: 'Cake Ecommerce',
    type: 'Web Application',
    projectsImgUrl: 'assets/images/projects_6/screen1.png',
    desc: cakeShortDesc,
    btnVUrl: 'qca',
    viewBtnUrl: '/qca',
    btnGUrl: 'https://rmelvina.github.io/angular-ecommerce/',
    target: '_blank',
    item: 'carousel-item ',

    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
];









export const arrayTwo = [
  {
    //   Alzheimers Disease Assessment Scale App
    id: 3,
    projectTitle: 'ADAS App',
    type: 'Android App',
    projectsImgUrl: 'assets/images/project-screens/project_3.jpg',
    btnVName: 'View',
    btnVUrl: 'adas',
    btnMDName: 'More Details',
    btnGUrl: 'https://github.com/RMelvina/QuickCoachingApp.git',
    target: false,
  },
];
