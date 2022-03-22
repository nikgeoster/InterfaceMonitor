import React from 'react';
import Details from '../application/details';
import {Tabs,Tab} from 'react-bootstrap';

const Application= ({actApps, currentDate, }) => {
    return (         
        <div id="application">
            <Tabs defaultActiveKey="101">
                {actApps.map(data=>
                    <Tab  key={data.Interface_Id} eventKey={data.Interface_Id} title={data.Src_App+' '+ data.Dest_App} style={{ height:'100%', width:'100%', color:'#fefefe'}}>
                        <Details key={data.Interface_Id} data={data} date={currentDate}/> 
                    </Tab>                
                )}                
            </Tabs>            
        </div>
    );  
}

export default Application;