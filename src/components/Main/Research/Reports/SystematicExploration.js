import React from 'react';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';

const SystematicExploration = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Systematic Exploration and Uncertainty"
        param={props.param}
    >
        <p>
            Posted: May 2021
        </p>
        <p>
            <a href="https://doi.org/10.1111/desc.13026" alt="Systematic Exploration and Uncertainty" className="primary-link">
            Systematic Exploration and Uncertainty Dominate Young Children’s Choices
            </a>
            <br />
            Nathaniel J. Blanco, Vladimir M. Sloutsky
            <br />
            Published: Aug 2020
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Kids tend to explore rather than exploit.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            If I had a gold mine and I wanted to get more gold, I could either keep going down into my gold mine to get more, or I could explore around my gold mine to see if there’s gold anywhere else. There’s uncertainty if I go explore for new sources of gold, and I can get the most bang-for-my-buck if I keep going to my gold mine. For kids, they have a stronger tendency to explore for new gold rather than exploit the gold mine they know exists. This drive to explore helps them learn and grow while they see and experience what’s around.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Children have a strong tendency to explore. They do it frequently and in their own systematic way. In lieu of a mature, top-down controlling mindset, kids are likely to search for information and explore uncertainties about their experience. For example, one study did two experiments on kids and adults investigating exploration vs exploitation. The kids were more likely to get caught up in exploring rather than min-maxing the resources that would get them rewards. It could have been their immature attention that caused them to mill about; however, the increased exploration provided them with more novel situations and information about their environment, which fit a simpler pattern of thinking found in children.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Early in development, exploration is critical, frequently invoked, and largely systematic for children. Uncertainty towards choices and making decisions is important and complicated for them. In an absence of mature, top-down control, systematic exploration can be implemented and encouraged.
        </p>
        <p>
            In an experiment containing 32 4-year olds (i.e. preschool &amp; day-care children) and 34 adults (i.e. undergrads), researchers measured the two different populations tendencies towards exploitation (i.e min-maxing resources) and exploration. Using a computer simulation, participants were given an area that contained value points, and their goal was to obtain as many value points as possible. Four year olds are known to have immaturities in selective attention and cognitive control, but they can understand a task and make independent choices. So it didn’t surprise the researchers that the children min-max’d less than the adults. The majority of children actively searched the environment rather than randomly acquired resources. They had many, different ways of exploring&mdash;strategies that approximated uncertainty-based exploration&mdash;whereas the adults carried out similar, consistent min-maxing strategies. What did interest the researchers is how the children were driven partially by uncertainty, which they dug into more in their second experiment.
        </p>
        <p>
            In another experiment containing 36 4 &amp; 5-year olds and 37 adults, the researchers measured each population’s tendency towards min-maxing resources (i.e. exploitation) when an option was hidden. Using a computer simulation, participants were given 4 options to choose from&mdash;their values remained consistent throughout all the trials&mdash;but one of the options was randomly hidden and varied per trial. Again, children min-max’d less than the adults, and by-in-large, the children chose the hidden option a fair amount more&mdash;more than adults&mdash;even if it wasn’t the best option. The children also handled the hidden option differently, i.e. overwhelmingly selecting it or avoiding it altogether, but they were drawn to the uncertainty of the hidden option more than the adults, who min-max’d quickly like the first experiment.
        </p>
        <p>
            Experiment 1 illustrates that children tend to explore rather than exploit, and they explore in patterns where uncertainty is their direction, i.e. as an attraction or avoidance. There are several possibilities as to why, but one idea is that children use simpler thinking patterns, e.g. preferring novel things, along with broader, systemic sampling of their environment, which could ignore task performance or reward seeking. Children’s immature attention allocation facilitates their systematic exploration, i.e. they don’t focus well so they keep milling about. This increased exploration helps learning because it provides information when little is known.
        </p>
        <p>
            It’s worth noting that some children did follow “adult-like” reward-based strategies, i.e. min-max’d well, and this could be due to early academic instruction or maturation to brain areas involved in decision-making. More research would be valuable. The main takeaway as noted by the researchers is that: 
            <br/>
            “This research demonstrates that systematic exploratory behavior can stem from other mechanisms than top-down cognitive control, and that these mechanisms may be specifically tuned to achieve broad information gathering in young children. If this is the case, some of the early immaturities of top-down control (e.g. distributed attention) may be advantageous for children: these immaturities may optimize learning (rather than performance) by sub-serving broad information gathering.”
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

export default SystematicExploration;