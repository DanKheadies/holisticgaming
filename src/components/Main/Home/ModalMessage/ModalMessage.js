import React from 'react';
import { Button } from 'react-bootstrap';

import './ModalMessage.scss';
import Aux from '../../../../hoc/Aux/Aux';

const modalMessage = props => (
    <Aux>
        <div className="center-content">
            <h4>
                You're smarter than you think.
                <br />
                So keep playing.
            </h4>
        </div>
        <br />
        <p>
            All games—board games, sports games, card games, dice games, video games, etc.—use and train our thinking abilities. These mental abilities are activated when we read directions, learn rules, move our bodies, organize units, spend resources, solve problems, and throughout all aspects of a game. Cognition is the ability to think, and cognitive abilities are the mental abilities we use to think. How we perceive an environment, what we attend to and focus on, what we remember, how we communicate, how we make decisions, solve problems, and reason all use and train our cognitive abilities. In a physical workout, we train our muscles to get bigger and stronger by using them. Likewise, in a mental workout, we train our mental abilities to get faster and smarter by using them. Gamers are atheletes, and like most of our olympic and sport athletes, we train every day.
        </p>
        <p>
            Whether it's a well structured, mental regiment or a naturally emerging jungle gym, games train our cognitive abilities: perception, attention, memory, communication, problem solving, decision making, and reasoning skills. A number of real-world activities use and train cognitive abilities too, such as conversating, reading, cooking, driving, dancing, working, and learning; however, gaming is an intense, flavorful form of learning that people have a higher affinity towards over most real-world activities. Games attract people. Games engage people. Games challenge people. Games motivate people. Games use and train our cognitive abilities, and we grow smarter every time we play a game. The more mindful we are of this mental training, the more we can control our mental growth and well-being.
        </p>
        <p>
            You're smarter than you think. So keep playing.
        </p>
        <div className="modal-button-container">
            <Button 
                onClick={props.dismissModal}
                size="lg"
                variant="outline-dark"
            >
                Play On
            </Button>
        </div>
    </Aux>
);

export default modalMessage;