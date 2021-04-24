import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { StyledText } from './Text.styled';
import { IText } from './Text.types';

const Text: React.FC<IText> = (props: IText) => {
    const { id, style, lang, animation } = props;
    return (
        <StyledText key={`${id}-${lang}`} style={style} animation={animation}>
            <FormattedMessage id={id} />
        </StyledText>
    );
};

// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(Text);
