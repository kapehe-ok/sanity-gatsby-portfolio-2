export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fab225ab178f931e1fdfbd5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-rz8733zy',
                  apiId: '967023f2-4eff-45d1-a55c-96a9e93b9230'
                },
                {
                  buildHookId: '5fab225ab178f9349efdfa50',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-2gscp7ft',
                  apiId: 'a1b940fc-ffee-4816-9a06-fa4579d30ed9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-2gscp7ft.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
