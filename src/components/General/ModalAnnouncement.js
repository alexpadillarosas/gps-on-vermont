import React from "react"
import { Button, Modal, CardImg } from "reactstrap";


const ModalAnnouncement = () => {

    const [modal1, setModal1] = React.useState(true);
    console.log("Modal being called");
    return (
        <>
            <Modal
                modalClassName="modal-mini modal-info" 
                style={ {top: 20 }}
                toggle={() => setModal1(false)}
                isOpen={modal1}
              >
                {/* <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div> */}
                {/* <ModalBody> */}
                  {/* <p>New Patientes are Welcome</p> */}
                  <CardImg src={require(`../../assets/img/new-patients-welcome2.png`)} />
                {/* </ModalBody> */}
                <div className="modal-footer" style={{ padding: 0 }}>
                  {/* <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button> */}
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
        </>
    )
}

export default ModalAnnouncement;

