import React from 'react'
import Iframe from 'react-iframe'
import {
    CRow
} from '@coreui/react'
const Iframee = () => {
    return (
        <div>
            <CRow className="row justify-content-md-center">
                <Iframe url="https://lookerstudio.google.com/embed/reporting/7e132dd0-8a9c-4f5a-86ac-0071f1029710/page/149ID"
                    position="absolute"
                    width="100%"
                    id="myId"
                    className="myClassname"
                    height="100%"
                    styles={{ height: "100%" }} />
            </CRow>
        </div>
    )
}

export default Iframee
