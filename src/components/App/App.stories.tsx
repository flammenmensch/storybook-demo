import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App';
import { worker } from '../../__mocks__/browser';
import { rest } from 'msw';

export default {
  title: 'main/App',
  component: App,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  decorators: [
    (Story) => {
      worker.resetHandlers();

      return <Story />;
    },
    (Story) => {
      const client = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            cacheTime: 0,
            staleTime: 0,
          },
        },
      });

      return (
        <QueryClientProvider client={client}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Success = Template.bind({});
Success.decorators = [
  (Story) => {
    return <Story />;
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (Story) => {
    worker.use(rest.get('*', (req, res, ctx) => res(ctx.delay('infinite'))));

    return <Story />;
  },
];

export const Error = Template.bind({});
Error.decorators = [
  (Story) => {
    worker.use(rest.get('*', (req, res, ctx) => res(ctx.status(404))));

    return <Story />;
  },
];
