// @flow

import path from 'path';
import CLIAgent from '../src';

test('Cli Agent', async () => {
  const interaction = new CLIAgent(path.join(__dirname, 'fixtures', 'app.sh'));
  const result = await interaction.wait(/hello/i)
    .wait(/question/i)
    .send('2014\n')
    .wait(/year is (\d+)/, (matches) => {
      expect(matches[0]).toBe(2014);
      return interaction.wait('good');
    })
    .start();
  expect(result).toBe(0);
});
