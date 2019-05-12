import * as React from 'react';
import '../Styling/NotFound.css';
 
export default class NotFound extends React.Component<any, {}> {
    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <p className={'notFound'}>
                "404 Not found"
            </p>
        )
    }
}