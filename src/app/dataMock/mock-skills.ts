import {Skills} from '../data/skills.model';

export const SKILLS: Skills[] = [
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
                  name: 'Kalman Filters'
                },
                {
                  name: 'Particle Filters'
                },
                {
                  name: 'Interacting Multiple Model Filters'
                }
              ]
            },
            {
              name: 'Data Association',
              children: [
                {
                  name: 'Multiple Hypothesis Filters'
                },
                {
                  name: 'Probabilistic Data Association'
                },
                {
                  name: 'Gating and Assignment'
                },
                {
                  name: 'Joint Probabilistic Data Association'
                }
              ]
            },
            {
              name: 'Modelling',
              children: [
                {
                  name: 'Hidden Markov Models'
                },
                {
                  name: 'Gaussian Mixture Models'
                },
                {
                  name: 'Monte Carlo Models'
                }
              ]
            },
            {
              name: 'Cognitive Technology',
              children: [
                {
                  name: 'Decision Modelling'
                },
                {
                  name: 'Decision Automation'
                },
                {
                  name: 'Non-myopic Decision Optimisation'
                },
                {
                  name: 'Information Theory'
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
                  name: 'Mission System Design'
                },
                {
                  name: 'Data Reduction Pipelines'
                },
                {
                  name: 'Sensor Development'
                },
                {
                  name: 'Space-based Systems'
                }
              ]
            },
            {
              name: 'Spacecraft Design',
              children: [
                {
                  name: 'Navigation Systems'
                },
                {
                  name: 'Attitude Determination and Control'
                },
                {
                  name: 'Systems Architecture'
                }
              ]
            },
            {
              name: 'Orbital Dynamics',
              children: [
                {
                  name: 'Coordinate Transformations'
                },
                {
                  name: 'Numerical Orbital Dynamics'
                },
                {
                  name: 'Analytical Orbital Dynamics'
                },
                {
                  name: 'Initial Orbit Determination'
                }
              ]
            },
            {
              name: 'Mission Design',
              children: [
                {
                  name: 'Orbital Parameter Optimisation'
                },
                {
                  name: 'Power Modelling'
                },
                {
                  name: 'Capability Degradation Modelling'
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
                  name: 'Matlab'
                },
                {
                  name: 'Simulink'
                },
                {
                  name: 'Python'
                }
              ]
            },
            {
              name: 'Production',
              children: [
                {
                  name: 'C++'
                },
                {
                  name: 'Cuda'
                },
                {
                  name: 'JavaScript'
                },
                {
                  name: 'SQL'
                }
              ]
            }
          ]
        }
      ]
    }
  ];