import React, {useState, useContext,useNavigate} from 'react';
import './Main.css';
import Event from './Event/Event';
import { GlobalContext } from '../context/GlobalState';
const Main = () => {
    // hooks
    const [event, setName]=useState('');
    const [time, setTime]=useState('');
    const { addEvent }=useContext(GlobalContext);
    const { events }=useContext(GlobalContext);
    
    const onSubmit = e =>{
        e.preventDefault();
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }
        addEvent(newEvent);
        setName('');
        setTime('');
    }
    let AddEvent = ()=>{
        let navigate = useNavigate();
        let [state,setState] = useState({
            loading: false,
            event : {
                "name": "",
                "time": "",
                "groupId": ""
            },
            groups : [],
            errorMessage : ''
        });
        let updateInput = (event)=>{
            setState({
                ...state,
                event: {
                    ...state.event,
                    [event.target.name] : event.target.value
                }
            });
        };
    }
    return (
        <div class="Content">
            <div class="Header">
                <div class="Layer">
                    Events
                </div>
            </div>
            <div class="Body">
                <ul class="Events">
                    {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
                <div class="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input class="eventName" value={event} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter the event you want to add"></input>
                        <input class="eventTime" value={time} onChange={(e) => setTime(e.target.value)}type="text" placeholder="Time"></input>
                        <button class="submit">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
}
export default Main;