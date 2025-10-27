// Personal Information
export const personalInfo = {
  name: "Nguyen Dat",
  title: "Data Scientist",
  tagline: "Turning Data into Insight",
  description: "Passionate Data Scientist with expertise in Machine Learning, Deep Learning, and Computer Vision. I transform complex data into actionable insights that drive business decisions.",
  email: "nguyendat@example.com",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "/avatar.jpg", // Placeholder - replace with actual image
};

// Social Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/nguyendat",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nguyendat",
    icon: "Linkedin"
  },
  {
    name: "Kaggle",
    url: "https://kaggle.com/nguyendat",
    icon: "Trophy"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/nguyendat",
    icon: "Twitter"
  }
];

// Skills organized by category
export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 80 },
      { name: "JavaScript", level: 75 },
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 95 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 82 },
    ]
  },
  {
    category: "Data Engineering & Tools",
    items: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "Apache Spark", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS (SageMaker, EC2)", level: 82 },
      { name: "Google Cloud Platform", level: 78 },
      { name: "Azure ML", level: 75 },
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "Matplotlib / Seaborn", level: 92 },
      { name: "Plotly / Dash", level: 88 },
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 80 },
    ]
  }
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Sales Forecasting using Time Series",
    description: "Built an advanced time series forecasting model using LSTM and ARIMA to predict sales trends with 94% accuracy. Deployed as a web dashboard for real-time predictions.",
    tags: ["Python", "TensorFlow", "Time Series", "LSTM", "Streamlit"],
    image: "/projects/sales-forecast.jpg",
    github: "https://github.com/nguyendat/sales-forecasting",
    demo: "https://sales-forecast-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Customer Segmentation with K-Means",
    description: "Developed a customer segmentation system using K-Means clustering and RFM analysis. Identified 5 distinct customer groups, enabling targeted marketing strategies that increased conversion by 32%.",
    tags: ["Python", "Scikit-learn", "K-Means", "Data Analysis", "Visualization"],
    image: "/projects/customer-segment.jpg",
    github: "https://github.com/nguyendat/customer-segmentation",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "Face Recognition App using CNN",
    description: "Created a real-time face recognition system using Convolutional Neural Networks with 98% accuracy. Implemented with OpenCV and deployed as a REST API.",
    tags: ["Deep Learning", "CNN", "OpenCV", "PyTorch", "FastAPI"],
    image: "/projects/face-recognition.jpg",
    github: "https://github.com/nguyendat/face-recognition",
    demo: "https://face-recognition-demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Sentiment Analysis for Product Reviews",
    description: "Built an NLP model to analyze customer sentiment from product reviews using BERT. Achieved 91% accuracy in classifying positive, negative, and neutral sentiments.",
    tags: ["NLP", "BERT", "Transformers", "Python", "Hugging Face"],
    image: "/projects/sentiment-analysis.jpg",
    github: "https://github.com/nguyendat/sentiment-analysis",
    demo: null,
    featured: false
  },
  {
    id: 5,
    title: "Churn Prediction Model",
    description: "Developed a machine learning model to predict customer churn with 89% accuracy using Random Forest and XGBoost. Integrated with CRM system for proactive retention strategies.",
    tags: ["Machine Learning", "XGBoost", "Feature Engineering", "Python"],
    image: "/projects/churn-prediction.jpg",
    github: "https://github.com/nguyendat/churn-prediction",
    demo: null,
    featured: false
  },
  {
    id: 6,
    title: "Real-time Object Detection System",
    description: "Implemented YOLO v8 for real-time object detection in video streams. Optimized for edge devices with 30+ FPS performance.",
    tags: ["Computer Vision", "YOLO", "Real-time Processing", "OpenCV"],
    image: "/projects/object-detection.jpg",
    github: "https://github.com/nguyendat/object-detection",
    demo: "https://object-detection-demo.com",
    featured: false
  }
];

// Work Experience
export const experience = [
  {
    id: 1,
    title: "Senior Data Scientist",
    company: "Tech Innovations Inc.",
    location: "Ho Chi Minh City, Vietnam",
    period: "2022 - Present",
    description: [
      "Led a team of 4 data scientists in developing ML models for customer behavior prediction",
      "Implemented automated ML pipelines reducing model deployment time by 60%",
      "Developed computer vision solutions for quality control, saving $500K annually"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "MLOps"]
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Solutions Ltd.",
    location: "Ho Chi Minh City, Vietnam",
    period: "2020 - 2022",
    description: [
      "Built predictive models for sales forecasting with 92% accuracy",
      "Created interactive dashboards for C-level executives using Tableau and Power BI",
      "Conducted A/B testing and statistical analysis to optimize marketing campaigns"
    ],
    technologies: ["Python", "Scikit-learn", "SQL", "Tableau", "Statistics"]
  },
  {
    id: 3,
    title: "Junior Data Analyst",
    company: "Data Insights Co.",
    location: "Hanoi, Vietnam",
    period: "2018 - 2020",
    description: [
      "Performed exploratory data analysis on large datasets (10M+ records)",
      "Developed ETL pipelines for data warehouse integration",
      "Created automated reporting systems reducing manual work by 80%"
    ],
    technologies: ["Python", "SQL", "Pandas", "Excel", "Power BI"]
  }
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "Understanding Machine Learning: A Practical Guide",
    excerpt: "Dive deep into the fundamentals of machine learning, from supervised to unsupervised learning, with practical examples and code snippets.",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Machine Learning",
    image: "/blog/ml-guide.jpg",
    slug: "understanding-machine-learning"
  },
  {
    id: 2,
    title: "AI Ethics: Building Responsible AI Systems",
    excerpt: "Explore the ethical considerations in AI development, including bias detection, fairness, transparency, and accountability in machine learning models.",
    date: "2024-09-28",
    readTime: "10 min read",
    category: "AI Ethics",
    image: "/blog/ai-ethics.jpg",
    slug: "ai-ethics-responsible-systems"
  },
  {
    id: 3,
    title: "Data Visualization Best Practices for Data Scientists",
    excerpt: "Learn how to create compelling and informative visualizations that tell a story with your data. Tips, tools, and techniques for effective data communication.",
    date: "2024-09-10",
    readTime: "6 min read",
    category: "Data Visualization",
    image: "/blog/data-viz.jpg",
    slug: "data-visualization-best-practices"
  }
];

// Education
export const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Vietnam National University",
    year: "2016 - 2018",
    description: "Specialized in Machine Learning and Statistical Analysis"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    year: "2012 - 2016",
    description: "Focus on Software Engineering and Algorithms"
  }
];

// Certifications
export const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023"
  },
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    year: "2022"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2021"
  }
];
