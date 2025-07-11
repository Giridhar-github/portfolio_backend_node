require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

const corsConfig = {
  origin: ["http://localhost:5173","https://portfolio-five-brown-t3mr74xxem.vercel.app/"],
  methods: ["GET"],
};

app.use(cors(corsConfig));
app.use(express.json());

app.use("/assets", express.static("public"));

const jwt_secret = process.env.JWT_SECRET;
const token = jwt.sign({ userid: "g!r!d#@r5045" }, jwt_secret, {
  expiresIn: "2y",
});

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token not found." });
  const recievedToken = authHeader.split(" ")[1];
  try {
    jwt.verify(recievedToken, jwt_secret);
    next();
  } catch (err) {
    res.status(403).json({ error: "INVALID TOKEN" });
  }
}

const personal_details = {
  name: "Giridhar M",
  place: "(Kerala, India)",
  photo: "assets/images/profile/profile_pic.png",
  job_role: "Web Developer",
  job_description:
    "As a web developer, I specialize in creating high-quality and engaging web experiences.",
  snapshot:
    "PHP Developer with 2 years of experience in web development. Skilled in using PHP, CodeIgniter, and front-end technologies like HTML5, CSS3, JavaScript, and jQuery todevelop scalable, responsive web applications. Proficient inMySQL for database management, with expertise in dataquerying and optimization. Known for problem-solving, teamcollaboration, and adaptability to new technologies. Seekingto leverage technical skills in a growth-oriented organization.",
  resume: "assets/images/resume/Giridhar_resume.pdf",
};

const technical_skills = [
  {
    title: "Backend Development",
    subtitle:
      "Build dynamic and interactive web applications using PHP. Develop and maintain server-side logic, databases, and APIs.",
  },
  {
    title: "Frontend Development",
    subtitle:
      "Work with HTML, CSS, JavaScript, and frameworks like Bootstrap & Tailwind CSS. Ensure seamless integration between backend and frontend components.",
  },
  {
    title: "Database Management",
    subtitle:
      "Design and optimize relational databases (MySQL). Write efficient queries and handle data operations securely.",
  },
  {
    title: "API Development & Integration",
    subtitle:
      "Develop RESTful APIs for seamless communication between systems. Integrate third-party APIs (payment gateways, authentication, etc.).",
  },
  {
    title: "Code Debugging & Troubleshooting",
    subtitle:
      "Identify and fix bugs, errors, and performance issues. Use debugging tools and logs to ensure smooth application performance.",
  },
  {
    title: "Version Control & Deployment",
    subtitle:
      "Manage code using Git/GitHub for version control. Deploy applications on servers, including CWP (CentOS Web Panel) & cloud hosting.",
  },
  {
    title: "Responsive & Mobile-Friendly Development",
    subtitle:
      "Ensure websites work seamlessly on all devices and screen sizes. Use modern CSS frameworks for responsive design.",
  },
];

const education = [
  {
    qualification: "Master of Computer Applications (MCA)",
    university: "APJ Abdul Kalam Technological University",
    year: "(2020-2022)",
  },
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    university: "University of Kerala",
    year: "(2017-2020)",
  },
  {
    qualification: "12th Grade",
    university: "Board of HSE, Kerala, India",
    year: "(2015-2017)",
  },
  {
    qualification: "10th Grade",
    university: "Central Board of Secondary Education",
    year: "(2014-2015)",
  },
];

const experience = [
  {
    post: "PHP Developer",
    company: "Virtual Sys Technologies, Infopark, Cherthala",
    duration: "2022 - present",
    duties: [
      "Designed and maintained dynamic web applications to support organizational goals.",
      "Collaborated closely with the development team toimplement new features per project specifications.",
      "Built and optimized user interfaces using HTML5, CSS3,JavaScript, and jQuery, ensuring cross-browsercompatibility and responsiveness.",
      "Leveraged CodeIgniter and PHP to develop backend logic,enhancing performance and scalability.",
    ],
  },
];

const core_competencies = [
  {
    id: 1,
    skill: "PHP",
    icon: "SiPhp",
  },
  {
    id: 2,
    skill: "Javascript",
    icon: "SiJavascript",
  },
  {
    id: 3,
    skill: "Python",
    icon: "SiPython",
  },
  {
    id: 4,
    skill: "C",
    icon: "",
  },
  {
    id: 5,
    skill: "Codeigniter",
    icon: "SiCodeigniter",
  },
  {
    id: 6,
    skill: "React Js",
    icon: "SiReact",
  },
  {
    id: 7,
    skill: "jQuery",
    icon: "SiJquery",
  },
  {
    id: 8,
    skill: "AJAX",
    icon: "",
  },
  {
    id: 9,
    skill: "HTML5",
    icon: "SiHtml5",
  },
  {
    id: 10,
    skill: "CSS3",
    icon: "SiCss3",
  },
  {
    id: 11,
    skill: "Bootstrap",
    icon: "SiBootstrap",
  },
  {
    id: 12,
    skill: "Tailwind CSS",
    icon: "SiTailwindcss",
  },
  {
    id: 13,
    skill: "MySQL",
    icon: "SiMysql",
  },
  {
    id: 14,
    skill: "Git",
    icon: "SiGitforwindows",
  },
];

const projects = [
  {
    id: 1,
    title: "Yameem",
    url: "https://yameem.com",
    cover: "assets/images/projects/yameem.jpg",
  },
  {
    id: 2,
    title: "Styles Dubai",
    url: "https://stylesdubai.com",
    cover: "assets/images/projects/styles_dubai.jpg",
  },
  {
    id: 3,
    title: "Better Quality Flowers & Chocolate",
    url: "https://betterqualityflowers.com/",
    cover: "assets/images/projects/better_quality_flowers.jpg",
  },
  {
    id: 4,
    title: "Genryu Gulf",
    url: "https://demo.yalla-web.com/ait2023/genryu_gulf/product/listing",
    cover: "assets/images/projects/genryu_gulf.jpg",
  },
  {
    id: 5,
    title: "Reliance Migrations",
    url: "https://reliancemigration.com",
    cover: "assets/images/projects/reliance_migration.jpg",
  },
];

const contact_details = {
  email: "giridharm555@gmail.com",
  phone: "+91 8281212700",
  alt_phone: "+91 6282364562",
  github: "https://github.com/Giridhar-github",
  linkedIn: "https://linkedin.com/in/giridhar-m-59459114b",
  instagram: "https://linkedin.com/in/giridhar-m-59459114b",
};

app.get("/", authenticate, (req, res) => {
  return res.json({
    personal_details,
    technical_skills,
    education,
    experience,
    core_competencies,
    projects,
    contact_details,
  });
});

//-----------------------------------------------------------------port running
const port = process.env.PORT || 5000;
app.listen(port);
