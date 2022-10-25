import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImagePokemonGo1 from '../../../../assets/images/research/pokemon-go-080922-01.png';

const PokemonGoPhysical = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Pokemon Go's Impact on Physical Activity"
        param={props.param}
    >
        <p>
            Posted: August 2022
        </p>
        <p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5174727/" alt="Pokemon Go's Impact on Physical Activity" className="primary-link">
                Impact of Pokemon Go on Physical Activity: A Systematic Review and Meta-Analysis
            </a>
            <br />
            Madina Khamzina, MPH, Kaustubh V. Parab, MPH, MBBS, Ruopeng An, PhD, Tiffany Bullard, PhD, Diana S. Grigsby-Toussaint, PhD
            <br />
            Published: Dec 2016
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Pokemon Go makes people walk more.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Being physically health is good. There are a lot of ways people can stay physically healthy: running, swimming, playing sports, working out, and on and on. The trick is finding something that gets people up and active. Pokemon Go is a good way for people to get up and be active. A lot of people enjoy walking around their community in search of Pokemon to catch and battle.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Helping people stay healthy is a challenge, but it's good for the individual and the population overall. The coupling of individualized health interventions and technology shows promise in helping people becoming and staying healthier. One example is Pokemon Go: a mobile game that requires players to walk around and hunt virtual characters with their phone.
        </p>
        <p>
            While the results aren't revolutionary, this meta-analysis shows people walked more playing this game than they would have otherwise, which in turn improved their general health. It provides a helpful starting point for other research to investigate what assets and aspects of a game like Pokemon Go can be incorporated into health-focused technology to increase the breadth of people and the depth for individuals as the improve their overall health.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Physical activity can help prevent chronic disease, maintain a healthy weight, and improve quality of life. New technology has facilitated physical activity by providing more insight and structure into peoples' lives and health journeys. Without intending to be a mobile health app, Pokemon Go has reached millions of people to promote energy expenditure, weight loss, and overall health. Similar to other activities like geo-caching, this mobile app presents an enjoyable alternative to traditional physical activity, and it provides a level of motivation towards physical activity that has been absent for a lot of people. Players walk to various locations using the mobile phone's GPS and try to catch special virtual characters, battle against others, and to collect prizes, rewards and the like.
        </p>
        <p>
            Many studies have reported mixed results about Pokemon Go's health impact, and this study provides the first systematic review and meta-analysis on the impact of Pokemon Go on physical activity. Using PRISMA guidelines and searching 8 electronic bibliographical databases, 17 articles were chosen from 269 articles containing 'Pokemon Go' as well as 7 other criteria points, which included using the app, outcome and degrees of physical activity, time window, language, study design, population screened, and other factors. 
        </p>
        <div className="center-content">
            <Image 
                alt="Table 1 - PRISMA study selection flowchart"
                fluid
                src={ImagePokemonGo1}
            />
            <div className="image-notes">
                Table 1 - PRISMA study selection flowchart
            </div>
        </div>
        <p>
            Physical activity outcomes were assessed by the number of steps taken, duration of time spent being physically active, time spent engaging in sedentary behavior, walking distance, and energy expenditure. A comparison between Pokemon Go players and non-players  and a comparison between pre- and post-play time revealed an increase in walking duration (minutes/day), distance walked (miles/week), and number of steps/day. Players were less likely to spend time sitting while playing Pokemon Go.
        </p>
        <p>
            Pokemon Go was able to reach millions of people and influence their health behavior by providing a different way to individualize health interventions. Some studies noted that the experience was not without risk, e.g. bone fractures and skin injuries. Additionally, the measurements, e.g. duration of play, pre- vs post-play or players vs controls, etc., and outcomes, e.g. effects on adults vs children and adolescents, across the studies made it difficult to provide one unilateral conclusion. Similarly, the reliability and validity of instruments used to measure outcomes along with the overall use of observational study design rather than prospective limited the ability to infer causal relationships between Pokemon Go and physical activity. However, this study found that playing Pokemon Go was associated with a statistically significant but clinically modest increase in the number of daily steps taken among game players.
        </p>
        <p>
            Future research should examine player retention and the long-term effects of Pokemon Go along with other augmented reality games. Aspects, like in-app events, affected player attrition rate, engagement, re-engagement, and overall time spent with the app, and these aspects, along with other characteristics of the experience, would be helpful in identifying and crafting more enduring, interventions.
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

export default PokemonGoPhysical;