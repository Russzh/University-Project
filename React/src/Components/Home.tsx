import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Styling/Home.css';
 
export default class Home extends React.Component<{}, {}> {
    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Row>
                <Col md={12}>
                    <div className={'homeText'}>
                        CompanyService
                    </div>
                </Col>
            </Row>
        );
    }
}