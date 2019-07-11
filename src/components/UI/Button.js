import React from 'react'
import Button from '@material-ui/core/Button';
import Ticket_Icon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button href={props.link} variant="contained" size="small" 
        style={{
            background: `${props.bck}`,
            color: `${props.color}`
        }}>
            <img src={Ticket_Icon} alt="logo" className="iconImage"/>
            {props.text}
        </Button>
    )
}

export default MyButton
