import { Card  } from 'react-bootstrap';
import ThresholdConfig from '../Thresholds/ThresholdValues';
import ExceptionConfig from '../Thresholds/ExceptionThresholdValues';

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const readThreshold=(id)=>{
    let search= ThresholdConfig.ThresholdConfig.find((s) => s.Interface === id); 
    return search.Day;            
}

const renderClass=(count,interfaceId,selectedDate) =>{
    if(isNaN(count)){
        return 'ResultColorRed';   
    } 
    else{
        var value=parseInt(count);
        if(value>0)
            return 'ResultColorGreen';
        else{        
            let search= ExceptionConfig.ExceptionConfig.find((s) => s.Interface === interfaceId);
            if(search){
                const exceptionDay = search.Day;   
                let selectedDay = weekday[selectedDate.getDay()];
                if(exceptionDay.toUpperCase().trim()===selectedDay.toUpperCase()){
                    return 'ResultColorYellow';
                }
                else
                    return 'ResultColorRed';            
            }
            else
                return 'ResultColorRed'                       
        }
    }
}

const renderBackground=(count,interfaceId,selectedDate) =>{
    if(isNaN(count)){
        return 'red'; 
    }
    else{
        var value=parseInt(count);
        if(value>0)
            return 'green';
        else{
            let search= ExceptionConfig.ExceptionConfig.find((s) => s.Interface === interfaceId);            
            if(search){
                const exceptionDay = search.Day;   
                let selectedDay = weekday[selectedDate.getDay()];
                if(exceptionDay.toUpperCase().trim()===selectedDay.toUpperCase())
                    return 'yellow';
                else
                    return 'red';            
            }
            else
                return 'red'; 
        }
    }       
}

const Result = (appData) => {
    if(appData.appData && appData.appData.length>0){
        return (                                           
            <div className="carddet">
                {appData.appData.map(data=>
                    <Card  key={data.Table_Nm} style={{ display: 'inline', padding:'1rem',margin: "0.5rem 1rem", textTransform: 'uppercase', backgroundColor:renderBackground(data.Count,appData.interfaceId,appData.selectedDate),  borderRadius: '25px'}}>
                        <Card.Body className={renderClass(data.Count,appData.interfaceId,appData.selectedDate)}>
                            <Card.Title style={{ fontWeight: 'bold' }}>{data.Table_Nm}</Card.Title>
                            <Card.Text style={{ textAlign: 'right' }}>
                                {data.Count}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )} 
            </div>   
        );
    }
    else{
        let scheduledDay=readThreshold(appData.interfaceId);
        const selectedDate = appData.selectedDate;
        let selectedDay = selectedDate.getDay();
        if(scheduledDay==="Daily"){
            return (        
                <div>
                    ERROR Interface not found for the selected date
                </div>
            );
        }
        else if (scheduledDay!==selectedDay){
            return (        
                <div className="NotExpected">
                    Interface is not expected for the selected date
                </div>
            );
        }
        else{
            return(
                <div>
                    Error Occured
                </div>
            )
        }
    }
};

export default Result;