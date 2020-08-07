import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageVGExpertise1 from '../../../../assets/images/research/vg-expertise-fluid-intel-050720-01.png';
import ImageVGExpertise2 from '../../../../assets/images/research/vg-expertise-fluid-intel-050720-02.png';

const VGExpertise = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Video Game Expertise and Fluid Intelligence"
    >
        <p>
            Posted: May 2020
        </p>
        <p>
            <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0186621" alt="Video Game Expertise and Fluid Intelligence" className="primary-link">
            Exploring the relationship between video game expertise and fluid intelligence
            </a>
            <br />
            Athanasios V. Kokkinakis, Peter I. Cowling, Anders Drachen &amp; Alex R. Wade
            <br />
            Published: Nov 2017
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            MOBA performance is a good proxy to logical thinking &amp; solving novel problems.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Different games emphasize different abilities, like American football emphasizes size or power and international fútbol emphasizes speed or agility. Depending on the game, you’ll want to develop your muscles differently, like big muscles to push someone back vs light muscles to be quick and fast. One type of video game, MOBAs, showcase players that think logically and solve novel problems well.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Do you want to think logically? Want to solve novel problems well? If so, you should be playing a multiplayer online battle arena&mdash;aka MOBA&mdash;and be good at it. High ranking MOBA players, i.e. League of Legends &amp; Defense of the Ancients 2, have shown higher levels of working memory and with that, higher levels of fluid intelligence. In other words, higher ranks in those games correlated with higher scores in tests that measured those players' thinking and working memory skills. Age also plays into those measurements. Games with strong foundations in reaction skills and hand-eye coordination, like first person shooters, have a wide range of top performers between 13 and 27, whereas games with high logical thinking and novel problem solving, like MOBAs, tend to cluster their top performers in the early-to-mid 20s range. There are several caveats worth digging into and discussing, but MOBAs&mdash;and even video games in general&mdash;offer a robust insight into cognitive functions, and they may be useful for studying cognitive epidemiology at a global scale.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            The authors examine the potential link between intelligence and performance in video games, specifically Multiplayer Online Battle Arenas aka MOBAs. Through a number of previous studies looking at the relationship between skill performance in games and general intelligence, the authors assert that a similar link between intelligence and performance can be established through widely-played, commercially available, team-based video games that are available globally. MOBAs are an action-strategy game that rely heavily on memory, tactics, and strategy over hand-eye coordination, like First Person Shooters (FPS). Using MOBAs and FPS, the researchers conducted two studies.
        </p>
        <p>
            The first study used data&mdash;specifically player rank&mdash;from a popular MOBA ‘League of Legends’ (LoL), and they looked to see if fluid intelligence, which was reflected as scores on the WASI-II Matrix Test correlated with LoL rank. Along with their game rank, participants were also subjected to a number of working memory tasks along with a theory of mind test, i.e. MITE, to see how emotional processing correlated with intelligence. They found that fluid intelligence correlated significantly with rank, but they found no significant correlation between rank and MITE task scores as well as a weak correlation between rank and visuospatial working memory tests.
        </p>
        <p>
            In the second study, the researchers used a larger dataset to see if performance in MOBAs followed age profile maps for fluid intelligence, which follows a similar trajectory in population-level raw IQ where scores peak in the early-to-mid twenties. Using two MOBAs&mdash;LoL &amp; Defense of the Ancients 2 (Dota 2)&mdash;and two FPS&mdash;Destiny &amp; Battlefield 3, the researchers could compare games that prioritized speed and targeting accuracy over memory and multifactorial decision making. The researchers gathered ‘Matchmaking Ranking’ (MMR) scores for each game as well as participant age.
        </p>
        <div className="center-content">
            <Image 
                alt="Video Game Expertise and Fluid Intelligence Figure 1"
                fluid
                src={ImageVGExpertise1}
            />
            <div className="image-notes">
                Player Numbers &amp; Ages.
            </div>
        </div>
        <p>
            The researchers found different age trajectories between rank and game type. Age groups were divided into 3: first being 13-21, second being 22-27, and third being 28-40. Both types showed significant differences between the second and third groups, which indicated that performance, i.e. rank, falls in general after the mid-to-late 20s. However, MOBAs showed a significant increase between first and second age groups, whereas FPS showed more equal performance between first and second. This is consistent with the authors’ hypothesis that performance in MOBAs (and not FPS games) is correlated with fluid intelligence, which also exhibits this age profile.
        </p>
        <div className="center-content">
            <Image 
                alt="Video Game Expertise and Fluid Intelligence Figure 2"
                fluid
                src={ImageVGExpertise2}
            />
            <div className="image-notes">
                Age profiles of MMR in four different games.
            </div>
        </div>
        <p>
            While the data indicates a link between intelligence and video game performance, the authors point out that the relationship is correlational with unclear causality. Similar results have been noted by other researchers, but the study’s authors point out that factors such as age and adult responsibilities, MMR being tied to team performance, and a mildred of underlying cognitive factors as being points of contention and concern. However, if video games&mdash;MOBAs in particular&mdash;offer a robust insight into cognitive function, they may be used to study cognitive epidemiology at a massive scale&mdash;instantly overcoming existing issues with small sample sizes and potentially allowing researchers to examine dynamic changes in performance at a population level in almost real time.
        </p>
    </AccordionCard>
);

export default VGExpertise;