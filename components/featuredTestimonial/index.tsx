"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

interface FeaturedTestimonialProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  autoPlayInterval?: number;
}

export default function FeaturedTestimonial({
  title = "What Our Clients Say",
  subtitle = "Real stories from leaders who've transformed their careers and organizations",
  testimonials = [
    {
      id: 1,
      quote: `I am writing to recommend Oluwatoyin (Toyin) Ademola as a coach in leadership for your organization’s staff. I have known Toyin for the past five months and I can testify about her services. Hired as a coach for leadership coaching by The Hunger Project, she helped me perceive leadership role in a different way. I can attest that I have improved my role and my employer (The Hunger Project) values me more as a leader than before. I have no doubts that Toyin’s services would be of valuable to your team in your organization.`,
      name: "Henry Chungu",
      title: "Project Lead",
      company: "The Hunger Project Malawi",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "I have used the VATOR for over a year now and it has really made it effortless for potential clients to fully engage and understand the services I provide. More importantly, it enables clients to activate their rational and emotional feelings when considering my pitch. I can literally see the transitions at work on their faces and body language. Thanks, Toyin, the VATOR pitch is a real champ!",
      name: "Lebari Ukpong",
      title: "Education Consultant",
      company: "Inside Edge Limited",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "This amazing technique that Toyin shares with us are absolutely necessary for the Future Way of Work. When we have anyone chatting with us we need to focus on how we communicate and what we communicate but also the specificity of why we are communicating. This is the perfect communication strategy and everyone should learn this as a skill and use it in the workplace today!",
      name: "Kevin Britz",
      title: "Communication Strategist",
      company: "Future of Work Institute",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Toyin is a great Business coach. She brings along a lot of experience and skills and working with her has been a transformative experience. Her ability to connect and relate with various personalities has helped push me to achieve both professional and personal goals. She also does it so seamlessly it does not feel like coaching, yet she is very thorough and professional!",
      name: "Jaiye Titilove",
      title: "Executive Principal",
      company: "Standard Chartered Bank",
      rating: 5,
    },
  ],
  ctaPrimary = "Book a Session",
  ctaSecondary = "View All Testimonials",
  autoPlayInterval = 5000,
}: FeaturedTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, currentIndex, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={styles.featuredTestimonial}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            TESTIMONIALS
          </span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderContainer}>
            <div
              className={`${styles.testimonialCard} ${
                isAnimating ? styles.animating : ""
              }`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.quoteIcon}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={styles.rating}>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className={styles.quote}>
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  <span>{currentTestimonial.name.charAt(0)}</span>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {currentTestimonial.name}
                  </h4>
                  <p className={styles.authorTitle}>
                    {currentTestimonial.title}
                  </p>
                  <p className={styles.authorCompany}>
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Join hundreds of satisfied clients who have achieved remarkable
            results
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/book" className={styles.ctaPrimary}>
              {ctaPrimary}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/testimonials" className={styles.ctaSecondary}>
              {ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
