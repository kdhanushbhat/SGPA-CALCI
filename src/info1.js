const data1 = {
    ISE: [
      {
        id: 1,
        year: 1,
        sem: 1,
        sublist: [
          { sub: "Calculus and Linear Algebra", code: "18MAT11", cr: 4 },
          { sub: "Engineering Chemistry", code: "18CHE12/22", cr: 4 },
          { sub: "C Programmin for Problem Solving", code: "18CHEL13/23", cr: 3 },
          { sub: "Basic Electronics", code: "18ELN14/24", cr: 3 },
          { sub: "Elements of Mechanical Engineering", code: "18ME15/25", cr: 3 },
          { sub: "Engineering Chemisty Laboratory", code: "18CHEL16/26", cr: 1 },
          { sub: "C Programmin Laboratory", code: "18CPL17/27", cr: 1 },
          { sub: "Technical English-I", code: "18EGH18", cr: 1 }
        ]
      },
      {
        id: 2,
        year: 1,
        sem: 2,
        sublist: [
          {
            sub: "Advanced Calculus and Numerical Methods",
            code: "18MAT21",
            cr: 4
          },
          { sub: "Engineering Chemistry", code: "18CHE12/22", cr: 4 },
          { sub: "C Programmin for Problem Solving", code: "18CHEL13/23", cr: 3 },
          { sub: "Basic Electronics", code: "18ELN14/24", cr: 3 },
          { sub: "Elements of Mechanical Engineering", code: "18ME15/25", cr: 3 },
          { sub: "Engineering Chemisty Laboratory", code: "18CHEL16/26", cr: 1 },
          { sub: "C Programmin Laboratory", code: "18CPL17/27", cr: 1 },
          { sub: "Technical English-II", code: "18EGH28", cr: 1 }
        ]
      },
      {
        id: 3,
        year: 2,
        sem: 3,
        sublist: [
          {
            sub: "Transform Calculus, Fourier Series and Numerical Techniques",
            code: "18MAT31",
            cr: 3
          },
          { sub: "Data Structures and Applications", code: "18CS32", cr: 4 },
          { sub: "Analog and Digital Electronics", code: "18CS33", cr: 3 },
          { sub: "Computer Organisation", code: "18CS34", cr: 3 },
          { sub: "Software Engineering", code: "18CS35", cr: 3 },
          { sub: "Discrete Mathematical Strucutres", code: "18CS36", cr: 3 },
          {
            sub: "Analog and Digital Electronics Laboratory",
            code: "18CSL37",
            cr: 2
          },
          { sub: "Data Structure Laboratory", code: "18CSL38", cr: 2 },
          {
            sub:
              "Aadalitha/Vyavaharika Kannada or Constitution of India, Professional Ethics and CyberLaw",
            code: "18KAK39/KVK39/CPC39",
            cr: 1
          }
        ]
      },
      {
        id: 4,
        year: 2,
        sem: 4,
        sublist: [
          {
            sub: "Complex Analysis, Probability and Statisctical Methods",
            code: "18MAT41",
            cr: 3
          },
          { sub: "Design and Analysis of Algorithms", code: "18CS42", cr: 4 },
          { sub: "Operating Systems", code: "18CS43", cr: 3 },
          { sub: "Microcontroller and Embedded Systems", code: "18CS44", cr: 3 },
          { sub: "Object Oriented Concepts", code: "18CS45", cr: 3 },
          { sub: "Data Communication", code: "18CS46", cr: 3 },
          {
            sub: "Design and Analysis of Algorithms Laboratory",
            code: "18CSL47",
            cr: 2
          },
          {
            sub: "Microcontroller and Embedded Systems Laboratory",
            code: "18CSL48",
            cr: 2
          },
          {
            sub:
              "Aadalitha/Vyavaharika Kannada or Constitution of India, Professional Ethics and CyberLaw",
            code: "18KAK49/KVK49/CPC49",
            cr: 1
          }
        ]
      },
      {
        id: 5,
        year: 3,
        sem: 5,
        sublist: [
          {
            sub: "Management, Entrepreneurship for IT Industry",
            code: "18CS51",
            cr: 3
          },
          { sub: "Computer Networks and Secutrity", code: "18CS52", cr: 4 },
          { sub: "Database Management System", code: "18CS53", cr: 4 },
          { sub: "Automata theory and Computability", code: "18CS54", cr: 3 },
          { sub: "Application Development using Python", code: "18CS55", cr: 3 },
          { sub: "Unix Programming", code: "18CS56", cr: 3 },
          { sub: "Computer Network Laboratory", code: "18CSL57", cr: 2 },
          { sub: "DBMS Laboratory with mini project", code: "18CSL58", cr: 2 },
          { sub: "Environemental Studies", code: "18CIV59", cr: 1 }
        ]
      },
      {
        id: 6,
        year: 3,
        sem: 6,
        sublist: [
          { sub: "File Structures", code: "18IS61", cr: 4 },
          { sub: "Software Testing", code: "18IS62", cr: 4 },
          { sub: "Web Technology and its applications", code: "18IS63", cr: 4 },
          { sub: "Professional Elective-1", code: "18CS64X", cr: 3 },
          { sub: "Open Elective-A", code: "18CS65X", cr: 3 },
          { sub: "Software Testing Laboratory", code: "18ISL66", cr: 2 },
          {
            sub: "File Structures Laboratory with mini project",
            code: "18ISL67",
            cr: 2
          },
          { sub: "Mobile Application Development", code: "18CSMP68", cr: 2 }
        ]
      },
      {
        id: 7,
        year: 4,
        sem: 7,
        sublist: [
          {
            sub: "Artificial Intelligence and Machine Learning",
            code: "18CS71",
            cr: 4
          },
          { sub: "Big Data Analytics", code: "18CS72", cr: 4 },
          { sub: "Professional Elective - 2", code: "18CS73", cr: 3 },
          { sub: "Professional Elective - 3", code: "18CS74X", cr: 3 },
          { sub: "Open Elective - B", code: "18CS75X", cr: 3 },
          {
            sub: "Artificial Intelligence and Machine Learning Laboratory",
            code: "18CSL76",
            cr: 2
          },
          {
            sub: "Project Work Phase - 1",
            code: "18CSP77",
            cr: 2
          }
        ]
      }
    ],
    CSE: [
      {
        id: 1,
        year: 1,
        sem: 1,
        sublist: [
          { sub: "Calculus and Linear Algebra", code: "18MAT11", cr: 4 },
          { sub: "Engineering Chemistry", code: "18CHE12/22", cr: 4 },
          { sub: "C Programmin for Problem Solving", code: "18CHEL13/23", cr: 3 },
          { sub: "Basic Electronics", code: "18ELN14/24", cr: 3 },
          { sub: "Elements of Mechanical Engineering", code: "18ME15/25", cr: 3 },
          { sub: "Engineering Chemisty Laboratory", code: "18CHEL16/26", cr: 1 },
          { sub: "C Programmin Laboratory", code: "18CPL17/27", cr: 1 },
          { sub: "Technical English-I", code: "18EGH18", cr: 1 }
        ]
      },
      {
        id: 2,
        year: 1,
        sem: 2,
        sublist: [
          {
            sub: "Advanced Calculus and Numerical Methods",
            code: "18MAT21",
            cr: 4
          },
          { sub: "Engineering Chemistry", code: "18CHE12/22", cr: 4 },
          { sub: "C Programmin for Problem Solving", code: "18CHEL13/23", cr: 3 },
          { sub: "Basic Electronics", code: "18ELN14/24", cr: 3 },
          { sub: "Elements of Mechanical Engineering", code: "18ME15/25", cr: 3 },
          { sub: "Engineering Chemisty Laboratory", code: "18CHEL16/26", cr: 1 },
          { sub: "C Programmin Laboratory", code: "18CPL17/27", cr: 1 },
          { sub: "Technical English-II", code: "18EGH28", cr: 1 }
        ]
      },
      {
        id: 3,
        year: 2,
        sem: 3,
        sublist: [
          {
            sub: "Transform Calculus, Fourier Series and Numerical Techniques",
            code: "18MAT31",
            cr: 3
          },
          { sub: "Data Structures and Applications", code: "18CS32", cr: 4 },
          { sub: "Analog and Digital Electronics", code: "18CS33", cr: 3 },
          { sub: "Computer Organisation", code: "18CS34", cr: 3 },
          { sub: "Software Engineering", code: "18CS35", cr: 3 },
          { sub: "Discrete Mathematical Strucutres", code: "18CS36", cr: 3 },
          {
            sub: "Analog and Digital Electronics Laboratory",
            code: "18CSL37",
            cr: 2
          },
          { sub: "Data Structure Laboratory", code: "18CSL38", cr: 2 },
          {
            sub:
              "Aadalitha/Vyavaharika Kannada or Constitution of India, Professional Ethics and CyberLaw",
            code: "18KAK39/KVK39/CPC39",
            cr: 1
          }
        ]
      },
      {
        id: 4,
        year: 2,
        sem: 4,
        sublist: [
          {
            sub: "Complex Analysis, Probability and Statisctical Methods",
            code: "18MAT41",
            cr: 3
          },
          { sub: "Design and Analysis of Algorithms", code: "18CS42", cr: 4 },
          { sub: "Operating Systems", code: "18CS43", cr: 3 },
          { sub: "Microcontroller and Embedded Systems", code: "18CS44", cr: 3 },
          { sub: "Object Oriented Concepts", code: "18CS45", cr: 3 },
          { sub: "Data Communication", code: "18CS46", cr: 3 },
          {
            sub: "Design and Analysis of Algorithms Laboratory",
            code: "18CSL47",
            cr: 2
          },
          {
            sub: "Microcontroller and Embedded Systems Laboratory",
            code: "18CSL48",
            cr: 2
          },
          {
            sub:
              "Aadalitha/Vyavaharika Kannada or Constitution of India, Professional Ethics and CyberLaw",
            code: "18KAK49/KVK49/CPC49",
            cr: 1
          }
        ]
      },
      {
        id: 5,
        year: 3,
        sem: 5,
        sublist: [
          {
            sub: "Management, Entrepreneurship for IT Industry",
            code: "18CS51",
            cr: 3
          },
          { sub: "Computer Networks and Secutrity", code: "18CS52", cr: 4 },
          { sub: "Database Management System", code: "18CS53", cr: 4 },
          { sub: "Automata theory and Computability", code: "18CS54", cr: 3 },
          { sub: "Application Development using Python", code: "18CS55", cr: 3 },
          { sub: "Unix Programming", code: "18CS56", cr: 3 },
          { sub: "Computer Network Laboratory", code: "18CSL57", cr: 2 },
          { sub: "DBMS Laboratory with mini project", code: "18CSL58", cr: 2 },
          { sub: "Environemental Studies", code: "18CIV59", cr: 1 }
        ]
      },
      {
        id: 6,
        year: 3,
        sem: 6,
        sublist: [
          { sub: "System softwares and compilers", code: "18CS61", cr: 4 },
          { sub: "Computer Graphics and Visualization", code: "18CS62", cr: 4 },
          { sub: "Web Technology and its applications", code: "18CS63", cr: 4 },
          { sub: "Professional Elective-1", code: "18CS64X", cr: 3 },
          { sub: "Open Elective-A", code: "18CS65X", cr: 3 },
          { sub: "System Software Laboratory", code: "18CSL66", cr: 2 },
          {
            sub: "Computer Graphics Laboratory with mini project",
            code: "18CSL67",
            cr: 2
          },
          { sub: "Mobile Application Development", code: "18CSMP68", cr: 2 }
        ]
      },
      {
        id: 7,
        year: 4,
        sem: 7,
        sublist: [
          {
            sub: "Artificial Intelligence and Machine Learning",
            code: "18CS71",
            cr: 4
          },
          { sub: "Big Data Analytics", code: "18CS72", cr: 4 },
          { sub: "Professional Elective - 2", code: "18CS73", cr: 3 },
          { sub: "Professional Elective - 3", code: "18CS74X", cr: 3 },
          { sub: "Open Elective - B", code: "18CS75X", cr: 3 },
          {
            sub: "Artificial Intelligence and Machine Learning Laboratory",
            code: "18CSL76",
            cr: 2
          },
          {
            sub: "Project Work Phase - 1",
            code: "18CSP77",
            cr: 2
          }
        ]
      }
    ]
  };
  
  export default data1;
  