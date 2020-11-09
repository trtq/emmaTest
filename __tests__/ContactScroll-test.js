import React from 'react';
import {ContactScroll} from '../src/ContactScroll/ContactScroll';
import {pullImage} from '../assets/images/pullImage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const DATA = [
  {
    firstName: 'Ashley',
    restOfName: 'Mc Carty',
    role: 'Sales Representative',
    image: pullImage('AllanMunger'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
  {
    firstName: 'Robert',
    restOfName: 'De Niro',
    role: 'Writer',
    image: pullImage('AmandaBrady'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
  {
    firstName: 'Jackie',
    restOfName: 'Chan',
    role: 'Writer',
    image: pullImage('AshleyMcCarthy'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
  {
    firstName: 'Samuel',
    restOfName: 'L Jackson',
    role: 'Writer',
    image: pullImage('AllanMunger'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
  {
    firstName: 'Evgeny',
    restOfName: 'Ivanitsy',
    role: 'Writer',
    image: pullImage('CarlosSlattery'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
  {
    firstName: 'Natalie',
    restOfName: 'Portman',
    role: 'Writer',
    image: pullImage('CarolePoland'),
    description:
      'Aliquam venenatis erat ac ligula blandit suscipit. Quisque sit amet auctor massa. Suspendisse potenti. Aenean laoreet sit amet massa sed ullamcorper. Cras mattis, enim sed molestie cursus, purus turpis dapibus eros, efficitur efficitur sem metus id velit. Nam lacus magna, laoreet pellentesque tristique vel, ultrices sed urna. Aenean rhoncus erat id egestas hendrerit. Maecenas molestie ipsum at lacus viverra tincidunt. Maecenas feugiat, sapien hendrerit blandit eleifend, neque odio hendrerit erat, nec feugiat ligula diam vestibulum ex.',
  },
];

test('ContactScroll snapshot', () => {
  const snap = renderer.create(<ContactScroll data={DATA} />).toJSON();
  expect(snap).toMatchSnapshot();
});
