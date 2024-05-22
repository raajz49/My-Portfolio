

import { FaCss3Alt, FaGitAlt,FaLanguage, FaLinkedin, FaPhoneAlt,  FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoHtml5, IoLogoInstagram, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdEmail, MdFacebook } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";

export const navLinks=[
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#myskills",label:"My Skills"},
    {href:"#project",label:"Projects"},
    {href:"#contact-me",label:"Contact Me"}
];

export const ButtonConfig=[
{type:'button',title:'HTML',icon:<IoLogoHtml5 />,variant:'button', iconColor:'red' },
{type:'button',title:'CSS',icon:<FaCss3Alt />,variant:'button', iconColor:'blue'},
{type:'button',title:'Javascript',icon:<IoLogoJavascript />,variant:'button', iconColor:'yellow'},
{type:'button',title:'React',icon:<FaReact />,variant:'button', iconColor:'blue'},
{type:'button',title:'Nextjs',icon:<RiNextjsFill />,variant:'button', iconColor:'black'},
{type:'button',title:'Typescript',icon:<SiTypescript />,variant:'button', iconColor:'blue'},
{type:'button',title:'Express',icon:<SiExpress />,variant:'button', iconColor:'gray'},
{type:'button',title:'MYSQL',icon:<SiMysql />,variant:'button', iconColor:'blue'},
{type:'button',title:'GIT',icon:<FaGitAlt />,variant:'button', iconColor:'orange'},
{type:'button',title:'C++',icon:<FaLanguage />,variant:'button', iconColor:'gray'},
{type:'button',title:'Nodejs',icon:<IoLogoNodejs />,variant:'button', iconColor:'green'},
{type:'button',title:'Tailwind',icon:<SiTailwindcss />,variant:'button', iconColor:'blue'},
{type:'button',title:'Postman',icon:<SiPostman />,variant:'button', iconColor:'red'}

];

export const ContactInfo=[
    {Title:'Location',Name:'Kathmandu,Nepal',icon:< IoLocation />,iconColor:'brown'},
    {Title:'Phone',Name:'9819064744',icon:<FaPhoneAlt />,iconColor:'blue'},
    {Title:'Email',Name:'koiralaraajz@gmail.com',icon:<MdEmail/>,iconColor:'red'}

]

export const FooterInfo=[
    {href:'https://www.linkedin.com/in/raam-adhikari-8341a4284/',Name:'Facebook',Icon:<MdFacebook />},
    {href:'https://www.linkedin.com/in/raam-adhikari-8341a4284/',Name:'Instagram',Icon:<IoLogoInstagram />},
    {href:'https://www.linkedin.com/in/raam-adhikari-8341a4284/',Name:'Linkedin',Icon:<FaLinkedin />},
    {href:'https://github.com/raajz49',Name:'Github',Icon:<FaSquareGithub />}
]

export const ProjectInfo=[

    {
        'Title':'A News Blogging site'
        ,'Image':'/projectpic/project3.png',
        'Description':'This setup ensures that the ProjectCard component is reusable and can handle any array of projects that follow the defined Project interface structure. You can replace the placeholder data with actual project information as needed.',
        'href':'https://github.com/raajz49/Blogging-Site'
    },


    {
    'Title':'A Bat Store',
    'Image':'/projectpic/project.png',
    'Description':'This setup ensures that the ProjectCard component is reusable and can handle any array of projects that follow the defined Project interface structure. You can replace the placeholder data with actual project information as needed.',
     'href':'https://github.com/raajz49/Crickbat-Store'   
},
    
    {
        'Title':'A trip planner',
        'Image':'/projectpic/project2.png',
        'Description':'This setup ensures that the ProjectCard component is reusable and can handle any array of projects that follow the defined Project interface structure. You can replace the placeholder data with actual project information as needed.',
        'href':'https://github.com/raajz49/Trek-planner'
    },

    {
        'Title':'Linkedin Clone'
        ,'Image':'/projectpic/project4.png',
        'Description':'This setup ensures that the ProjectCard component is reusable and can handle any array of projects that follow the defined Project interface structure. You can replace the placeholder data with actual project information as needed.',
        'href':'https://github.com/raajz49/linkedin-tailwindcss'
    },
]