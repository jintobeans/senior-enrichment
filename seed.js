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
}, {
  name: 'Las Vegas',
  imageURL: 'https://pbs.twimg.com/profile_images/627970847211307008/Rl54n74j_400x400.jpg',
  description: 'Welcome to Vegas'
}, {
  name: 'Anchorage',
  imageURL: 'https://static-s.aa-cdn.net/img/gp/20600001744590/hLX5nd2eNokeO0ooRe0VaQ-WYqi-j-xoCh6tlzamnb1Q93Lp97LD1ajFzVHZtytI-6s=w300?v=1',
  description: 'Welcome to Anchorage'
}, {
  name: 'London',
  imageURL: 'http://assets.emeraldstreet.com/app/uploads/2016/10/21155552/emst2_web_londonnight_v1-256x256.jpg',
  description: 'Welcome to London'
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
}, {
  firstName: 'Angelina',
  lastName: 'Jolie',
  email: 'angel@jo.com',
  gpa: '3.8',
  CampusId: 6
}, {
  firstName: 'Brad',
  lastName: 'Pitt',
  email: 'pitt@brad.com',
  gpa: '3.7',
  CampusId: 6
}, {
  firstName: 'Barack',
  lastName: 'Obama',
  email: 'obama@wh.com',
  gpa: '3.0',
  CampusId: 7
}, {
  firstName: 'Michelle',
  lastName: 'Obama',
  email: 'obama@michelle.com',
  gpa: '3.8',
  CampusId: 7
}, {
  firstName: 'Peter',
  lastName: 'Pan',
  email: 'panny@peter.com',
  gpa: '1.5',
  CampusId: 8
}, {
  firstName: 'Wendy',
  lastName: 'Idkmylastname',
  email: 'wendy@wendy.com',
  gpa: '2.8',
  CampusId: 8
}, {
  firstName: 'Captain',
  lastName: 'Hook',
  email: 'hook@hook.com',
  gpa: '1.8',
  CampusId: 8
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
