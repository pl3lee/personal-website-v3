import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Billy",
  lastName: "Lee",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pl3lee",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/billy-pl-lee/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:billy.pl.lee@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Billy, a recent graduate from the University of Waterloo, and a
      current part time student at Georgia Tech.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I am a Math graduate from the University of Waterloo, and I am
          currently working on my Master's in Computer Science at Georgia Tech.
        </p>
        <p>
          My enthusiasm for solving real-world problems led me to create UWPlan,
          a Next.js-powered degree planning tool that serves over 500 daily
          users, helping students map their courses and visualize their academic
          progress.
        </p>
        <p>
          I love to tinker with technology. I built a home server using Unraid
          and have set up numerous self-hosted services for me and my friends'
          needs.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Waterloo",
        timeframe: "Jan 2024 - May 2024",
        role: "Lead Developer",
        achievements: [
          <>
            Led the development of a Next.js-based web platform for a
            figures-of-speech research group, serving 10+ researchers and
            enabling user submissions and annotations of figure instances.
          </>,
          <>
            Revamped the CI/CD pipeline using GitLab, Docker, and Docker
            Compose, reducing deployment time by 70%.
          </>,
          <>
            Established a robust staging environment to improve testing
            efficiency and reduce production defects by 90%, ensuring a more
            reliable and high-quality development workflow.
          </>,
          <>
            Coordinated an Agile workflow, leading weekly stand-ups and code
            reviews for a team of 5 developers, and implemented a documentation
            site to maintain comprehensive, up-to-date project documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Waterloo",
        timeframe: "Sept 2023 - Dec 2023",
        role: "Full Stack Developer",
        achievements: [
          <>
            Implemented advanced features like dynamic highlighting
            functionality with rich text support using Tiptap.
          </>,
          <>
            Reduced page load time by 80% by consolidating data retrieval to a
            single API call with server-side props, utilizing Context API for
            efficient data distribution, and implementing pagination to minimize
            data overload.
          </>,
          <>
            Engineered and tested 10 Golang REST endpoints backed by MySQL,
            improving query response times by 20%.
          </>,
          <>
            Authored comprehensive tests using Jest and React Testing Library,
            increasing code coverage by 30%.
          </>,
        ],
        images: [],
      },
      {
        company: "Hewlett Packard Enterprise",
        timeframe: "May 2023 - Aug 2023",
        role: "Software Developer Intern",
        achievements: [
          <>
            Developed and launched a React.js-based demo portal viewed by 10
            internal stakeholders, effectively showcasing HPE GreenLake
            solutions and reducing the average demo preparation time by 50%.
          </>,
          <>
            Automated and optimized demo workflows with Python and Bash scripts,
            and provisioned VM environments for demonstrations, reducing manual
            setup time by 80%.
          </>,
        ],
        images: [],
      },
      {
        company: "Bolee Machine Tool Ltd.",
        timeframe: "Apr 2023 - May 2023",
        role: "Software Developer Intern",
        achievements: [
          <>
            Tackled the challenge of time-consuming manual product entries on
            the company's WordPress e-commerce site, previously reliant on a
            lengthy admin GUI process of around 5 minutes per product.
          </>,
          <>
            Revolutionized product management by developing a Python-based
            automation tool using Selenium for the company's WordPress
            e-commerce site; achieved a 99% reduction in time required for bulk
            price updates.
          </>,
          <>
            Managed and configured company VPN and NAS storage servers to
            enhance data security and accessibility.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: (
          <>
            <p>Honours Bachelor of Mathematics</p>
            <p>Master of Science in Computer Science</p>
            <p>Specialization in Computing Systems</p>
          </>
        ),
      },
      {
        name: "University of Waterloo",
        description: (
          <>
            <p>Honours Bachelor of Mathematics</p>
            <p>Dean's Honour (GPA: 3.9/4.0)</p>
            <p>
              Double Major in Computational Mathematics and Combinatorics &
              Optimization
            </p>
            <p>Minor in Computer Science</p>
          </>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
