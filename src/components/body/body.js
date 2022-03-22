import { Container } from 'semantic-ui-react';
import Header from '../header/index';
import Content from '../content/content';

function Body(){
    return(
        <Container id="mainContainer">
            <div id="header">
                <Header/>  
            </div>
            <div id="content">
                <Content/>
            </div> 
            <div class="footer">
                <p>Legend:
                    <ul class="legend">
                        <li><span class="allgood"></span>All Good</li>
                        <li><span class="exception"></span>Table not expected for the selected Date</li>
                        <li><span class="err"></span>Table Count is <b>0</b></li>
                    </ul>
                </p>
            </div>             
        </Container>
    );
};

export default Body;