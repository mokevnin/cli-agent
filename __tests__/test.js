// @flow

import path from 'path';
import CLIAgent from '../src';

test('success', async () => {
  let year;
  const interaction = new CLIAgent(path.join(__dirname, 'fixtures', 'app.sh'));
  const result = await interaction.wait(/hello/i)
    .wait(/question/i)
    .send('2014\n')
    .wait(/year is (\d+)/, (matches) => {
      year = matches[1];
    })
    .start();
  expect(result).toBe(0);
  expect(year).toBe('2014');
});

test('error', async () => {
  const interaction = new CLIAgent(path.join(__dirname, 'fixtures', 'app.sh'), {
    timeout: 600,
  });
  try {
    await interaction.wait(/unknown/i).start();
    throw new Error('fail');
  } catch (e) {
    // true
  }
});
