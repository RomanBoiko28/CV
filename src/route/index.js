// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  sallary: '600$ у місяць',
  address:
    'Ivano-Frankivsk, square Hmelnyckogo and Bandery',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'CV π Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'We always suggest that people customize their resume for each position they’re applying for. Tailoring your resume not only shows that you’ve taken the time to learn about the organization you’re applying to. It also shows that you’ve paid attention to the job description and used that information to create a more effective application.',
      },

      experience: {
        title: 'Other experience',
        text: 'We always suggest that people customize their resume for each position they’re applying for. Tailoring your resume not only shows that you’ve taken the time to learn about the organization you’re applying to. It also shows that you’ve paid attention to the job description and used that information to create a more effective application.',
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'CV π Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code & Github',
          point: 8,
          isTop: false,
        },
        {
          name: 'Terminal & NPM',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'WW3',
          isMain: true,
        },
        {
          name: 'SMS',
          isMain: false,
        },
        {
          name: 'MOON',
          isMain: true,
        },
      ],
    },

    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      education: 'CV π Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Garvard',
          isEnd: true,
        },

        {
          name: 'Elle',
          isEnd: true,
        },
        {
          name: 'Narhoz',
          isEnd: false,
        },
        {
          name: 'Gmerinska serednya',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'MBA',
          id: 11111,
        },

        {
          name: 'TOEFL 2018-2019',
          id: 1222222,
        },

        {
          name: 'OOH',
          id: 1333333,
        },

        {
          name: 'Prezident of the World',
          id: 1444444,
        },
      ],
    },
    footer,
  })
})

// ================================================================
router.get('/address', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('address', {
    // ↙ сюди вводимо JSON дані

    page: {
      education: 'CV π Address',
    },

    header,

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      education: 'CV π Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junoir Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },

          duration: {
            from: '10.10.2020',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'CV',
              url: 'https://cv.com.ua/',
              about: 'Information for project',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 12,

              awards: [
                {
                  name: 'IT Oscar for successful users life',
                },
                {
                  name: 'BofB - Best of the best 2024',
                },
              ],
              awardAmount: 69,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
