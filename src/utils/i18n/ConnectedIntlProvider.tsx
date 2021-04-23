import React from 'react';
import { languages, SupportedLanguages } from './index';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConnectedIntlProvider = (props: { children: any; lang: string }) => {
    const { children, lang } = props;
    return (
        <IntlProvider messages={languages[lang as SupportedLanguages]} locale={lang} defaultLocale="es">
            {children}
        </IntlProvider>
    );
};

function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(ConnectedIntlProvider);
