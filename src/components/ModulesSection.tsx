"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import "./ModulesSection.css";
import teacher1 from "../images/module_images/1 nitya.jpeg";
import teacher2 from "../images/module_images/2 nitya.jpeg";
import teacher3 from "../images/module_images/3 nitya.png";
import teacher4 from "../images/module_images/4 nitya.jpeg";
import teacher5 from "../images/module_images/5 nitya.jpeg";
import teacher6 from "../images/module_images/6 nitya.png";
import teacher7 from "../images/module_images/7 nitya.jpeg";
import teacher8 from "../images/module_images/8 nitya.jpeg";
import teacher9 from "../images/module_images/9 nitya.jpeg";
import teacher10 from "../images/module_images/10 nitya.jpeg";
import teacher11 from "../images/module_images/11 nitya.jpeg";

// Correctly defining `modules` as an array
const modules = [
  {
    srno: 1,
    id: "I",
    title: "Teaching Strategies & Pedagogical Approaches					",
    image: teacher1,
    skills: [
      "Lesson planning",
      "Inquiry-based learning",
      "Critical thinking",
      "Student engagement",
    ],
    inside: [
      {
        title: "1. Active Learning",
        description:
          "Engage students through interactive and participatory teaching techniques",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Approaches to Teaching and Learning Skills (ATL Skills)",
        description:
          "Implement evidence-based strategies for improved learning outcomes",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Collaborative Teaching Strategies	",
        description:
          "Foster teamwork among educators for more effective instruction",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Creative Teaching Methodologies",
        description:
          "Apply innovative techniques to make learning more engaging",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Creativity in Teaching and Learning",
        description: "Integrate creative problem-solving into lessons",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Differentiated Learning in Classrooms",
        description: "Tailor instruction to individual student needs",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Experiential Learning",
        description: "Engage students through hands-on activities",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "8. Flipping your Teaching",
        description: "Flip the classroom to enhance student engagement",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "9. Inquiry-Based Learning",
        description: "Encourage students to explore and solve problems",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "10. Integrating STEM and STEAM in Everyday Learning",
        description: "Integrate STEM and STEAM into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "11. Inter-Disciplinary Teaching",
        description:
          "Integrate interdisciplinary teaching into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "12. Language Teaching and Learning in the Primary Classrooms",
        description: "Integrate language teaching into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Primary Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "13. Mathematics as a Second Language",
        description: "Integrate mathematics teaching into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Math Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "14. Storytelling as Pedagogy",
        description: "Integrate storytelling into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "15. Teaching Social Science - Making a Meaningful Impact",
        description: "Integrate social science teaching into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each",
        targetAudience: [
          "So. Studies Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "16. Visible Thinking Routines",
        description:
          "Integrate visible thinking routines into everyday learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each",
        targetAudience: [
          "Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 2,
    id: "II",
    title: "Classroom Management & Student Engagement					",
    image: teacher2,
    skills: [
      "Discipline techniques",
      "Conflict resolution",
      "Interactive teaching",
    ],
    inside: [
      // 1. Classroom Management
      // 2. Dealing with Difficult and Challenging People
      // 3. Developing Behaviours for Excellent Learning in Our Students
      // 4. Happy Classrooms
      // 5. How to Tackle Underperforming Teachers to Get Better Standards from Students
      // 6. Reaching Every Student Through Differentiation
      // 7. The Basics of Effective Classroom Management and Organisation
      {
        title: "1. Classroom Management",
        description: "Establish a well-structured, disciplined classroom",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Dealing with Difficult and Challenging People",
        description: "Manage classroom behavior effectively",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "3. Developing Behaviours for Excellent Learning in Our Students",
        description: "Develop behaviors for excellent learning",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Happy Classrooms",
        description: "Create a positive classroom environment",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "5. How to Tackle Underperforming Teachers to Get Better Standards from Students",
        description:
          "Tackle underperforming teachers to improve student standards",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Reaching Every Student Through Differentiation",
        description:
          "Differentiate instruction to meet individual student needs",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "7. The Basics of Effective Classroom Management and Organisation",
        description: "Establish a well-structured, disciplined classroom",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 3,
    id: "III",
    title: "Curriculum Development 					",
    image: teacher3,
    skills: [
      "Lesson structuring",
      "Outcome-based assessments",
      "Cross-disciplinary learning",
      "CBSE alignment",
    ],
    inside: [
      // 1.Curriculum Design and Planning for Primary, Middle and Secondary Years
      // 2. Curriculum Design and Planning in Early Years
      // 3. Learning Outcome to Objectives - Backward by Design Principle
      // 4. Learning Outcomes & Pedagogies
      {
        title:
          "1. Curriculum Design and Planning for Primary, Middle and Secondary Years",
        description: "Develop structured lesson plans",
        duration: "Total 6 hours, 2 sessions of 3 hours each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Curriculum Design and Planning in Early Years",
        description: " Tailor curricula for early childhood education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Pre-Primary Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "3. Learning Outcome to Objectives - Backward by Design Principle",
        description: "Develop backward-designed lesson plans",
        duration: "Total 6 hours, 2 sessions of 3 hours each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Learning Outcomes & Pedagogies",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 4,
    id: "IV",
    title: "Educational Policies: NEP 2020 and NCF 2023					",
    image: teacher4,
    skills: ["Policy implementation", "CBSE compliance", "Education reforms"], 
    inside: [
      // 1.  Implementation of NEP 2020 - A 4D Framework
      // 2. National Education Policy 2020
      // 3. National Curriculum Framework for School Education 2023
      // 4. National Curriculum Framework: Foundational Stage
      {
        title: "1. Implementation of NEP 2020 - A 4D Framework",
        description: "Apply NEP 2020 reforms in classrooms",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. National Education Policy 2020",
        description: "Implement NEP 2020 reforms",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. National Curriculum Framework for School Education 2023",
        description: "Implement NCF 2023 reforms",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. National Curriculum Framework: Foundational Stage",
        description: "Implement NCF reforms",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 5,
    id: "V",
    title: "Assessment & Evaluation",
    image: teacher5,
    skills: [
      "Formative assessments",
      "Data analysis",
      "Feedback techniques",
      "Student performance tracking",
    ],
    inside: [
      //       1. Assessment Trends in Early Years
      // 2. Competency-Based Assessment (Secondary Level)
      // 3. Power of Formative Assessments in the Classrooms
      // 4. Strengthening Assessment & Evaluation Practices
      // 5. The Art of Giving Meaningful Feedback to Students
      {
        title: "1. Assessment Trends in Early Years",
        description: "Understand evolving assessment practices",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Pre-Primary Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Competency-Based Assessment (Secondary Level)",
        description: "Implement competency-based assessment",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Secondary Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Power of Formative Assessments in the Classrooms",
        description: "Implement formative assessment",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Strengthening Assessment & Evaluation Practices",
        description: "Implement assessment and evaluation practices",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. The Art of Giving Meaningful Feedback to Students",
        description: "Give meaningful feedback to students",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 6,
    id: "VI",
    title: "Special Education & Inclusion",
    image: teacher6,
    skills: [
      "Differentiated instruction",
      "Neurodiversity support",
      "Inclusive teaching",
      "Adaptive learning strategies",
    ],
    inside: [
      //       1. Capacity Building Programme for Gender Sensitization
      // 2. Gender Sensitivity in Schools
      // 3. Gifted Education
      // 4. Inclusive Education
      // 5. Social and Emotional Competencies in the Classroom
      // 6. Adolescent Education Program
      {
        title: "1. Capacity Building Programme for Gender Sensitization",
        description: "Promote gender-inclusive education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Gender Sensitivity in Schools",
        description: "Promote gender-inclusive education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 2 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Gifted Education",
        description: "Promote gifted education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 3 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Inclusive Education",
        description: "Promote inclusive education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Social and Emotional Competencies in the Classroom",
        description: "Promote social and emotional competencies",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Adolescent Education Program",
        description: "Promote adolescent education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 7,
    id: "VII",
    title: "Psychological Well-being & Life Skills",
    image: teacher7,
    skills: [
      "Stress management",
      "Emotional intelligence",
      "Resilience building",
      "Teacher-student well-being",
    ],
    inside: [
      //       VII. Psychological Well-being & Life Skills						Target Audience	Module  Duration	No. of days
      // 1. Importance of Life Skills Integration						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 2. Life Skills (Basic)						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 3. Life Skills (Advance)						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 4. Metacognition and Critical Thinking in Classrooms						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 5. Promoting Mental Health and Wellness among Students						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 6. Stress Management						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 7. Teaching Mindfulness in the Classroom						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 8.Best Practices in Pastoral Care						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 9. School Health and Wellness						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 10. Disaster Management						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each	2 days
      // 11. Environmental Education and Conversation of Natural Resources						 Teachers, Subject HOD's,  Counsellors, Special Educators, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each	2 days
      {
        title: "1. Importance of Life Skills Integration",
        description: "Teach essential life skills",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Life Skills (Basic)",
        description: "Teach essential life skills",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Life Skills (Advance)",
        description: "Teach advanced life skills",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Metacognition and Critical Thinking in Classrooms",
        description: "Teach metacognition and critical thinking",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Promoting Mental Health and Wellness among Students",
        description: "Teach mental health and wellness",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Stress Management",
        description: "Teach stress management",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Teaching Mindfulness in the Classroom",
        description: "Teach mindfulness",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "8. Best Practices in Pastoral Care",
        description: "Teach pastoral care",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "9. School Health and Wellness",
        description: "Teach school health and wellness",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "10. Disaster Management",
        description: "Teach disaster management",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "11. Environmental Education and Conversation of Natural Resources",
        description: "Teach environmental education and conservation",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Counselors",
          "Special Educators",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 8,
    id: "VIII",
    title: "Ethics, Values & Personal Development",
    image: teacher8,
    skills: [
      "Ethical decision-making",
      "Values education",
      "Personal development",
    ],
    inside: [
      //       VIII.  Ethics, Values & Personal Development						Target Audience	Module  Duration	No. of days
      // 1. Bloom's Taxonomy						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 2. Ethics & Integrity						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each 	2 days
      // 3. Values Education						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 4. The Art of Reflective Thinking						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 5. Theory of Knowledge						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 6. Multiple Intelligence						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 7. Every Teacher Being a TOK Teacher						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each 	2 days
      {
        title: "1. Bloom's Taxonomy",
        description: "Implement higher-order thinking strategies in teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Ethics & Integrity",
        description: "Teach ethical decision-making",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Values Education",
        description: "Teach values education",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. The Art of Reflective Thinking",
        description: "Teach reflective thinking",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Theory of Knowledge",
        description: "Teach theory of knowledge",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Multiple Intelligence",
        description: "Teach multiple intelligence",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Every Teacher Being a TOK Teacher",
        description: "Teach TOK",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 9,
    id: "IX",
    title: "Educational Technology & Innovation",
    image: teacher9,
    skills: [
      "AI in education",
      "Digital tools",
      "Blended learning",
      "Tech-enabled teaching",
    ],
    inside: [
      //       IX.  Educational Technology & Innovation						Target Audience	Module  Duration	No. of days
      // 1. Art Integration						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 2. Arts Education – Using the Arts (Dance, Drama, and Music) to Support Learning						 Co Scholastic Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 3. Cyber Safety & Security						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 4. Deep Dive Into NCF Aligned Innovation						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 5. Design Thinking for Classrooms						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 6. Developing Curiosity & Creativity with Science						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 7. Enhancing Critical Thinking in Early Years						 Pre primary Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each 	2 days
      // 8. Integrating Technology in the Classrooms						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 9. Use of Artificial Intelligence in Classrooms						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 10. Critical and Creative Thinking						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 11. School Libraries						 Teachers, Subject HOD's, Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      {
        title: "1. Art Integration",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "2. Arts Education – Using the Arts (Dance, Drama, and Music) to Support Learning",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Co Scholastic Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Cyber Safety & Security",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Deep Dive Into NCF Aligned Innovation",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Design Thinking for Classrooms",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Developing Curiosity & Creativity with Science",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Enhancing Critical Thinking in Early Years",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "Pre primary Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "8. Integrating Technology in the Classrooms",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "9. Use of Artificial Intelligence in Classrooms",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "10. Critical and Creative Thinking",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "11. School Libraries",
        description: "Leverage digital tools for effective teaching",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
  {
    srno: 10,
    id: "X",
    title: "Leadership & Professional Development",
    image: teacher10,
    skills: [
      "Mentorship",
      "Strategic decision-making",
      "Communication skills",
      "Leadership transition",
    ],
    inside: [
      //       X.  Leadership & Professional Development						Target Audience	Module  Duration	No. of days
      // 1. Career Guidance						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 2. Change Management						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 3. Educating Parents About Education						 Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each 	2 days
      // 4. Empowering Educators Transforming Classrooms						 Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each 	2 days
      // 5. Induction Training Programme (Guru Dakshta)						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 6. Leading Transformation						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 7. Mentorship						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 8. Teachers as Leaders						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 9. Understanding Research Skills						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      // 10. Working with Parents and the Community						 Coordinators, Vice Principals and Principals	Total 6 hours, 2 sessions of  3 hours  each	1 day
      {
        title: "1. Career Guidance",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },
      {
        title: "2. Change Management",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },
      {
        title: "3. Educating Parents About Education",
        description: "Develop leadership skills among educators",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },
      {
        title: "4. Empowering Educators Transforming Classrooms",
        description: "Develop leadership skills among educators",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "5. Induction Training Programme (Guru Dakshta)",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "6. Leading Transformation",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "7. Mentorship",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "8. Teachers as Leaders",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "9. Understanding Research Skills",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },

      {
        title: "10. Working with Parents and the Community",
        description: "Develop leadership skills among educators",
        duration: "Total 6 hours, 2 sessions of  3 hours  each | 1 day",
        targetAudience: ["Coordinators", "Vice Principals", "Principals"],
      },
    ],
  },
  {
    srno: 11,
    id: "XI",
    title: "Subject-Specific Training",
    image: teacher11,
    skills: [
      "Core subject expertise",
      "Pedagogical enhancement",
      "Interdisciplinary teaching",
      "Best teaching practices",
    ],
    inside: [
      // 1. Getting Creative with English Teaching						 English Teachers, English HOD's, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each	2 days
      // 2. Subject-Specific Workshops - Math Strategies						 Math Teachers, Math HOD's, Coordinators, Vice Principals and Principals	Total 12 hours, 4 sessions of  3 hours  each	1 day
      {
        title: "1. Getting Creative with English Teaching",
        description: "Enhance English teaching methodologies",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 2 days",
        targetAudience: [
          "English Teachers",
          "English HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Subject-Specific Workshops - Math Strategies",
        description: "Strengthen math teaching approaches",
        duration: "Total 12 hours, 4 sessions of  3 hours  each | 1 day",
        targetAudience: [
          "Math Teachers",
          "Math HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
    ],
  },
];

const ModulesSection = () => {
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(null);

  const toggleModule = (id: number) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <section className="modules-section">
      <div className="modules-container">
        <div className="modules-header">
          <h2 className="modules-title">Educator Growth Modules</h2>
          <p className="modules-description">
            NITYA offers a diverse range of educator training programs designed
            to enhance teaching effectiveness and student engagement. Each
            module is crafted to address real classroom challenges.
          </p>
        </div>

        <div className="modules-list">
          {modules.map((module) => (
            <div
              key={module.srno}
              className={`module-item ${
                expandedModuleId === module.srno ? "module-item--expanded" : ""
              }`}
            >
              <button
                className="module-header"
                onClick={() => toggleModule(module.srno)}
                aria-label={`${
                  expandedModuleId === module.srno ? "Collapse" : "Expand"
                } module: ${module.title}`}
                aria-expanded={expandedModuleId === module.srno}
              >
                <div className="module-image-wrapper">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="module-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 60px"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPTE+Pj4xMzQ4RVhCS0ZWNjU2RUhYX1xfODJgaHBYYFhYXFr/2wBDARUXFx4aHR4eHVpaOCo4WlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <div className="module-info">
                  <div className="module-title">
                      <div>
                      {module.id}. {module.title}
                      <div className="module-duration">
                        {module.inside.length}{" "}
                        {module.inside.length === 1 ? "Module" : "Modules"}
                      </div>
                      </div>
                    <ChevronDown className="module-chevron" size={24} />
                  </div>
                </div>
              </button>
              <div className="module-content">
                <ul className="module-content-inner">
                  {module.inside.map((inside) => (
                    <li key={inside.title}>
                      <h3>{inside.title}</h3>
                      <p>{inside.description}</p>
                      <p style={{ color: "var(--primary-green)" }}>
                        <b>Duration:</b> {inside.duration}
                      </p>
                      <br />
                      <i style={{ color: "var(--primary-blue)" }}>
                        <p>
                          <b>Target Audience:</b>{" "}
                          {inside.targetAudience.join(", ")}
                        </p>
                      </i>
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
                
                <div className="module-skills">
                  <p>
                    <b>Skills:</b>
                  </p>
                <ul className="flex flex-wrap gap-4">
                  {module.skills.map((skill) => (
                      <li
                        className="bg-[#f3f3f3] px-2 py-1 rounded-md"
                        key={skill}
                      >
                        {skill}
                      </li>
                  ))}
                </ul>
              </div>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
