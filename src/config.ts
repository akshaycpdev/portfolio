export const config = {
    developer: {
        name: "Akshay",
        fullName: "Akshay C P",
        title: "AI/ML & Full-Stack Developer",
        description: "AI/ML undergraduate building full-stack AI applications with Python, FastAPI, React and LLMs."
    },
    social: {
        github: "akshaycpdev",
        email: "choutajeakshay@gmail.com",
        location: "Mangaluru, India"
    },
    about: {
        title: "About Me",
        description: "I'm an AI & Machine Learning undergraduate at Alva's Institute of Engineering and Technology. I build and deploy full-stack AI applications, including chatbots, RAG pipelines and recommendation systems, using Python, FastAPI, React and LLMs like Google Gemini and Groq. I enjoy turning ML ideas into scalable, real-world products, from career-guidance platforms to tools that help farmers."
    },
    experiences: [
        {
            position: "B.E. in AI & Machine Learning",
            company: "Alva's Institute of Engineering and Technology, Mijar",
            period: "2023 - Present",
            location: "Karnataka, India",
            description: "Pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning while building full-stack AI projects with LLMs, RAG pipelines and vector search.",
            responsibilities: [],
            technologies: ["Python", "FastAPI", "React", "LLMs", "RAG"]
        },
        {
            position: "Python Instructor (Volunteer)",
            company: "Python Prayana, AIET Outreach",
            period: "2025",
            location: "Karnataka, India",
            description: "Taught Python as a volunteer instructor in a 15-day outreach program covering 8 local schools.",
            responsibilities: [],
            technologies: ["Python", "Teaching"]
        },
        {
            position: "Hackathon & Ideathon Participant",
            company: "AIET x Avinya Techknows, BIT Bangalore",
            period: "2025",
            location: "Bangalore, India",
            description: "Built a working prototype under time pressure at a hackathon, and pitched at Ideathon 2025, a national-level idea pitching contest at Bangalore Institute of Technology (September 2025).",
            responsibilities: [],
            technologies: ["Prototyping", "Pitching", "Teamwork"]
        },
        {
            position: "Pre-University (PCMB)",
            company: "Amara Jyothi Pre-University College",
            period: "2022 - 2023",
            location: "Sullia, Karnataka",
            description: "Completed Pre-University course with Physics, Chemistry, Mathematics and Biology.",
            responsibilities: [],
            technologies: ["PCMB"]
        },
        {
            position: "SSLC",
            company: "Rotary English Medium High School",
            period: "2020 - 2021",
            location: "Sullia, Karnataka",
            description: "Completed Secondary School Leaving Certificate.",
            responsibilities: [],
            technologies: []
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Mock Interview Platform",
            category: "AI / Full-Stack",
            technologies: "JavaScript, Google Gemini API, Vapi AI, Firebase, Vercel",
            image: "/images/mock-interview.svg",
            description: "A full-stack mock-interview app that uses Google Gemini to generate role-specific questions and evaluate answers in real time, with voice-based interviews via Vapi AI. Firebase handles auth and data; deployed on Vercel.",
            link: "https://github.com/akshaycpdev/ai_mock_interviews"
        },
        {
            id: 2,
            title: "CarrierAI",
            category: "AI / RAG",
            technologies: "FastAPI, React, PostgreSQL, LangChain, Qdrant, Groq LLM",
            image: "/images/carrierai.svg",
            description: "An AI career-guidance platform that parses resumes and gives personalized skill-based feedback, recommends matching roles using LangChain and Qdrant vector search, and includes a chatbot for role-fit questions.",
            link: ""
        },
        {
            id: 3,
            title: "KisanAI",
            category: "AI / Agriculture",
            technologies: "FastAPI, Satellite Imagery, AI Chatbot, NLP",
            image: "/images/kisanai.svg",
            description: "A smart agriculture assistant that detects crop diseases from images, recommends crops from satellite-based soil health analysis, and offers a multilingual chatbot for farmers with limited English.",
            link: ""
        },
        {
            id: 4,
            title: "Resume Analyzer",
            category: "AI / Python",
            technologies: "Python, NLP, LLMs",
            image: "/images/resume-analyzer.svg",
            description: "An AI-powered resume analyzer and interview coach.",
            link: "https://github.com/akshaycpdev/resume-analyzer"
        }
    ],
    contact: {
        email: "choutajeakshay@gmail.com",
        github: "https://github.com/akshaycpdev",
        linkedin: "https://www.linkedin.com/in/akshaycp05/",
        resume: "/Akshay_Resume.pdf"
    },
    skills: {
        develop: {
            title: "AI / ML",
            description: "Building LLM apps, RAG pipelines & chatbots",
            details: "Developing AI applications with Google Gemini and Groq LLMs, LangChain and Qdrant vector search: resume parsing, job recommendation, multilingual chatbots and image-based crop disease detection.",
            tools: ["Python", "LLMs", "RAG Pipelines", "Google Gemini API", "Groq", "LangChain", "Qdrant", "Data Analysis"]
        },
        design: {
            title: "FULL-STACK",
            description: "APIs, web apps & deployment",
            details: "Building and deploying full-stack apps with FastAPI backends, React frontends and PostgreSQL or Firebase, hosted on Vercel and Render.",
            tools: ["FastAPI", "React.js", "JavaScript", "HTML", "CSS", "SQL", "PostgreSQL", "Firebase", "Git", "Vercel"]
        }
    }
};
