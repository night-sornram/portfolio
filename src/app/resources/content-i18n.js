import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sornram',
    lastName:  'Chalernma',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Computer Engineering Student',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Bangkok',        
    languages: ['English', 'Thai']  // optional: Leave the array empty if you don't want to display languages
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/night-sornram',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sornram-chalernma-13b577317/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sornram.chalernma@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Computer Engineering Student</>,
    subline: <>I'm Sornram, a computer engineering student at <InlineCode>CHULALONGKORN</InlineCode>,<br/>I am studying software and doing personal projects in my free time.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Sararam is a second-year student of Computer Engineering at Chulalongkorn University. He is studying to become a software engineer in the future.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'National ITMX',
                timeframe: 'May 2024 - July 2024',
                role: 'Intern Software Engineer',
                achievements: [
                    <>Employee Check-In, Check-Out and Leave Management System.</>,
                    <>API Load Test With Golang.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Chulalongkorn University',
                description: <>Computer Engineering & Digital Technology.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building frontend with Next.js.</>,
                images: [
                    {
                        src: '/images/next.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Golang',
                description: <>Building backend with Golang.</>,
                images: [
                    {
                        src: '/images/golang.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


export { person, social, home, about, work };