import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledText } from './Text.styled';
import { IText } from './Text.types';

const Text: React.FC<IText> = (props: IText) => {
    const { id, style } = props;
    return (
        <StyledText style={style}>
            <FormattedMessage id={id} />
        </StyledText>
    );
};

export default Text;
