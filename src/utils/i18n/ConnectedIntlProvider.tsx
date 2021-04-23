import React from 'react';
import { languages } from './index';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConnectedIntlProvider = (props: { children: any; lang: string }) => {
    const { children, lang } = props;
    return (
        <IntlProvider messages={languages.en} locale={lang} defaultLocale="en">
            {children}
        </IntlProvider>
    );
};

function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(ConnectedIntlProvider);
