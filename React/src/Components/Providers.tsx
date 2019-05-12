import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Styling/Home.css';
import Provider from '../Models/Provider';
import ItemsList from './Forms/ItemsList';

interface IProviderState {
    providers: Array<Provider>
}

export default class Materials extends React.Component<{}, IProviderState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            providers: []
        };
    }

    public componentDidMount() {
        fetch ("https://localhost:5001/api/provider")
            .then((response) => response.json())
            .then((data) => {
				console.log("materials:", data);
				data.forEach((x: any) => {x.numberOfMaterials = x.materials.length});
                this.setState({providers: data});
            });
    }

    public render() {
        const providerListColumns = [{
            InternalName: "id",
			DisplayName: "Id",
			Render: (x: any) => <a href={`/providers/${x.id}`}>{x.name}</a>
        }, {
            InternalName: "name",
            DisplayName: "Provider name",
			Render: (x: any) => x.name
        }, {
			InternalName: "numberOfMaterials",
			DisplayName: "Number of materials",
			Render: (x: any) => x.numberOfMaterials
		}];
        const providersList = this.state.providers.length === 0
            ? null
            : (
            <Row>
                <ItemsList 
                    items={this.state.providers}
                    columns={providerListColumns}
                />
            </Row>
            );
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <div className={'homeText'}>
                            in Profile
                        </div>
                    </Col>
                </Row>
                {providersList}
            </div>
        );
    }
}