import '../src/index.css';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts';

addDecorator(withContexts(contexts));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
