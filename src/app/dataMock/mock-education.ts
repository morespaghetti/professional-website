import { Education } from '../data/education.model';

export const EDUCATION: Education[] = [
  new Education(new Date(2019, 0, 1),
                  'Massachusetts Institute of Technology',
                  'Entrepreneurship Development Program',
                  null),
  new Education(new Date(2014, 9, 1),
                  'The University of Adelaide',
                  'Bachelor of Aerospace Engineering (First Class Honours)',
                  [
                    'Dr Schneider Prize in Aeronautical Engineering for the best overall result.',
                    'Dean’s Merit award for outstanding academic achievement.',
                    'Golden Key International Honour Society (awarded to the top 15% of graduates).'
                  ]),
  new Education(new Date(2010, 9, 1),
                  'Pembroke High School',
                  'South Australian Certificate of Education',
                  [
                    'Australian Student Prize for top 200 students nationally.',
                    'Perfect scores in Physics, Chemistry and Mathematics.'
                  ])
];
