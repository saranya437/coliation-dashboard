import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent implements OnInit {
  patients = [
    { name: 'Emily Williams', gender: 'Female', age: 18, src: '../assets/emily (1).png', alt: 'Image 1' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, src: '../assets/ryan (1).png', alt: 'Image 2' },
    { name: 'Brandon Michell', gender: 'Male', age: 35, src: '../assets/brandon (1).png', alt: 'Image 3' },
    { name: 'Jessica Taylor', gender: 'Female', age: 28, src: '../assets/jessica.png', alt: 'Image 4' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, src: '../assets/samantha (1).png', alt: 'Image 5' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, src: '../assets/ashley (1).png', alt: 'Image 6' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, src: '../assets/olivia (1).png', alt: 'Image 7' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, src: '../assets/tyler (1).png', alt: 'Image 8' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, src: '../assets/kevin (1).png', alt: 'Image 9' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, src: '../assets/dylan (1).png', alt: 'Image 10' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    { name: 'Emily Williams', gender: 'Female', age: 18, src: '../assets/emily (1).png', alt: 'Image 1' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, src: '../assets/ryan (1).png', alt: 'Image 2' },
    { name: 'Brandon Michell', gender: 'Male', age: 35, src: '../assets/brandon (1).png', alt: 'Image 3' },
    { name: 'Jes Taylor', gender: 'Female', age: 28, src: '../assets/jessica.png', alt: 'Image 4' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, src: '../assets/samantha (1).png', alt: 'Image 5' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, src: '../assets/ashley (1).png', alt: 'Image 6' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, src: '../assets/olivia (1).png', alt: 'Image 7' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, src: '../assets/tyler (1).png', alt: 'Image 8' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, src: '../assets/kevin (1).png', alt: 'Image 9' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, src: '../assets/dylan (1).png', alt: 'Image 10' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    { name: 'Emily Williams', gender: 'Female', age: 18, src: '../assets/emily (1).png', alt: 'Image 1' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, src: '../assets/ryan (1).png', alt: 'Image 2' },
    { name: 'Brandon Michell', gender: 'Male', age: 35, src: '../assets/brandon (1).png', alt: 'Image 3' },
    { name: 'sica Taylor', gender: 'Female', age: 28, src: '../assets/jessica.png', alt: 'Image 4' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, src: '../assets/samantha (1).png', alt: 'Image 5' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, src: '../assets/ashley (1).png', alt: 'Image 6' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, src: '../assets/olivia (1).png', alt: 'Image 7' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, src: '../assets/tyler (1).png', alt: 'Image 8' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, src: '../assets/kevin (1).png', alt: 'Image 9' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, src: '../assets/dylan (1).png', alt: 'Image 10' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    { name: 'Emily Williams', gender: 'Female', age: 18, src: '../assets/emily (1).png', alt: 'Image 1' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, src: '../assets/ryan (1).png', alt: 'Image 2' },
    { name: 'Brandon Michell', gender: 'Male', age: 35, src: '../assets/brandon (1).png', alt: 'Image 3' },
    { name: 'Taylor', gender: 'Female', age: 28, src: '../assets/jessica.png', alt: 'Image 4' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, src: '../assets/samantha (1).png', alt: 'Image 5' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, src: '../assets/ashley (1).png', alt: 'Image 6' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, src: '../assets/olivia (1).png', alt: 'Image 7' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, src: '../assets/tyler (1).png', alt: 'Image 8' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, src: '../assets/kevin (1).png', alt: 'Image 9' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, src: '../assets/dylan (1).png', alt: 'Image 10' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    { name: 'Brandon Michell', gender: 'Male', age: 35, src: '../assets/brandon (1).png', alt: 'Image 3' },
    { name: 'lor', gender: 'Female', age: 28, src: '../assets/jessica.png', alt: 'Image 4' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, src: '../assets/samantha (1).png', alt: 'Image 5' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, src: '../assets/ashley (1).png', alt: 'Image 6' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, src: '../assets/olivia (1).png', alt: 'Image 7' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, src: '../assets/tyler (1).png', alt: 'Image 8' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, src: '../assets/kevin (1).png', alt: 'Image 9' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, src: '../assets/dylan (1).png', alt: 'Image 10' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, src: '../assets/nathan (1).png', alt: 'Image 11' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, src: '../assets/mike (1).png', alt: 'Image 12' },
    
    // Add more patients
  ];

 
  constructor() { }

  ngOnInit(): void { }
}
