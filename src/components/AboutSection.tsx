"use client";
import { ArrowRight } from "lucide-react";
import "./AboutSection.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import subtract from "../images/subtract.png";
import { supabase } from "@/lib/supabase";
import logo from "@/images/full-logo.png";
import CustomAlert from "./CustomAlert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    number: "",
    email: "",
    role: "",
    noOfTeachers: "",
    location: "",
    preferredDay: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateError, setDateError] = useState("");
  const cards = [
    {
      icon: subtract,
      text: "Traditional training isn't pace with educational advancements.",
    },
    {
      icon: subtract,
      text: "One-size-fits-all workshops fail to address specific teacher needs.",
    },
    {
      icon: subtract,
      text: "Training without structured impact measurement lacks effectiveness.",
    },
    {
      icon: subtract,
      text: "Schools need support to comply with CBSE CPD requirements.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isMobile, cards.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const isValidDay = (date: string) => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();
    // 0 is Sunday, 6 is Saturday, we want 1-6 (Monday-Saturday)
    return day >= 1 && day <= 6;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "preferredDay") {
      if (!value) {
        setDateError("");
        setFormData(prev => ({ ...prev, [name]: value }));
        return;
      }
      
      if (!isValidDay(value)) {
        setDateError("Please select a day between Monday and Saturday");
        return;
      }
      setDateError("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter out only Sunday
  const filterWeekends = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // Returns false for Sunday(0)
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      preferredDay: date ? date.toISOString().split('T')[0] : "",
    }));
  };

  const handleDownloadBrochure = () => {
    const brochureUrl = "https://cdn.shopify.com/s/files/1/0570/2415/1758/files/NITYA_Brochure_27.3.25_3_1.pdf?v=1746013824";
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.setAttribute('download', 'NITYA_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowAlert(false);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            ...formData,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      // Reset form
      setFormData({
        name: "",
        schoolName: "",
        number: "",
        email: "",
        role: "",
        noOfTeachers: "",
        location: "",
        preferredDay: "",
      });

      // Show custom alert
      setShowAlert(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  console.log(dateError);
  return (
    <section id="about" className="about-section">
      <CustomAlert 
        isOpen={showAlert}
        onClose={handleCloseAlert}
        onDownload={handleDownloadBrochure}
      />
      <div  className="about-container ">
        <div className="about-content">
          <h2 className="about-title md:items-center">
            What Is{" "}
            <Image
              width={100}
              height={100}
              src={logo}
              alt="NITYA"
              className="about-logo"
            />
          </h2>
          <p className="about-description">
            NITYA ensures that when teachers feel supported, they inspire
            students to thrive. By equipping educators with modern teaching
            strategies and technology, NITYA fosters a dynamic learning
            environment.
          </p>

          <h3 className="about-development-title ">
            Why Continuous Professional Development Matters?
          </h3>
          <div className="about-card-grid"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards.map((card, index) => {
              let className = "about-card";
              if (index === currentSlide) {
                className += " about-card--active";
              } else if (index === (currentSlide - 1 + cards.length) % cards.length) {
                className += " about-card--prev";
              } else if (index === (currentSlide + 1) % cards.length) {
                className += " about-card--next";
              }
              
              return (
                <div
                  key={index}
                  className={className}
                >
                  <Image
                    src={card.icon}
                    alt="Star"
                    width={35}
                    height={35}
                    className="about-card-icon"
                  />
                  <p className="about-card-text">{card.text}</p>
                </div>
              );
            })}
          </div>
          {isMobile && (
            <div className="about-slide-controls">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`about-slide-dot ${
                    index === currentSlide ? "about-slide-dot--active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div id="form-get-in-touch" className="about-form-container ">
          <h2 className="about-form-title">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="about-form-grid">
              <div className="about-form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="schoolName">School Name</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  placeholder="Enter your school name"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  autoComplete="organization"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleInputChange}
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Please enter valid 10 digit phone number"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="role">Role in the School</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  autoComplete="organization-title"
                  required
                >
                  <option disabled value="">Select Role</option>
                  <option value="school owner">School Owner</option>
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              <div className="about-form-field">
                <label htmlFor="noOfTeachers">Number of Teachers in School</label>
                <input
                  type="number"
                  id="noOfTeachers"
                  name="noOfTeachers"
                  placeholder="E.g. 25"
                  value={formData.noOfTeachers}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="location">School Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City or Area"
                  value={formData.location}
                  onChange={handleInputChange}
                  autoComplete="address-level2"
                  required
                />
              </div>
              <div className="about-form-field">
                <label htmlFor="preferredDay">Preferred Date for Training</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  filterDate={filterWeekends}
                  minDate={new Date()}
                  placeholderText="Select a date"
                  className="date-picker-input"
                  dateFormat="dd/MM/yyyy"
                  required
                />
              </div>
            </div>
            <div className="about-submit-div">
              <button
                type="submit"
                className="about-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <ArrowRight className="about-arrow-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
