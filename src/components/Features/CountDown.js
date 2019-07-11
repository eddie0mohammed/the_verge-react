import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';

class CountDown extends Component {

    state = {
        deadline: 'Dec, 16, 2019',
        days: '0',
        hrs: '0',
        min: '0',
        sec: '0'
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }

    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0){

        }else{
            const sec = Math.floor((time / 1000) % 60);
            const mins = Math.floor((time / 1000/ 60) % 60);
            const hrs = Math.floor((time / (60 * 60 * 1000)) % 24);
            const days = Math.floor((time / (60 * 60 * 1000 * 24)));

            this.setState({
                days: days,
                hrs: hrs,
                min: mins,
                sec: sec
            })
        }

    }
    render() {
        return (
            <Slide left delay={1000}>

          
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">{this.state.days}</div>
                        <div className="countdown_tag">Days</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{this.state.hrs}</div>
                        <div className="countdown_tag">Hrs</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{this.state.min}</div>
                        <div className="countdown_tag">Min</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{this.state.sec}</div>
                        <div className="countdown_tag">Sec</div>
                    </div>
                </div>
                
            </div>
            </Slide>
        )
    }
}

export default CountDown