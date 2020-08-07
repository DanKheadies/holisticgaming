import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
// import YouTube from 'react-youtube';

import './EdTech.scss';
import AccordionCard from '../../../../UI/AccordionCard/AccordionCard';
import Aux from '../../../../../hoc/Aux/Aux';
import ImageFantasTechPresentation from '../../../../../assets/images/squad/david/edtech/fantastech.png';
import ImagePortfolioPresentation from '../../../../../assets/images/squad/david/edtech/portfolio-presentation.png';
import DavidNavigation from '../../../../Navigation/SubNavigation/DavidNavigation';
import S1aImage from '../../../../../assets/images/squad/david/edtech/S1.735.png';
import S1bImage from '../../../../../assets/images/squad/david/edtech/S1.652.jpg';
import S2aImage from '../../../../../assets/images/squad/david/edtech/S2.650.793.PNG';
import S2bImage from '../../../../../assets/images/squad/david/edtech/S2.652.jpg';
import S3aImage from '../../../../../assets/images/squad/david/edtech/S3.746.png';
import S3bImage from '../../../../../assets/images/squad/david/edtech/S3.755.png';
import S4bImage from '../../../../../assets/images/squad/david/edtech/S4.Pres.png';
import S5aImage from '../../../../../assets/images/squad/david/edtech/S5.709.png';
import S5bImage from '../../../../../assets/images/squad/david/edtech/S5.780.png';
import StandardsSection from './StandardsSection/StandardsSection';

const EdTech = () => (
    <Aux>
        <DavidNavigation />
        <Container className="ed-tech">
            <Row>
                <Col>
                    <p>
                        Below is a collection of websites, projects, and media that I created for my Educational Technology program at the University of South Carolina.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion>
                        <AccordionCard
                            eventKey="0"
                            title="Graduate Day (3m Thesis)"
                        >
                            You're smarter than you think. So keep playing.
                            <br /><br />
                            All games—board games, sports games, card games, dice games, video games, etc.—use and train our thinking abilities. These mental abilities are activated when we read directions, learn rules, move our bodies, organize units, spend resources, solve problems, and throughout all aspects of a game. Cognition is the ability to think, and cognitive abilities are the mental abilities we use to think. How we perceive an environment, what we attend to and focus on, what we remember, how we communicate, how we make decisions, solve problems, and reason all use and train our cognitive abilities. In a physical workout, we train our muscles to get bigger and stronger by using them. Likewise, in a mental workout, we train our mental abilities to get faster and smarter by using them. Gamers are atheletes, and like most of our olympic and sport athletes, we train every day.
                            <br /><br />
                            Whether it's a well structured, mental regiment or a naturally emerging jungle gym, games train our cognitive abilities: perception, attention, memory, communication, problem solving, decision making, and reasoning skills. A number of real-world activities use and train cognitive abilities too, such as conversating, reading, cooking, driving, dancing, working, and learning; however, gaming is an intense, flavorful form of learning that people have a higher affinity towards over most real-world activities. Games attract people. Games engage people. Games challenge people. Games motivate people. Games use and train our cognitive abilities, and we grow smarter every time we play a game. The more mindful we are of this mental training, the more we can control our mental growth and well-being.
                            <br /><br />
                            You're smarter than you think. So keep playing.
                        </AccordionCard>
                        <AccordionCard
                            eventKey="1"
                            title="EdTech Portfolio (EDET 793 - Advanced Instructional Design and Development)"
                        >
                            <p>
                                Throughout my time at the University of South Carolina's Graduate School, I have produced several artifacts that illustrate my Educational Technology skills, abilities, and knowledge. The artifacts below demonstrate my ability to apply instructional design principles to several domains, and these artifacts serve as a mark of proficiency for the <a href="https://www.aect.org/docs/AECTstandards2012.pdf" alt="AECT Standards" className="primary-link">Association for Educational Communications and Technology Standards for Education Programs</a>.
                            </p>
                            <Accordion>
                                <AccordionCard
                                    eventKey="100"
                                    title="Portfolio Summary"
                                >
                                    <p>
                                        Over the past two years, I've learned how to:
                                    </p>
                                    <ul>
                                        <li>Analyze environments, research, and technology tools</li>
                                        <li>Design storyboards, mockups, presentations, graphics, videos, and curriculums</li>
                                        <li>Develop websites, interactive tutorials, video presentations, courses, games, and academic papers</li>
                                        <li>Implement instructional materials remotely and on-site</li>
                                        <li>Evaluate the efficacy of my materials</li>
                                        <li>Iterate and modify projects in order to reach goals and outcomes</li>
                                        <li>Collaborate with teachers and peers synchronously and asynchronously</li>
                                        <li>Manage my time and energy</li>
                                    </ul>
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="101"
                                    title="EdTech Growth"
                                >
                                    <p>
                                        I'm pleased with where I started and how far I've come. Since my first wikispaces for 603, I'm proud of the work I've created for each of these 12 Educational Technology (and Research) courses. For each article, I included an 'older' project with a 'newer' project, and I notice a difference in my work. My early work is good, but it reminds me of a novice sports player performing off of his athleticism. My later work looks like a seasoned veteran: cool, calm, and collected. These later projects contain more developed ideas and details, and they are also more refined. For example, I'm extremely proud of the elegance and simplicity of my code for this website in comparison to my first 'custom' site in EDET 703. It's also encouraging to see how focused and involved my work is towards games and gaming. I want to research, design, and develop games, and my work stands as a testament to that fight. 
                                    </p>
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="102"
                                    title="Lessons Learned"
                                >
                                    <p>
                                        Thanks to my courses, teachers, and peers, I've pushed myself and found my strengths, weaknesses, and limits. This last semester has truly tested my depth, fortitude, and learning. I left a number of projects unfinished, and even though I worked as hard as I did, I know I could have done more each and every time. I will take that lesson with me, and I'll try to remind myself in every moment of every day that I can always do more. Over these past two years, I learned a lot about failure, error, and missing the mark. I now view these experiences as forms of feedback. From unsuccessful applications to unfinished work, I've learned how to construct meaning around these experiences, constructively grow from them, and continue to engage with them.
                                        <br /><br />
                                        Whether I jump right into my PhD to research games or I take time to refine my MEd skills, this graduate experience provides me with courage, confidence, and direction.
                                    </p>
                                </AccordionCard>
                                <AccordionCard
                                    centered
                                    eventKey="104"
                                    title="Portfolio Presentation"
                                >
                                    <Image
                                        className="youtube-poster"
                                        src={ImagePortfolioPresentation}
                                        fluid
                                    />
                                    <br />
                                    <a className="primary-link" href="https://www.youtube.com/watch?v=coWT7nFjNaM" alt="EDET 793 Portfolio Presentation">
                                        EDET 793 Portfolio Presentation
                                    </a>
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="105"
                                    title="Standard 1 - Content Knowledge"
                                >
                                    <p>
                                        Candidates demonstrate the knowledge necessary to create, use, assess, and manage theoretical and practical applications of educational technologies and processes.
                                    </p>
                                    <StandardsSection
                                        id="standards-1a"
                                        title="Artifact - Accessibility Project 2.0 for EDET 735"
                                        image={S1aImage}
                                        imageLink="/ET735/"
                                        linkText="Link to Accessibility Project 2.0 for EDET 735"
                                        context="I created this webpage in the Spring of 2014 for EDET 735 - Technology for Diverse Populations. This project advocates the relationship between Universal Design for Learning (UDL) and video games, and how this relationship facilitates learning complex content, such as immunology."
                                        conditions="Over the course of 6 weeks, I researched UDL and video game play, designed a website, and developed my HTML, CSS, and Javascript skills."
                                        scope="The project is retired."
                                        role="This was a solo project that built off my previous undergraduate and graduate research."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates demonstrate the ability to create instructional materials and learning environments using a variety of systems approaches.",
                                                specific: "This webpage explains how video games coincide with an UDL approach."
                                            },
                                            Using: {
                                                indicator: "Candidates demonstrate the ability to select and use technology resources and processes to support student learning and to enhance their pedagogy.",
                                                specific: "Video games are media-rich tools that provide multiple means of information representation, interaction, and engagement. This medium facilitates a range of learners and preferences."
                                            },
                                            Ethics: {
                                                indicator: "Candidates demonstrate the contemporary professional ethics of the field as defined and developed by the Association for Educational Communications and Technology.",
                                                specific: "Resources and references were properly cited, captioned, and attributed."
                                            }
                                        }}
                                        addie="For the last 6 years, I have worked on Immunis with a variety of people, and over the last 2 years, Immunis has iterated through several analysis and design phases with flashes of development, implementation, and evaluation. I took a serious game, i.e. Immunis, overlaid an ADDIE framework on top of it, and continued to analyze and design it with more structure. As I move forward with Immunis, I will continue to build off the scaffolds in place."
                                    />
                                    <div className="standards-spacer"></div>
                                    <StandardsSection
                                        id="standards-1b"
                                        title="Artifact - Hearthstone (COTS Game) for EDET 652"
                                        image={S1bImage}
                                        imageLink="/ET652/COTSHearthstone/cotsHearthstone.html"
                                        linkText="Link to Hearthstone (COTS Game) for EDET 652"
                                        context="I created this training course in the Spring of 2015 for EDET 652 - Design and Evaluation of Games and Simulations. For this project, I used a commercial-off-the-shelf (COTS) game to facilitate educational content—specifically metacognitive learning."
                                        conditions="Over the course of 2 weeks, I analyzed, designed, and created an integration plan that incorporated Hearthstone into classrooms. The biggest constraint has been the time needed to create the additional lessons and media."
                                        scope="The project is retired. There were 7 more webpages that need to be developed; however, the content is listed in the integration plan."
                                        role="This was a solo project that built off my previous work and knowledge on Blizzard games and metacognition."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates demonstrate the ability to create instructional materials and learning environments using a variety of systems approaches.",
                                                specific: "The webpages and integration plan were developed through an ADDIE framework, and they focus on developing learners' self-regulatory behaviors."
                                            },
                                            Using: {
                                                indicator: "Candidates demonstrate the ability to select and use technology resources and processes to support student learning and to enhance their pedagogy.",
                                                specific: "I used text and images to guide learners through the workout, and future lessons incorporate videos and quizzes. In addition to the cognitive stimulation, these webpages facilitate self-sufficiency, confidence, and regulation."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates demonstrate the ability to assess and evaluate the effective integration of appropriate technologies and instructional materials.",
                                                specific: "I built in qualitative assessment strategies for the instructor to gauge each learner's metacognitive development as they work through lessons."
                                            },
                                            Managing: {
                                                indicator: "Candidates demonstrate the ability to effectively manage people, processes, physical infrastructures, and financial resources to achieve predetermined goals.",
                                                specific: "I selected a free-to-play game, and I structured the lessons to allow students to learn, play, and scaffold their metacognitive abilities at their own pace. Instructors assess students when applicable."
                                            }
                                        }}
                                        addie="This project evolved from a traditional ADDIE framework. I analyzed motivation theories, applied and designed around a COTS game, developed an integration plan and initial webpages, and planned integration and assessment strategies."
                                    />
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="106"
                                    title="Standard 2 - Content Pedagogy"
                                >
                                    <p>
                                        Candidates develop as reflective practitioners able to demonstrate effective implementation of educational technologies and processes based on contemporary content and pedagogy.
                                    </p>
                                    <StandardsSection
                                        id="standards-2a"
                                        title="Artifact - Training and Certification for Psychological Assessment Tools for EDET 650 &amp; EDET 793"
                                        image={S2aImage}
                                        imageLink="http://www.bendergestalt.com/"
                                        linkText="Link to the Bender Visual-Motor Gestalt Test Training and Certification website"
                                        linkIsRetired
                                        context="I started this project in the Fall of 2014 for EDET 650 - Internship in Educational Technology, and I've continued to work on it in the Spring of 2015 for EDET 793 - Advanced Instructional Design and Development. This project trains and certifies users on the Bender Visual-Motor Gestalt Test (BVMGT)."
                                        conditions="Over the course of 8 weeks, I analyzed a traditional learning process and designed a novel, instructional program to help users learn and 'certify' for the BVMGT. I also developed the website shell and administration section. Over the course of 2 weeks, I developed the initial training modules and content. One major resource is my professor who helped write the BVMGT training manual. The biggest constraint has been time and knowledge, i.e. lack of programming experience."
                                        scope="The project is retired. There was a user management system, backend database, and mostly complete training content."
                                        role="This is largely a solo project that my ACN lab professor, Dr. Scott Decker, is helping me design and develop."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates apply content pedagogy to create appropriate applications of processes and technologies to improve learning and performance outcomes.",
                                                specific: "Through the ADDIE framework, I am slowly creating a novel training tutorial that helps train and certify learners."
                                            },
                                            Using: {
                                                indicator: "Candidates implement appropriate educational technologies and processes based on appropriate content pedagogy.",
                                                specific: "I am incorporating a number of instructional design techniques and tools, such as immediate feedback, asynchronous learning, and multimodal material, to help learners understand and certify for the BVMGT."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates demonstrate an inquiry process that assesses the adequacy of learning and evaluates the instruction and implementation of educational technologies and processes grounded in reflective practice.",
                                                specific: "I formatively assess learners within each lesson, and I have two major summative assessments that lead to certification. The site will be complete by the end of this Summer 2015, and I will implement and evaluate the website within several psychological assessment classrooms."
                                            }
                                        }}
                                        addie="This project was founded and is supported by an ADDIE framework. I constantly refer back to my analysis and design specifications to make sure I'm constructing the website in accordance with my initial objectives. I've iterated through the design a few times to accommodate for missing pieces, e.g. a Help section and training materials. I have an implementation and evaluation plan ready to use when the site is complete."
                                    />
                                    <div className="standards-spacer"></div>
                                    <StandardsSection
                                        id="standards-2b"
                                        title="Artifact - Immunis, An Insidious Horde Game for EDET 652"
                                        image={S2bImage}
                                        imageLink="https://drive.google.com/file/d/0BzfNy4uKvUHqMm9Odkl1UHc1SWs/view?usp=sharing"
                                        linkText="Link to Immunis, An Insidious Horde Game for EDET 652"
                                        context="I created this Game Design Document in the Spring of 2015 for EDET 652 - Design and Evaluation of Games and Simulations. This project was first conceived in the Spring of 2009."
                                        conditions="Over the course of 2 weeks, I collected and expanded upon our notes, wrote objectives, and designed illustrations for the board game. The biggest resource was all of the previous time and energy spent on this concept."
                                        scope="The Game Design Document is complete, and the board game is being developed. I'm in the process of creating the pieces, board, and cards."
                                        role="This has been a group project since 2009. The gameplay mechanics have been the collaboration between Collin-Jamal Smith and myself. I have done all the artwork."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates apply content pedagogy to create appropriate applications of processes and technologies to improve learning and performance outcomes.",
                                                specific: "I applied and enhanced several instructional features of the game, e.g. motivational elements, to encourage engagement and interest. Through a Universal Design for Learning (UDL) lens, this immunological content will serve players throughout their lives."
                                            },
                                            Using: {
                                                indicator: "Candidates implement appropriate educational technologies and processes based on appropriate content pedagogy.",
                                                specific: "Through several frameworks and models, I continued to create an interactive and engaging tool."
                                            },
                                            Ethics: {
                                                indicator: "Candidates design and select media, technology, and processes that emphasize the diversity of our society as a multicultural community.",
                                                specific: "The content, i.e. immunology, relates to every human, and the medium, i.e. board game, is familiar and understandable to people of all ages and ethnicities."
                                            }
                                        }}
                                        addie="This project was started long before I knew about the ADDIE framework; however, we have invested a significant amount of time analyzing elements of serious games and designing realistic interactions amongst these microorganisms for the game. As I move forward with this project, I'm incorporating the rest of the ADDIE framework to help research the impact of Immunis the Horde game. For example, I wrote learning objectives in this Game Design Document, and after I implement this game in a classroom, I can evaluate if Immunis meets these goals or if I need to iterate through any of the earlier stages to meet these goals."
                                    />
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="107"
                                    title="Standard 3 - Learning Environments"
                                >
                                    <p>
                                    Candidates facilitate learning by creating, using, evaluating, and managing effective learning environments.
                                    </p>
                                    <StandardsSection
                                        id="standards-3a"
                                        title="Artifact - Gamify the Classroom for EDET 755"
                                        image={S3aImage}
                                        imageLink="https://docs.google.com/presentation/d/16aRGBRH9GdUUgac2MDzkponkA5MKQsWYyhwvWcc4owE/edit?usp=sharing"
                                        linkText="Link to Gamify the Classroom slides"
                                        context="I worked on this project over the Summer of 2014 for EDET 755 - Design and Evaluation of Information Access and Delivery. This Gamify course is an 8-week course that helps educators incorporate games and game elements into their classrooms."
                                        conditions="Over the course of 2 weeks, I helped design and develop an online course with a learning management system, i.e. CourseSites.com. The best resource we had access to was my previous game research."
                                        scope="The project is retired; however, it would be easy to revitalize and implement it."
                                        role="I was the project leader, and apart from the overall course structure, I was responsible for a lot of the content, readings, and activities."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates create instructional design products based on learning principles and research-based best practices.",
                                                specific: "Following a number of distance learning practices, we created a synchronous and asynchronous learning environment to help teachers gamify their classrooms."
                                            },
                                            Using: {
                                                indicator: "Candidates make professionally sound decisions in selecting appropriate processes and resources to provide optimal conditions for learning based on principles, theories, and effective practices.",
                                                specific: "We created an engaging classroom built around distance-education principles, and we incorporated a number of readings, assignments, discussions, and live-virtual meetings."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates use multiple assessment strategies to collect data for informing decisions to improve instructional practice, learner outcomes, and the learning environment.",
                                                specific: "We created several methods to get feedback, assess learners, and evaluate our efforts. These methods include the quantity and quality of discussions and meetings."
                                            },
                                            Managing: {
                                                indicator: "Candidates establish mechanisms for maintaining the technology infrastructures to improve learning and performance.",
                                                specific: "We choose CouresSites.com because it is an elaborate learning management system that provides our Gamify the Classroom course with a number of collaborative tools and assessment methods."
                                            },
                                            "Diversity of Learners": {
                                                indicator: "Candidates foster a learning community that empowers learners with diverse backgrounds, characteristics, and abilities.",
                                                specific: "Our online environment focuses on games, which empowers students to engage with fun activities. Learners can bring their own experiences and preferences to facilitate discussion and interaction."
                                            }
                                        }}
                                        addie="This project loosely followed an ADDIE framework. Each phase influenced the creation of the site. For example, our group read about games and how a number of institutions use games, which led to a more intelligent design. Also, we based our assessments around student participation and project creation."
                                    />
                                    <div className="standards-spacer"></div>
                                    <StandardsSection
                                        id="standards-3b"
                                        title="Artifact - Google Apps for Education for EDET 746"
                                        image={S3bImage}
                                        imageLink="https://sites.google.com/site/plsteachmeapps/"
                                        linkText="Link to Google Apps for Education for EDET 746"
                                        context="In the Fall of 2014, I helped create a website that trains educators to use Google Apps for Educational purposes for EDET 746 - Management of Technology Resources."
                                        conditions="Over the course of 6 weeks, I worked with three other students to create this website to facilitate staff development. Fortunately, we had two practicing teachers that could administer the training to colleagues, and we were all familiar with Google Apps."
                                        scope="The website and training materials are live."
                                        role="I helped plan the structure of the training material by identifying and mapping out each ADDIE phase in conjunction with the Kemp, Morrison, and Ross's (KMR) Instructional Design Plan. I created the design storyboard, and I created the introductory, interactive tutorial on Gmail."
                                        perIndicators={{
                                            Creating: {
                                                indicator: "Candidates create instructional design products based on learning principles and research-based best practices.",
                                                specific: "We crafted a number of synchronous and asynchronous tools after we identified several needs within a couple classroom environments. We followed an ADDIE framework throughout the project."
                                            },
                                            Using: {
                                                indicator: "Candidates make professionally sound decisions in selecting appropriate processes and resources to provide optimal conditions for learning based on principles, theories, and effective practices.",
                                                specific: "We focused on seven critical Google Apps that solved traditional classroom problems, and we collaborated and created the project using several Google Apps."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates use multiple assessment strategies to collect data for informing decisions to improve instructional practice, learner outcomes, and the learning environment.",
                                                specific: "We used in-person interviews and sent out a Google Forms survey to analyze and assess learner goals, progress, and overall compliance."
                                            },
                                            Managing: {
                                                indicator: "Candidates establish mechanisms for maintaining the technology infrastructures to improve learning and performance.",
                                                specific: "We share all of the Google training materials online via our Google Drives and Site."
                                            },
                                            Ethics: {
                                                indicator: "Candidates foster a learning environment in which ethics guide practice that promotes health, safety, best practice, and respect for copyright, Fair Use, and appropriate open access to resources.",
                                                specific: "All of our materials are free for public use, and we provide a site to access these resources."
                                            },
                                            "Diversity of Learners": {
                                                indicator: "Candidates foster a learning community that empowers learners with diverse backgrounds, characteristics, and abilities.",
                                                specific: "Our training materials include text, videos, and interactive material to help different learners understand and use the Apps."
                                            }
                                        }}
                                        addie="Through an ADDIE framework, we identified instructional problems and set goals to incorporate Google Apps into teachers' toolboxes. We analyzed teachers in elementary and high school settings, specified instructional objectives, designed, developed, and implemented the Apps. Following a KMR model, we made changes while training and implementing the Apps. We received good, constructive feedback during our assessments."
                                    />
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="108"
                                    title="Standard 4 - Professional Knowledge &amp; Skills"
                                >
                                    <p>
                                        Candidates facilitate learning by creating, using, evaluating, and managing effective learning environments.
                                    </p>
                                    <StandardsSection
                                        id="standards-4a"
                                        title="Artifact - Google Apps for Education for EDET 746"
                                        image={S3bImage}
                                        imageLink="https://sites.google.com/site/plsteachmeapps/"
                                        linkText="Link to Google Apps for Education for EDET 746"
                                        context="In the Fall of 2014, I helped create a website that trains educators to use Google Apps for Educational purposes for EDET 746 - Management of Technology Resources."
                                        conditions="Over the course of 6 weeks, I worked with three other students to create this website to facilitate staff development. Fortunately, we had two practicing teachers that could administer the training to colleagues, and we were all familiar with Google Apps."
                                        scope="The website and training materials are live."
                                        role="I helped plan the structure of the training material by identifying and mapping out each ADDIE phase in conjunction with the Kemp, Morrison, and Ross's (KMR) Instructional Design Plan. I created the design storyboard, and I created the introductory, interactive tutorial on Gmail."
                                        perIndicators={{
                                            "Collab. Practice": {
                                                indicator: "Candidates collaborate with their peers and subject matter experts to analyze learners, develop and design instruction, and evaluate its impact on learners.",
                                                specific: "Through an ADDIE framework and an iterative KMR model, our group created a website, tutorials, and assessments to train and evaluate users on Google Apps for Education."
                                            },
                                            Leadership: {
                                                indicator: "Candidates lead their peers in designing and implementing technology-supported learning.",
                                                specific: "I organized and facilitated a number of our collaborative documents and meetings."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates design and implement assessment and evaluation plans that align with learning goals and instructional activities.",
                                                specific: "We used in-person interviews and sent out a Google Forms survey to analyze and assess learner goals, progress, and overall compliance."
                                            },
                                            Ethics: {
                                                indicator: "Candidates demonstrate ethical behavior within the applicable cultural context during all aspects of their work and with respect for the diversity of learners in each setting.",
                                                specific: "Our instruction is applicable to a wide range of learners, and we provide free, open access to these resources."
                                            }
                                        }}
                                        addie="Through an ADDIE framework, we identified instructional problems and set goals to incorporate Google Apps into teachers' toolboxes. We analyzed teachers in elementary and high school settings, specified instructional objectives, designed, developed, and implemented the Apps. Following a KMR model, we made changes while training and implementing the Apps. We received good, constructive feedback during our assessments."
                                    />
                                    <div className="standards-spacer"></div>
                                    <StandardsSection
                                        id="standards-4b"
                                        title="Artifact - How and Why We Should Use Games in the Classroom and in Life for the EDET Presentation"
                                        image={S4bImage}
                                        imageLink="https://www.youtube.com/watch?v=Brf_buWDLDE"
                                        linkText="Link to How and Why We Should Use Games in the Classroom and in Life for the EDET presentation"
                                        context="I gave this presentation in the Spring of 2015 for the Educational Technology Conference Presentation requirement. This presentation synthesizes my research on games over the past 4 years."
                                        conditions="Over the course of 2 months, I collected my ideas into one narrative. I drew from class work, research projects, and personal interests. The biggest constraint was narrowing in on relevant content for that virtual audience."
                                        scope="The presentation is live. I plan to build off these ideas, and I want to give similar presentations in the future."
                                        role="I was the sole researcher and presenter."
                                        perIndicators={{
                                            "Collab. Practice": {
                                                indicator: "Candidates collaborate with their peers and subject matter experts to analyze learners, develop and design instruction, and evaluate its impact on learners.",
                                                specific: "I read numerous articles, books, and papers that discuss the impact and role games have on learners, and I shared these findings with the FantasTech Community."
                                            },
                                            Leadership: {
                                                indicator: "Candidates lead their peers in designing and implementing technology-supported learning.",
                                                specific: "I explain why games are valuable and how educators can incorporate games and game elements into their learning activities and classrooms."
                                            },
                                            "Reflection on Practice": {
                                                indicator: "Candidates analyze and interpret data and artifacts and reflect on the effectiveness of the design, develop and implementation of technology-supported instruction and learning to enhance their professional goals.",
                                                specific: "Through my reading and personal experiences, I'm understanding the relationship between games and players, which I can use to create games that facilitate human development."
                                            },
                                            Ethics: {
                                                indicator: "Candidates demonstrate ethical behavior within the applicable cultural context during all aspects of their work and with respect for the diversity of learners in each setting.",
                                                specific: "I take into account a wide range of games and players, and this presentation caters to a broad audience. All resources are credited appropriately."
                                            }
                                        }}
                                        addie="This presentation did not use an ADDIE framework, but the analysis elements of the frameworks are integrated throughout the presentation."
                                    />
                                </AccordionCard>
                                <AccordionCard
                                    eventKey="109"
                                    title="Standard 5 - Research"
                                >
                                    <p>
                                        Candidates explore, evaluate, synthesize, and apply methods of inquiry to enhance learning and improve performance.
                                    </p>
                                    <StandardsSection
                                        id="standards-5a"
                                        title="Artifact - Game-Based Learning: An Investigation of Academic Growth for EDET 780"
                                        image={S5aImage}
                                        imageLink="https://docs.google.com/document/d/1gTcxXJrfhUnZZsCXpQ0Y0g4JK6H9FgSUfN1g_gNRUDw/edit?usp=sharing)"
                                        linkText="Link to Game-Based Learning: An Investigation of Academic Growth for EDET 780"
                                        context="In the Spring of 2014, I researched the growth of game-based learning for EDET 780 - Research Seminar in Educational Technology."
                                        conditions="Over the course of 4 weeks, two other students and myself discuss the successes, shortcomings, and uses of game-based learning. A lot of my previous research assisted this project."
                                        scope="The paper is online, and it provides a good start for a future study."
                                        role="I supplied the framework and theoretical research for the paper, i.e. GBL and UDL. I also initiated the research questions and hypothetical study."
                                        perIndicators={{
                                            "Theoretical Foundations": {
                                                indicator: "Candidates demonstrate foundational knowledge of the contribution of research to the past and current theory of educational communications and technology.",
                                                specific: "We referenced numerous articles on games and game-based learning, and we provided a foundation to gain further insight on game-based learning."
                                            },
                                            Method: {
                                                indicator: "Candidates apply research methodologies to solve problems and enhance practice.",
                                                specific: "Our research and insight plans to increase student motivation, deepen learning, and drive enjoyment in the classroom."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates apply formal inquiry strategies in assessing and evaluating processes and resources for learning and performance.",
                                                specific: "We read over various studies on game-based learning to understand why games are valuable for education."
                                            },
                                            Ethics: {
                                                indicator: "Candidates conduct research and practice using accepted professional and institutional guidelines and procedures.",
                                                specific: "All resources are appropriately attributed."
                                            }
                                        }}
                                        addie="This paper did not follow an ADDIE framework; however, each ADDIE element is reflected in a section, e.g. analysis in the introduction and theory sections as well as the implementation and evaluation in the methods section."
                                    />
                                    <div className="standards-spacer"></div>
                                    <StandardsSection
                                        id="standards-5b"
                                        title="Artifact - Game Elements Affect Motivation in 6C Ways for EDET 709"
                                        image={S5bImage}
                                        imageLink="https://drive.google.com/file/d/0BzfNy4uKvUHqYjZGNWdKbGRkT1U/view?usp=sharing"
                                        linkText="Link to Game Elements Affect Motivation in 6C Ways for EDET 709"
                                        context="I wrote this paper in the Spring of 2015 for EDET 709 - Applications of Learning Principles. This paper investigates elements that foster motivation."
                                        conditions="Over the course of 4 weeks, I identified a motivation paradigm, reviewed several papers, and synthesized my findings. Peer review was a big help in writing this paper."
                                        scope="The paper is live, and I am planning on submitting it to a peer review journal that focuses on games in education."
                                        role="I was the sole researcher and writer."
                                        perIndicators={{
                                            "Theoretical Foundations": {
                                                indicator: "Candidates demonstrate foundational knowledge of the contribution of research to the past and current theory of educational communications and technology.",
                                                specific: "I describe several ideas that I synthesized from papers and previous classes, e.g. EDET 652."
                                            },
                                            Method: {
                                                indicator: "Candidates apply research methodologies to solve problems and enhance practice.",
                                                specific: "From my analysis, I suggest task necessities and game elements that teachers can incorporate into their classrooms in order to increase motivation."
                                            },
                                            "Assessing / Evaluating": {
                                                indicator: "Candidates apply formal inquiry strategies in assessing and evaluating processes and resources for learning and performance.",
                                                specific: "After analyzing the validity of the main study and several supporting papers, I reported on their methods, successes, and limitations."
                                            },
                                            Ethics: {
                                                indicator: "Candidates conduct research and practice using accepted professional and institutional guidelines and procedures.",
                                                specific: "All resources are appropriately attributed."
                                            }
                                        }}
                                        addie="This paper did not follow an ADDIE framework; however, each ADDIE element is reflected in a section, e.g. design elements are present in the cases and recommendations sections."
                                    />
                                </AccordionCard>
                                <div className="standards-spacer"></div>
                                <p>
                                    Class Website: http://corso793.wikispaces.com/home [<a className="primary-link" href="https://www.wikispaces.com/" alt="WikiSpaces Closed">RETIRED</a>]
                                </p>
                                <p>
                                    Class Project: <a className="primary-link" href="/ET793/ReviewActivity.html" alt="ET793">https://www.holisticgaming.com/ET793/ReviewActivity.html</a>
                                </p>
                            </Accordion>
                        </AccordionCard>
                        <AccordionCard
                            centered
                            eventKey="2"
                            title="FantasTech 2015 - Using Games in the Classroom &amp; Life"
                        >
                            <a className="" href="https://www.youtube.com/watch?v=Brf_buWDLDE" alt="FantasTech 2015 Presentation">
                                <Image
                                    className="youtube-poster"
                                    src={ImageFantasTechPresentation}
                                />
                            </a>
                            <br />
                            <a className="primary-link" href="https://www.youtube.com/watch?v=Brf_buWDLDE" alt="FantasTech 2015 Presentation">
                                FantasTech 2015 Presentation
                            </a>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="3"
                            title="EDET 709 - Applications of Learning Principles"
                        >
                            <p>
                                Class Paper: <a className="primary-link" href="/docs/CorsoResearchPaper.pdf" alt="Corso Research Paper">https://holisticgaming.com/docs/CorsoResearchPaper.pdf</a>
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="4"
                            title="EDET 652 - Design and Evaluation of Games and Simulations"
                        >
                            <p>
                                Class projects: <a className="primary-link" href="http://immunisgame.weebly.com/et652.html" alt="EDET 652 Class Projects">http://immunisgame.weebly.com/et652.html</a>
                            </p>
                            <p>
                                Class project: <a className="primary-link" href="/ET652/COTSHearthstone/cotsHearthstone.html" alt="EDET 652 Class Project">https://www.holisticgaming.com/ET652/COTSHearthstone/cotsHearthstone.html</a>
                            </p>
                            <p>
                                Class project: <a className="primary-link" href="/ET652/gamerInterview.html" alt="EDET 652 Class Project">https://www.holisticgaming.com/ET652/gamerInterview.html</a>
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="5"
                            title="EDET 746 - Management of Media Resources"
                        > 
                            <p>
                                Google Apps for Education: <a className="primary-link" href="https://sites.google.com/site/plsteachmeapps/" alt="Google Apps for Education">https://sites.google.com/site/plsteachmeapps/</a>
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="6"
                            title="EDET 650 - Internship in Educational Technology"
                        >
                            <p>
                                Class Website: https://corso650.wikispaces.com/David [<a className="primary-link" href="https://www.wikispaces.com/" alt="WikiSpaces Closed">RETIRED</a>]
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="7"
                            title="EDET 755 - Design and Evaluation of Information Access and Delivery"
                        >
                            <p>
                                Class Website: https://corso755.wikispaces.com/home [<a className="primary-link" href="https://www.wikispaces.com/" alt="WikiSpaces Closed">RETIRED</a>]
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="8"
                            title="EDET 780 - Research Seminar in Educational Technology"
                        >
                            <p>
                                Class Website: https://corso780.wikispaces.com/Corso%27s+EDET+780+Wiki [<a className="primary-link" href="https://www.wikispaces.com/" alt="WikiSpaces Closed">RETIRED</a>]
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="9"
                            title="EDET 735 - Technological Application for Diverse Populations"
                        >
                            <p>
                                Class Projects: <a className="primary-link" href="http://immunisgame.weebly.com/et735.html" alt="ET735 Class Projects">http://www.immunisgame.weebly.com/et735.html</a>
                            </p>
                            <p>
                                Class Project: <a className="primary-link" href="/ET735/" alt="ET735 Class Project">https://www.holisticgaming.com/ET735/</a>
                            </p>
                            <p>
                                Class Project: <a className="primary-link" href="/ET735/newsletter.html" alt="ET735 Class Project">https://www.holisticgaming.com/ET735/newsletter.html</a>
                            </p>
                            <p>
                                Class Project: <a className="primary-link" href="/ET735/overview.html" alt="ET735 Class Project">https://www.holisticgaming.com/ET735/overview.html</a>
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="10"
                            title="EDET 703 - Design and Development Tools (II)"
                        >
                            <p>
                                Class Website: <a className="primary-link" href="/ET703/" alt="ET703 Class Website">https://www.holisticgaming.com/ET703/</a>
                            </p>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="11"
                            title="EDET 722 - Instructional Design and Assessment"
                        >
                            <p>
                                Class Links:
                            </p>
                            <ul>
                                <li><a className="primary-link" href="http://www.cast.org/our-work/about-udl.html" alt="CAST - UDL">CAST - UDL</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/final-report.html" alt="Final Report">Final Report</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/analysis.html" alt="Analysis">Analysis</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/design.html" alt="Design">Design</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/develop.html" alt="Develop">Develop</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/implementation.html" alt="Implementation">Implementation</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/evaluation.html" alt="Evaluation">Evaluation</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/survey.html" alt="Survey">Survey</a></li>
                                <li><a className="primary-link" href="http://immunisgame.weebly.com/time-log.html" alt="Time Log">Time Log</a></li>
                            </ul>
                        </AccordionCard>
                        <AccordionCard
                            eventKey="12"
                            title="EDET 603 - Design and Development Tools (I)"
                        >
                            <p>
                                Class Website: http://corso603.wikispaces.com/home [<a className="primary-link" href="https://www.wikispaces.com/" alt="WikiSpaces Closed">RETIRED</a>]
                            </p>
                        </AccordionCard>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </Aux>
);

export default EdTech;