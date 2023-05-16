import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const navLang = navigator.language;
let messages;
if (navLang === "es") {
    messages = localeEsMessages; // Utiliza los mensajes en español
} else if (navLang === "en") {
    messages = localeEnMessages; // Utiliza los mensajes en inglés como valor predeterminado
}

ReactDOM.render(
    <IntlProvider locale={navLang} messages={messages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);