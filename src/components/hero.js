import React, { useState} from "react";
import {Image, Button, Header, Modal} from "semantic-ui-react"



function Hero(props) {

    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow(!show);
        console.log(show);
    }

        
        return(
            <div key={props.id} style={{display:'inline-block'}}>
                
                <button className="ui button" onClick={handleModal}>
                
                <Image src={props.thumbnail} />

                </button>

                <Modal open={show} size="large">
                    <Modal.Header>hola{props.name}</Modal.Header>
                    <Modal.Content image >
                    <Image src={props.thumbnail} />
                      <Modal.Description>
                        <Header>{props.name}</Header>
                        {props.description}
                        holangas
                      </Modal.Description>
                        <Button variant="secondary" onClick={handleModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleModal}>
                            Save Changes
                        </Button>
                    </Modal.Content>
                </Modal>
            </div>
        )
    
}

export default Hero;
