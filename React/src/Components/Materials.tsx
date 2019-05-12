import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Styling/Home.css';
import Material from '../Models/Material';
import ItemsList from './Forms/ItemsList';

interface IMaterialsState {
    materials: Array<Material>
}

export default class Materials extends React.Component<{}, IMaterialsState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            materials: []
        };
    }

    public componentDidMount() {
        fetch ("https://localhost:5001/api/material")
            .then((response) => response.json())
            .then((data) => {
                console.log("materials:", data)
                this.setState({materials: data});
            });
    }

    public render() {
        const materialListColumns = [{
            InternalName: "id",
            DisplayName: "Id",
            Render: (x: any) => x
        }, {
            InternalName: "providerId",
            DisplayName: "Provider id",
            Render: (x: any) => x
        }];
        const materialsList = this.state.materials.length === 0
            ? null
            : (
            <Row>
                <ItemsList 
                    items={this.state.materials}
                    columns={materialListColumns}
                />
            </Row>
            );
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <div className={'homeText'}>
                            in Entrant
                        </div>
                    </Col>
                </Row>
                {materialsList}
            </div>
        );
    }
}