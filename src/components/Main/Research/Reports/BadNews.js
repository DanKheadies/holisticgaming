import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageBadNews1 from '../../../../assets/images/research/bad-news-071419-01.png';
import ImageBadNews2 from '../../../../assets/images/research/bad-news-071419-02.png';
import ImageBadNews3 from '../../../../assets/images/research/bad-news-071419-03.png';
import ImageBadNews4 from '../../../../assets/images/research/bad-news-071419-04.png';

const BadNews = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Bad News's Effect on Psychological Resistance"
    >
        <p>
            Posted: Jul 2019
        </p>
        <p>
            <a href="https://www.nature.com/articles/s41599-019-0279-9" alt="Bad News Effect on Psychological Resistance" className="primary-link">
                Fake news game confers psychological resistance against online misinformation
            </a>
            <br />
            Jon Roozenbeek &amp; Sander van der Linden
            <br />
            Published: Jun 2019
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            A game about fake news helps people identify and resist misinformation.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Lies work like the flu. They can attack and hurt you without you knowing, and trying to treat them after they’ve infected you can be hard and painful. People invented vaccines to help others avoid getting sick from the flu, and likewise, people have created a game to help others avoid getting attacked and misinformed by lies and fake news.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Like vaccinations, inoculation theory is being applied to misinformation and fake news. By exposing people to a weakened version of an argument with proper refutation and resolution, people are less likely to be influenced by misleading information and deceptive lies. Through the Bad News game, players learn about 6 techniques used to spread misinformation: impersonation, emotions, polarization, conspiracies, discrediting, and trolling. Almost 45,000 participants played and roughly 15,000 players consented to the research project and questions.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            The spread and effect of misinformation is vast and quick, and the current counter-measures&mdash;debunking and fact-finding tools&mdash;can only help so much to stem the flow of online misinformation. Rather than using external, “after-the-fact” approaches, personally preemptive and inoculative measures prevent false narratives from being accepted and believed. These inoculative techniques have shown preventative and climate change, but by focusing on the common tactics used to produce misinformation, researchers believe they can reduce the overall impact of misinformation across any domain.
        </p>
        <p>
            Using a novel psychological intervention designed to instill cognitive resistance to fake news, players attempt to attract followers and maximize credibility in the game Bad News. As players move from social media noobies to fake news empires, the game focuses on 6 strategies commonly used to spread misinformation: impersonating people online, using emotional language, group polarization, floating conspiracy theories and building echo chambers, discrediting opponents, and trolling people online and false amplification. Using convenience sampling, i.e. anyone with internet connectivity and could reach the game website, the researchers recruited over 43,000 responses with 14,266 pre-post responses, i.e. the driver of their results below.
        </p>
        <div className="center-content">
            <Image 
                alt="Bad News's Effect on Psychological Resistance Figure 1"
                fluid
                src={ImageBadNews1}
            />
            <div className="image-notes">
                Bad News Game.
            </div>
        </div>
        <div className="center-content">
            <Image 
                alt="Bad News's Effect on Psychological Resistance Figure 2"
                fluid
                src={ImageBadNews2}
            />
            <div className="image-notes">
                Example gameplay.
            </div>
        </div>
        <p>
            The research shows that the gameplay activates inoculation toward online misinformation strategies.
        </p>
        <div className="center-content">
            <Image 
                alt="Bad News's Effect on Psychological Resistance Figure 3"
                fluid
                src={ImageBadNews3}
            />
            <div className="image-notes">
                Average player reported reliability towards tweets with no misinformation techniques (i.e. Control 1 &amp; 2) vs. techniques (i.e. impersonation, conspiracy, deflection).
            </div>
        </div>
        <div className="center-content">
            <Image 
                alt="Bad News's Effect on Psychological Resistance Figure 4"
                fluid
                src={ImageBadNews4}
            />
            <div className="image-notes">
                Average player reported reliability towards tweets with no misinformation techniques (i.e. A) vs. techniques of impersonation, conspiracy, deflection (i.e. B, C, &amp; D).
            </div>
        </div>
        <p>
            These small to moderate effects are consistent with other research that show small effects are common and meaningful across individuals over time. The more players play, the more effective they’ll be at avoiding information strategies in the future.
        </p>
        <p>
            Further research would investigate other gaming possibilities as an inoculating therapy, such as an immunology game improving awareness and decision-making for health and health-care.
        </p>
    </AccordionCard>
);

export default BadNews;