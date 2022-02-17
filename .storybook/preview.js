import { worker } from '../src/__mocks__/browser';
import '../src/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

if (typeof global.process === 'undefined') {
  worker.start();
}
