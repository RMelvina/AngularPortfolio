import {
  AdasShortDesc,
  cookingAppShortDesc,
  QuickCoachingAppShortDesc,
} from '../../String';

// ------------------------------------

export const projects = [
  {
    mobileProjects: [
      //  --Quick Coaching App--
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
        classN: 'active',
        // Buttons Array
        buttons: [
          {
            btnName: 'More Details',
          },
        ],
      },
      //   ---------------------

      // --Cooking Apps--
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
        // Buttons Array
        buttons: [
          {
            btnName: 'More Details',
          },
        ],
      },
      //   --------------------

      // -----ADAS App-----
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
        // Buttons Array
        buttons: [
          {
            btnName: 'More Details',
          },
        ],
      },
      //   -------------------------
    ],
  },
  {
    webProjects: [
      // ------Weather-----
      {
        id: 4,
        projectTitle: 'Weather',
        type: 'Web Application',
        projectsImgUrl: 'assets/images/project-screens/weather.png',
        desc: ``,
        btnVUrl: 'qca',
        viewBtnUrl: '/qca',
        btnGUrl: 'https://github.com/RMelvina/RecipesApp.git',
        target: '_blank',
        item: 'carousel-item ',
        // Buttons Array
        buttons: [
          {
            btnName: 'More Details',
          },
        ],
      },
      //   -------------------------
    ],
  },
];

// ------------------------------------

export const heading = [
  {
    heading1: 'Mobile Projects',
    heading2: 'Web Projects',
  },
];
