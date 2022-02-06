import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BusinessS1 from "../components/business-s1";
import BusinessS2 from "../components/business-s2";
import BusinessS3 from "../components/business-s3";

class Business extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BusinessS1/>
                <BusinessS2/>
                <BusinessS3/>
            </Container>    
        );
    }
}

export default Business;