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
    title: "Core Values and Ethics",
    description:
          "Nurturing responsible, empathetic, and ethically grounded educators for a holistic school community",
    image: teacher1,
    // skills: [
    //   "Lesson planning",
    //   "Inquiry-based learning",
    //   "Critical thinking",
    //   "Student engagement",
    // ],
    inside: [
      {
        title: "1. Adolescent Education Programme",
        description:
          "Engage students through interactive and participatory teaching techniques",
        duration: "Total 2 Days | 1 day",
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
        description:
          "Implement evidence-based strategies for improved learning outcomes",
         duration: "Total 2 Days | 1 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "3. Gender Sensitivity in Schools 	",
        description:
          "Foster teamwork among educators for more effective instruction",
        duration: "Total 06 hours | 1 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Inclusive Education",
        description:
          "Apply innovative techniques to make learning more engaging",
        duration: "Total 12 hours | 2 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      
      {
        title: "5. Life skills (Advance) ",
        description: "Integrate creative problem-solving into lessons",
        duration: "Total 06 hours | 1 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },

      {
        title: "6. Life skills (Basic) ",
        description:
          "Apply innovative techniques to make learning more engaging",
        duration: "Total 06 hours | 1 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Promoting Mental Health and Wellness among Students",
        description: "Tailor instruction to individual student needs",
        duration: "Total 06 hours | 1 days",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "8. School Health & Wellness",
        description: "Engage students through hands-on activities",
        duration: "Total 12 hours | 2 days",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "9. Values Education ",
        description: "Flip the classroom to enhance student engagement",
        duration: "Total 06 hours | 2 days",
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
    srno: 2,
    id: "II",
    title: "Knowledge and Practice					",
     description: "Building confident, skilled teachers through innovative pedagogies and subject-focused competencies.",
    image: teacher2,
    // skills: [
    //   "Discipline techniques",
    //   "Conflict resolution",
    //   "Interactive teaching",
    // ],
    inside: [
      // 1. Classroom Management
      // 2. Dealing with Difficult and Challenging People
      // 3. Developing Behaviours for Excellent Learning in Our Students
      // 4. Happy Classrooms
      // 5. How to Tackle Underperforming Teachers to Get Better Standards from Students
      // 6. Reaching Every Student Through Differentiation
      // 7. The Basics of Effective Classroom Management and Organisation
      {
        title: "1. Active Learning ",
        description: "Establish a well-structured, disciplined classroom",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. Competency-Based Assessment Secondary Level - Generic ",
        description: "Manage classroom behavior effectively",
        duration: "Total 12 hours | 2 day",
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
          "3. Critical & Creative Thinking ",
        description: "Develop behaviors for excellent learning",
        duration: "Total 12 hours | 2 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. Experiential Learning )",
        description: "Create a positive classroom environment",
        duration: "Total 12 hours | 2 day",
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
          "5. Learning outcomes & Pedagogies ",
        description:
          "Tackle underperforming teachers to improve student standards",
        duration: "Total 6 hours | 1 day",
         targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Storytelling as Pedagogy ",
        description:
          "Differentiate instruction to meet individual student needs",
        duration: "Total 6 hours | 1 day",
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
          "7. Cyber Safety & Security ",
        description: "Establish a well-structured, disciplined classroom",
        duration: "Total 6 hours | 1 day",
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
          "7. Use of Artificial Intelligence in Classrooms ",
        description: "Establish a well-structured, disciplined classroom",
        duration: "Total 6 hours | 1 day",
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
    title: "Professional Growth and Development 					",
    description: "Empowering educators to lead, grow, and thrive in an ever-evolving educational landscape.",
    image: teacher3,
    // skills: [
    //   "Lesson structuring",
    //   "Outcome-based assessments",
    //   "Cross-disciplinary learning",
    //   "CBSE alignment",
    // ],
    inside: [
      // 1.Curriculum Design and Planning for Primary, Middle and Secondary Years
      // 2. Curriculum Design and Planning in Early Years
      // 3. Learning Outcome to Objectives - Backward by Design Principle
      // 4. Learning Outcomes & Pedagogies
      {
        title:
          "1. National Curriculum Framework for School Education 2023 ",
        description: "Develop structured lesson plans",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "2. National Curriculum Framework: Foundational Stage ",
        description: " Tailor curricula for early childhood education",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Pre-Primary Teachers",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title:
          "3. Theory of Knowledge ",
        description: "Develop backward-designed lesson plans",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "4. National Education Policy 2020 ",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "5. Happy Classrooms ",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "6. Stress Management ",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 6 hours | 1 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "7. Classroom Management",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 12 hours | 2 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "8. Induction Training Programme (Guru Dakshata) ",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 18 hours | 3 day",
        targetAudience: [
          "Teachers",
          "Subject HODs",
          "Coordinators",
          "Vice Principals",
          "Principals",
        ],
      },
      {
        title: "9. Leading Transformation ",
        description: "Develop learning outcomes and pedagogies",
        duration: "Total 12 hours | 2 day",
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
            NITYA offers a diverse range of educator training programs designed to enhance teaching effectiveness and student engagement. Each module is crafted to address real classroom challenges and supports continuous professional development through customized, in-person training programs conducted on a request basis.
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
                  <div >
                      <div className="module-title">
                      {module.id}. {module.title}
                    </div>
                       <div className="module-description">
      {module.description}
    </div>
                   
                      <div className="module-duration">
                        {module.inside.length}{" "}
                        {module.inside.length === 1 ? "Module" : "Modules"}
                      </div>
                      
                      
                  </div>
                    <ChevronDown className="module-chevron" size={24} />
                </div>
              </button>
              <div className="module-content">
                <ul className="module-content-inner">
                  {module.inside.map((inside) => (
                    <li key={inside.title}>
                      <h3>{inside.title}</h3>
                      {/* <p>{inside.description}</p> */}
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
                
                {/* <div className="module-skills">
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
              </div> */}
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
