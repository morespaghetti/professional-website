import { Sunburst } from './sunburst.model';

export const SkillsData: Sunburst[] = [
  {
    name: '',
    children: [
      {
        name: 'Artificial Intelligence',
        children: [
          {
            name: 'Statistical Estimation',
            children: [
              {
                name: 'Kalman Filters',
                size: 1
              },
              {
                name: 'Particle Filters',
                size: 1
              },
              {
                name: 'Interacting Multiple Model Filters',
                size: 1
              }
            ]
          },
          {
            name: 'Data Association',
            children: [
              {
                name: 'Multiple Hypothesis Filters',
                size: 1
              },
              {
                name: 'Probabilistic Data Association',
                size: 1
              },
              {
                name: 'Gating and Assignment',
                size: 1
              },
              {
                name: 'Joint Probabilistic Data Association',
                size: 1
              }
            ]
          },
          {
            name: 'Modelling',
            children: [
              {
                name: 'Hidden Markov Models',
                size: 1
              },
              {
                name: 'Gaussian Mixture Models',
                size: 1
              },
              {
                name: 'Monte Carlo Models',
                size: 1
              }
            ]
          },
          {
            name: 'Cognitive Technology',
            children: [
              {
                name: 'Decision Modelling',
                size: 1
              },
              {
                name: 'Decision Automation',
                size: 1
              },
              {
                name: 'Non-myopic Decision Optimisation',
                size: 1
              },
              {
                name: 'Information Theory',
                size: 1
              }
            ]
          }
        ]
      },
      {
        name: 'Space',
        children: [
          {
            name: 'SSA',
            children: [
              {
                name: 'Mission System Design',
                size: 1
              },
              {
                name: 'Data Reduction Pipelines',
                size: 1
              },
              {
                name: 'Sensor Development',
                size: 1
              },
              {
                name: 'Space-based Systems',
                size: 1
              }
            ]
          },
          {
            name: 'Spacecraft Design',
            children: [
              {
                name: 'Navigation Systems',
                size: 1
              },
              {
                name: 'Attitude Determination and Control',
                size: 1
              },
              {
                name: 'Systems Architecture',
                size: 1
              }
            ]
          },
          {
            name: 'Orbital Dynamics',
            children: [
              {
                name: 'Coordinate Transformations',
                size: 1
              },
              {
                name: 'Numerical Orbital Dynamics',
                size: 1
              },
              {
                name: 'Analytical Orbital Dynamics',
                size: 1
              },
              {
                name: 'Initial Orbit Determination',
                size: 1
              }
            ]
          },
          {
            name: 'Misison Design',
            children: [
              {
                name: 'Orbital Parameter Optimisation',
                size: 1
              },
              {
                name: 'Power Modelling',
                size: 1
              },
              {
                name: 'Capability Degradation Modelling',
                size: 1
              }
            ]
          }
        ]
      },
      {
        name: 'Software',
        children: [
          {
            name: 'Research',
            children: [
              {
                name: 'Matlab',
                size: 1
              },
              {
                name: 'Simulink',
                size: 1
              },
              {
                name: 'Python',
                size: 1
              }
            ]
          },
          {
            name: 'Production',
            children: [
              {
                name: 'C++',
                size: 1
              },
              {
                name: 'Cuda',
                size: 1
              },
              {
                name: 'JavaScript',
                size: 1
              },
              {
                name: 'SQL',
                size: 1
              }
            ]
          }
        ]
      }
    ]
  }
];
