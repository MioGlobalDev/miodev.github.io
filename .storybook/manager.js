import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Mio Chibana Components',
    brandUrl: 'https://miodev.us.kg',
  },
});
