import React from 'react';
const theme1 = { background: 'black', color: 'white'};
const theme2 = { background: 'salmon'};

const MyDiv = props => <div style={ props.theme1 || props.theme2 }>Here i am {props.children}</div>;
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
      { name: 'Dark Theme', props: { theme1 /* : your light theme */ } },
      { name: 'Salmon Theme', props: { theme2 /* : your dark theme */ } },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
  /* ... */ // multiple contexts setups are supported
];