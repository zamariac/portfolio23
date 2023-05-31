import React from "react";

const About = () => {
  return (
    <div className="flex px-4"
      name="about">
      <div className="border-2 border-t-none border-black container max-w-7xl xl:mx-auto">
        <div className="p-8">        
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-2 border-black font-bodoni">
              About
            </p>
          </div>
          <p className="font-montserrat text-lg">
            I'm a front end developer with a wide range of skills and expertise. I am proficient in HTML, CSS, and JavaScript, and have knowledge of front-end frameworks like React. I have a strong understanding of responsive web design principles and mobile-first development. I have experience working with CSS preprocessors like Sass and Less, as well as CSS frameworks such as Bootstrap, Material-UI, and Tailwind CSS, which enable me to quickly develop user interfaces.
            I work with various tools such as FIGMA, Adobe Photoshop, and Sketch. I like to streamline development processes with front-end build tools like Webpack and Gulp, as well as package managers like npm and Yarn for efficient code organization and management. I am proficient in PHP development and have a strong command of WordPress features and functionalities. This expertise enables me to create dynamic and interactive websites using WordPress CMS. I am well-versed in version control systems like Git, which ensures effective collaboration and code management. I am also experienced in using project management tools like Jira, to facilitate efficient task tracking and team coordination.
          </p>
          <p className="font-montserrat text-lg">
            Beyond my technical skills, I possess excellent problem-solving abilities, effective communication skills, and a collaborative mindset. These qualities enable me to tackle challenges, work well with others, and contribute to successful project outcomes and meeting deadlines. I am bilingual in English and Spanish, allowing me to effectively communicate and collaborate in both languages. This proficiency enhances my ability to work with diverse teams and cater to a wider range of users and clients.

            When I’m not coding you can find me volunteering, practicing yoga or dancing! Let’s work together
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
