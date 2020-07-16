import React from 'react';
const theme1 = { test: 'Brazzers theme'};
const theme2 = { test: 'Reality kings theme2'};

const MyDiv = props => <div>{props.children}</div>;
const MyDiv2 = props => <div>{props.children}</div>;
export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [
      // an array of components that is going to be injected to wrap stories
      /* Styled-components ThemeProvider, */
      /* Material-ui ThemeProvider, */
      MyDiv
    ],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'Light Theme', props: { theme1 /* : your light theme */ } },
      { name: 'Dark Theme', props: { theme2 /* : your dark theme */ } },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
  /* ... */ // multiple contexts setups are supported
];