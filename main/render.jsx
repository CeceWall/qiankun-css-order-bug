import React from 'react';
import ReactDOM from 'react-dom';

const SubApp = (props) => {
    const { appContent } = props;
    return (
        <div dangerouslySetInnerHTML={{ __html: appContent }} />
    )
}

const Main = (props) => {
    const { appContent } = props;
    return (
        <ul className="mainapp-sidemenu">
            <li onClick={() => history.pushState(null, 'subapp', '/subapp')}>mount</li>
            <li onClick={() => history.pushState(null, 'react15', '/react15')}>unmount</li>
            <SubApp appContent={appContent} />
        </ul>
    )
}


export default function render({ appContent }) {
    const container = document.getElementById('mainApp');
    ReactDOM.render(
        <Main appContent={appContent} />,
        container,
    );
}