import { Affiliations } from './Affiliations.model';

export const AFFILIATIONS: Affiliations[] = [
  new Affiliations(new Date(2018, 6, 1),
                    'South Australian Space Industry Centre Scholarship Program',
                    'Awarded one of five competitive scholarships.'),
  new Affiliations(new Date(2017, 1, 1),
                    'Startup Catalyst\'s Future Founders Mission',
                    'Awarded one of 20 places from 521 applications nationally.'),
  new Affiliations(new Date(2016, 6, 1),
                    'Australian Department of Foreign Affairs and Trade',
                    'Invited by the Australian Government to travel to India and the Bengaluru Space Expo to represent the Australian Space Industry and to build relationships with Indian industry and Government.')
];
