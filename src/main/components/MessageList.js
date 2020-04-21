import React from 'react';

const MessageList = ({ data }) => (
    <ul>
        { data.map(item => {
            return <li data-testid={item.key} key={item.key}>{item.value}</li>
        }) }
    </ul>
);

export default MessageList;