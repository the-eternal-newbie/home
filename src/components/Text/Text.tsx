import React from 'react';
import { FormattedMessage } from 'react-intl';

const Text: React.FC = () => {
    return (
        <p>
            <FormattedMessage id="Generic.Welcome" />
        </p>
    );
};

export default Text;
