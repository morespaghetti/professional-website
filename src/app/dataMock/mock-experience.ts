import { Experience } from '../data/experience.model';

export const EXPERIENCE: Experience [] = [
  new Experience(new Date(2019, 6, 1),
                  null,
                  'Senior Technical Management Consultant, Solution 49x',
                  'KPMG',
                  'Solution 49x helps clients leverage artificial intelligence, cognitive technologies, and other emerging technologies.'),
  new Experience(new Date(2016, 1, 1),
                  new Date(2019, 6, 1),
                  'Space Technologies Program Lead',
                  'Inovor Technologies',
                  'Australia’s leading supplier of satellite platforms, space expertise, and space situational awareness.'),
  new Experience(new Date(2013, 6, 1),
                  new Date(2016, 1, 1),
                  'Aerospace Engineer',
                  'Inovor Technologies',
                  'Australia’s leading supplier of satellite platforms, space expertise, and space situational awareness.'),
  new Experience(new Date(2017, 0, 1),
                  new Date(2018, 1, 1),
                  'Chief Technology Officer & Co-Founder',
                  '2DL',
                  'Reimagining professional service deliverables by leveraging modern web-application frameworks and technology.')
];
