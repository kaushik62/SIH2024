// src/FAQ.js

import React, { useState } from 'react';


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the primary goal of Platform?",
            answer: "Our platform's primary goal is to create a skill-based social network that also enables individuals to connect with experienced Mentors who can provide guidance, support, and knowledge to help them achieve their personal and professional goals."
        },
        {
            question: "How do I become a Mentor on this Platform?",
            answer: "You can apply to become a Mentor by filling out and submitting the application form on our website. Once we receive and review your application, we will contact you with the next steps."
        },
        {
            question: "How do I find the right Mentor for my needs?",
            answer: "You can search for Mentors based on their location, industry, and expertise. You can also filter your search results by price, rating, and availability. Additionally, you can also request us to find you a Mentor based on your doubt!"
        },
        {
            question: "What can I expect from a mentorship relationship?",
            answer: "You can expect to receive guidance, support, and knowledge from your Mentor. You can also expect to receive feedback on your progress and advice on how to improve."
        },
        {
            question: "Are there any fees associated with using your mentorship services?",
            answer: "To ensure that you get the best advice and also ensure that the Mentors are rewarded for thier efforts, we do charge a fee that goes directly to the Mentors. However, we offer a 7-day free refund for our users who are not satisfied with the servies received."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <button
                        className="faq-question"
                        onClick={() => toggleAnswer(index)}
                    >
                        {faq.question}
                        <span className="arrow" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9660;</span>
                    </button>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
