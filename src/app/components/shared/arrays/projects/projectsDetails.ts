import {cookingAppDesc} from '../../../shared/String'
import { QuickCoachingAppDesc } from '../../../shared/String';
import {
  AdasDescOne,
  AdasDescTwo,
  WeatherDesc,
  portShortDesc,
} from '../../../shared/String';

export const projectDetails = [
  // Quick Coaching App
  {
    id: 1,
    pTitle: 'Quick Coaching App',
    descArray: [
      {
        pDesc: QuickCoachingAppDesc,
        pClass: 'col-lg-6 overlay qca_colOneDesc colorOne boxShadow',
      },
    ],
    buttonsArray: [
      {
        btnName: 'Github',
        url: 'https://github.com/RMelvina/QuickCoachingApp.git',
      },
    ],

    title: 'What I did/learned',
    // classColOne: 'col-lg-6 overlay qca_colOneDesc colorOne',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca qca_colTwoLines colorTwo boxShadowP',
    classDesc: 'desc',
    array: [
      'Firebase Authentication\n',
      'Cloud Storage \n',
      'Read and Write data to Firebase \n',
      'Coordination with team \n',
      'Professional Ethics \n',
      'Meeting deadlines \n',
      'Dealing with client requirements that keeps on changing \n',
    ],

    imgsArray: [
      {
        desc: 'Login Page',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen1.png',
        item: 'carousel-item active',
        // carousel-item
      },
      {
        desc: 'Registration Page',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen2.png',
        item: ' carousel-item ',
        // active
      },
      {
        desc: 'Main Dashboard',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen3.png',
        item: ' carousel-item ',
      },
      {
        desc: 'Navigation drawer',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen4.png',
        item: ' carousel-item ',
      },
      {
        desc: 'Add new blog',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_cscreen5.png',
        item: 'carousel-item ',
      },
      {
        desc: 'Start problem sloving coaching ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen5.png',
        item: 'carousel-item ',
      },
      {
        desc: 'When text is of specific length, next button appers ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen8.png',
        item: 'carousel-item ',
      },
      {
        desc: 'Beginning of relaxation coaching ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_screen9.png',
        item: 'carousel-item ',
      },
      {
        desc: ' Community Blog Home feed  ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_cscreen1.png',
        item: 'carousel-item ',
      },
      {
        desc: 'Blog with option to comment  ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_cscreen3.png',
        item: 'carousel-item ',
      },
      {
        desc: 'Blog with option to delete, edit, view  ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_1/qca_cscreen4.png',
        item: 'carousel-item ',
      },
    ],
  },
  // Cooking App
  {
    id: 2,
    pTitle: 'Cooking App',
    descArray: [
      {
        pDesc: cookingAppDesc,
        pClass: 'col-lg-6 overlay ca_colOneDesc colorOne boxShadow',
      },
    ],
    buttonsArray: [
      {
        btnName: 'Github',
        url: 'https://github.com/RMelvina/RecipesApp.git',
      },
    ],

    title: 'What I did/learned',
    classDesc: 'desc',
    // classColOne: 'col-lg-6 overlay qca_colOneDesc colorOne',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca ca_colTwoLines colorTwo boxShadowP',
    array: [
      'Created my first android app \n',
      'Good understaing of UI/UX \n',
      'Understanding of good design principles \n',
    ],

    imgsArray: [
      {
        desc: 'Categories',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_2/screen1.png',
        item: 'carousel-item active',
      },
      {
        desc: 'Recipes List',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_2/screen2.png',
        item: 'carousel-item',
      },
      {
        desc: 'Ingredients',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_2/screen3.png',
        item: ' carousel-item ',
      },
    ],
  },
  // ADAS
  {
    id: 3,
    pTitle: 'Alzheimers Disease Assessment Scale App',

    buttonsArray: [
      {
        btnName: 'Github',
        url: 'https://github.com/timeoutmode/ADAS.git',
      },
    ],
    descArray: [
      {
        pDesc: AdasDescOne,
        pClass: 'cardOne overlay col-lg-6 adas_divOneDesc boxShadow',
      },
      {
        pDesc: AdasDescTwo,
        pClass: 'cardTwo overlay col-lg-6 adas_divTwoDesc boxShadow',
      },
    ],

    title: 'What I did/learned',
    classColOne: 'col-lg-6 overlay adas_colOneDesc colorOne',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca adas_colTwoLines colorTwo boxShadowP',
    classDesc: 'desc',
    array: [
      'Firebase Authentication and data management with Firebase SDK \n',
      'Places API \n',
      'Speech-To-Text API \n',
      'Coordination with team \n',
      'Github \n',
    ],

    imgsArray: [
      {
        desc: 'Login Screen',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/adas_screen1.png',
        item: 'carousel-item active ',
      },
      {
        desc: 'Assessor registration',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/registration.png',
        item: ' carousel-item ',
      },
      {
        desc: 'Patient registration',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/addpatientform.png',
        item: ' carousel-item ',
      },
      {
        desc: 'Patient dashboard ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/assessment.png',
        item: ' carousel-item ',
      },
      {
        desc: '20 test scores ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/result.png',
        item: ' carousel-item ',
      },
      {
        desc: ' Start game ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/adas_guess_screen1.png',
        item: ' carousel-item ',
      },
      {
        desc: ' Guess the image ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/adas_guess_screen4.png',
        item: ' carousel-item ',
      },
      {
        desc: '  Guess the finger ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/guessfinger_screen1.png',
        item: ' carousel-item ',
      },
      {
        desc: '  Guess the finger ',
        imgC: 'img-fluid project-img mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_3/guessfinger_screen2.png',
        item: ' carousel-item ',
      },
    ],
  },

  // Weather
  {
    id: 4,
    pTitle: 'Weather',
    buttonsArray: [
      {
        btnName: 'Github',
        url: 'https://github.com/timeoutmode/ADAS.git',
      },
      {
        btnName: 'Vist',
        url: 'https://rmelvina.github.io/angularportfolio/',
      },
    ],
    descArray: [
      {
        pDesc: WeatherDesc,
        pClass:
          'cardOne overlay col-lg-6 weather_divOneDesc  colorOne boxShadow',
      },
    ],
    // classColOne: 'col-lg-6 overlay adas_colOneDesc colorOne',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    classDesc: 'desc',
    title: 'What I used',
    array: ['Html \n', 'Css \n', 'React\n', 'Bootstrap'],

    imgsArray: [
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_4/screen1.png',
        item: ' carousel-item active',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_4/screen2.png',
        item: ' carousel-item ',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/project_4/screen3.png',
        item: ' carousel-item ',
      },
    ],
  },

  // Portfoilo
  {
    id: 5,
    pTitle: 'Portfolio',
    buttonsArray: [
      {
        btnName: 'Github',
        url: 'https://github.com/timeoutmode/ADAS.git',
      },
      {
        btnName: 'Vist',
        url: 'https://rmelvina.github.io/weather/',
      },
    ],
    descArray: [
      {
        pDesc: '',
        pClass: '',
      },
    ],
    // classColOne: 'col-lg-6 overlay adas_colOneDesc colorOne',
    classColTwo:
      'col-lg-12 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    classDesc: 'desc',
    title: 'What I used',
    array: [
      'Html \n',
      'Css \n',
      'Angular\n',
      'Carousel\n',
      'Bootstrap\n',
      'Angular Material',
    ],

    imgsArray: [
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/projects_5/screen1.png',
        item: ' carousel-item active',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/projects_5/screen2.png',
        item: ' carousel-item ',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/projects_5/screen4.png',
        item: ' carousel-item ',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/projects_5/screen5.png',
        item: ' carousel-item ',
      },
      {
        desc: '',
        imgC: 'img-fluid weatherImg mb-3 d-block mx-auto',
        imgUrl: 'assets/images/projects_5/screen6.png',
        item: ' carousel-item ',
      },
    ],
  },
];


