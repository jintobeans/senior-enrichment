const db = require('./server/db/models/index').db;
const Campuses = require('./server/db/models/Campuses');
const Students = require('./server/db/models/Students');

const campuses = [{
  name: 'Los Angeles',
  imageURL: 'https://news.artnet.com/app/news-upload/2014/08/los-angeles-artists-256x256.jpg',
  description: 'Welcome to LA'
}, {
  name: 'Madrid',
  imageURL: 'http://www.lebsack.net/spain/_Media/dsc02458_hr.jpeg',
  description: 'Welcome to Madrid'
}, {
  name: 'Munich',
  imageURL: 'https://pbs.twimg.com/profile_images/705411009465360384/ATsNskhp.jpg',
  description: 'Welcome to Munich'
}, {
  name: 'Chicago',
  imageURL: 'http://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/024/239/340-8.jpeg_/waset-chicago-2018-conference-40.jpeg',
  description: 'Welcome to Chicago'
}, {
  name: 'Tokyo',
  imageURL: 'https://static-s.aa-cdn.net/img/gp/20600003970406/9URZn8-SAB9qNpTvKW4bmVp3YHfXaMkYPXTrWVVaoB5UYpg9O3GgupYqr2YZOoCWBpHp=w300?v=1',
  description: 'Welcome to Tokyo'
}, {
  name: 'Taipei',
  imageURL: 'https://static.greatbigcanvas.com/images/square/getty-images/taipei-101-skyscraper-with-sunset-taipei-basin-background-,1131569.jpg?max=128',
  description: 'Welcome to Taipei'
}, {
  name: 'Lyon',
  imageURL: 'https://i.pinimg.com/736x/f8/1a/2c/f81a2c3efa06034964da81ef4ce981ed--holiday-destinations-lyon.jpg',
  description: 'Welcome to Lyon'
}];

const students = [{
  firstName: 'Minnie',
  lastName: 'Mouse',
  email: 'minnie@mouse.com',
  gpa: '3.5',
  CampusId: 1
}, {
  firstName: 'Mickey',
  lastName: 'Mouse',
  email: 'mickey@mouse.com',
  gpa: '3.3',
  CampusId: 1
}, {
  firstName: 'Jon',
  lastName: 'Snow',
  email: 'jon@snow.com',
  gpa: '3.5',
  CampusId: 2
}, {
  firstName: 'Sansa',
  lastName: 'Stark',
  email: 'sansa@stark.com',
  gpa: '3.9',
  CampusId: 2
}, {
  firstName: 'Peter',
  lastName: 'Griffin',
  email: 'peter@griffin.com',
  gpa: '2.2',
  CampusId: 3
}, {
  firstName: 'Meg',
  lastName: 'Griffin',
  email: 'meg@griffin.com',
  gpa: '3.3',
  CampusId: 3
}, {
  firstName: 'Harry',
  lastName: 'Potter',
  email: 'harry@potter.com',
  gpa: '1.5',
  CampusId: 4
}, {
  firstName: 'Ron',
  lastName: 'Weasley',
  email: 'ron@weasley.com',
  gpa: '2.7',
  CampusId: 4
}, {
  firstName: 'Lord',
  lastName: 'Voldemort',
  email: 'vodlemort@lord.com',
  gpa: '3.6',
  CampusId: 4
}, {
  firstName: 'Master',
  lastName: 'Yoda',
  email: 'yoda@jedi.com',
  gpa: '2.4',
  CampusId: 5
}, {
  firstName: 'Darth',
  lastName: 'Vader',
  email: 'vader@darth.com',
  gpa: '3.1',
  CampusId: 5
}, {
  firstName: 'Obi-Wan',
  lastName: 'Kenobi',
  email: 'kenobi@jedi.com',
  gpa: '3.8',
  CampusId: 5
}
]

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campuses.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Students.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
