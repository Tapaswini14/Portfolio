import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: 'Youtube Clone',
      desc: '',
      githurl: 'https://github.com/Tapaswini14/YouTube.git',
      imgUrl: 'assets/images/YouTube.png',
      tech: 'Angular 12 , Material UI',
    },

    {
      id: 2,
      title: 'Restaurant Management System',
      desc: '',
      githurl: 'https://github.com/Tapaswini14/Angular-projects.git',
      imgUrl: 'assets/images/restaurant.png',
      tech: 'Angular 12',
    },
  ];
  about2 = `Software Developer with 0.5+ years of experience .
  Expertise in Angular 12, Javascript and UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap,Material UI Firebase and MYSQL`;

  about = '';
  resumeurl =
    'https://docs.google.com/document/d/1Wbr05m4tWdXmTQpsyQ1H3Ktr1F9-twq2bkinRp1lIlU/edit';

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 12',
      progress: '65%',
    },
    {
      id: '2',
      skill: 'JAVASCRIPT JQUERY',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'SQL, FIREBASE',
      progress: '50%',
    },
    {
      id: '4',
      skill: 'Core JAVA',
      progress: '70%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2015 - 2019',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      institution: 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD',
    },
    {
      id: '2',
      from_to_year: '2013 - 2015',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`,
    },
    {
      id: '3',
      from_to_year: '2012 - 2013',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Apptimates Software Private Limited',
      location: 'Bhubaneswar',
      timeline: 'Jan 2023 - June 2023',
      role: 'Software Developer Trainee',
      work: `Technologies : Angular , HTML5, CSS3, JavaScript .

  Project 1 : Worked on official landing pages and dashboards of the company .

  Project 2 : Developed a Restaurant Management System with integrating API .Worked on adding the data of restaurants and editing the data aswell.
  `,
    },
  ];

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
