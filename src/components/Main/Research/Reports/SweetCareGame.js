import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageSweetCare1 from '../../../../assets/images/research/sweet-care-03092021-01.png';

const SweetCareGame = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Sweet Care &mdash; Designing a health-based electronic game"
        param={props.param}
    >
        <p>
            Posted: Mar 2021
        </p>
        <p>
            <a href="https://journals.sagepub.com/doi/10.1177/1460458218799444" alt="Sweet care against sugar bitterness, designing health-based electronic game" className="primary-link">
            Sweet care against sugar bitterness, designing health-based electronic game
            </a>
            <br />
            Reza Safdari, Marjan Ghazisaeidi, and Azadeh Goodini
            <br />
            Published: Oct 2018
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Building a health-based game should focus on self-learning and is an involved process.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Game research continues to grow, and for games focused on making people healthy, they should make people happy by being fun and making the players want to learn more. This game looked at diabetes, and the research it did looked at how to make their diabetes game successful.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Tackling a chronic disease like diabetes has many facets, but awareness about its causes and promoting healthy behavioral changes are big factors in mitigating its spread. The researchers in this study identified several areas and components to focus on while designing an effective health-based game from various other research projects, models, and methods. Self-learning&mdash;specifically self-care agency&mdash;was highlighted as an important pillar in a health-based game, and while they were unable to research the effects of their game, Sweet Care Game, they provide various examples of their game implementing other researchers’ suggestions. They state that future research will evaluate the game’s success in the healthcare field.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Advances in medicine and health care continue to evolve how physicians communicate and interact with their patients. Effective communication and training are important for a successful treatment. Innovative methods and new technology can have a significant effect on an individuals’ self-efficacy&mdash;mentally and physically&mdash;along with more awareness around diseases and dietary patterns that can affect one’s health. By applying gaming as the vessel for health-based learning&mdash;specifically diabetes&mdash;policy makers and researchers believe patients can receive new, interactive interventions and strategies against chronic diseases like diabetes. The “how” and components of the game are critical to its success and efficacy. Current examples show that entertainment is considered the main factor in promoting healthy behavioral change along with knowledge, skills, self-efficacy, and motivation. For a diabetes game, the researcher aimed to identify a game framework for a specific country, i.e. Iran.
        </p>
        <p>
            The study was conducted in two phases: 1) designing a health-based game (and framework) and 2) developing the sweet care game. The design identified changes in behavior, i.e. promoting continuity of a preferential behavior, as the fundamental goal of health education and the game. Nine common models were investigated to achieve this goal: health belief model and behavior change, behavior intention model, PRECEDE model, Simon’s model, BASNEF model, planned behavior model, protection motivation model, social recognition, and trans theoretical model. A group of experts evaluated the importance of each model, and all proposed models had high or very high importance. Similarly, 153 medical professionals were questioned on importance of health-related criteria, i.e. healthy diet, physical activity behaviors, mental empowerment, education and condition management. Several electronic databases, e.g. PubMed, Web of Science, etc., were searched for previous examples of “games,” “video games,” etc. that could help shape the game’s technical, structural components.
        </p>
        <p>
            After identifying the technical requirements for creating a game, Game Maker Engine Construct was selected to develop and deliver the game, and the process of constructing the game was planned and executed.
        </p>
        <div className="center-content">
            <Image 
                alt="Sweet Care &mdash; Designing a health-based electronic game Figure 1"
                fluid
                src={ImageSweetCare1}
            />
            <div className="image-notes">
                Figure 1. Screenshots of “Sweet Care Game” (Fig 2), view of Sweet Care Game main homepage (Fig 3), battle with Sugar Mini Game (Fig 4), Physical Activity Mini Game (Fig 6), Buy from Store Mini Game (Fig 6) and Carbs Counting Mini Game.
            </div>
        </div>
        <p>
            Self-care agency was identified as the most important factor across several broad topics for behavioral change as well as being a core pillar in a number of models identified, e.g. Marchetti’s theoretical framework. From various other studies, the researchers report that the information content of a health-based game should consider both the information and technical components within a given framework, and if done correctly, can be a powerful communication tool. This includes defining a character and setting within a contextual scope of the game’s content to deepen and enrich the experience and memories of that experience; reward structures and consistency across instances of the game; negative feedback strategies that scale with the player’s abilities and successes / failures, i.e. the game gets harder as the player does better and easier when they do worse; fun should be accessible to a variety of players; easy to learn and increases in challenge; training tips to help players understand the game and develop the narrative and story; educational information be repeated in different ways and sections of the game; and all of the approiate age, cultural, and contextual information should be applicable to the player to avoid increasing possible risks, such as social isolation and decreased academic performance.
        </p>
        <p>
            This study provides an in-depth look into creating health-based games, and while it creates a game following the criteria it identified for such games, it does not provide any research on the implementation of the created game; however, it mentions that “[i]n future research, this work is carried out.” As with most serious games, more research is required to determine the overall efficacy of such a health-based game.
        </p>
        <br/>
        <p>
            Thanks for your time! Feel free to&nbsp;
            <a href={'/research?' + props.eventKey} alt="Share this Review" className="primary-link">
                share this review.
            </a>
        </p>
    </AccordionCard>
);

export default SweetCareGame;