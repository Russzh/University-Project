import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from './Navigation';

// interface ILayoutProps {
//     children: React.Component;
// }

export default class Layout extends React.Component<any, {}> {
    public constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <Container>
                <Row>
                    <Navigation />
                </Row>
                <main>
                    {this.props.children}
                </main>
            </Container>
        );
    }
}