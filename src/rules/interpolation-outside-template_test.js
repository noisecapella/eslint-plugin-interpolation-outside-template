import { RuleTester } from 'eslint';
import rule from './interpolation-outside-template';

describe('interpolation-outside-template', () => {
  let ruleTester;
  beforeEach(() => {
    ruleTester = new RuleTester();
  });

  it('has a ${ which is not inside a template string', () => {
    ruleTester.run("interpolation-outside-template", rule, {
      valid: [
        {
          code: "3, null, \"\", '', ``",
          parserOptions: { ecmaVersion: 6 }
        }
      ],
      invalid: [
        {
          code: "\"There is a ${x} here\"",
          errors: [
            {
              message: "Unexpected template interpolation."
            }
          ]
        }
      ]
    });
  });

  it('has a ${ which is inside a template string', () => {
    ruleTester.run("interpolation-outside-template", rule, {
      valid: [
        {
          code: "`${x}`",
          parserOptions: { ecmaVersion: 6 }
        }
      ],
      invalid: [
        {
          code: "'${x}'",
          errors: [
            {
              message: "Unexpected template interpolation."
            }
          ]
        }
      ]
    });
  });
});
