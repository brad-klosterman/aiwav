import { Config } from '../boilerplate/config';
import { sayHello } from './hello-world';

describe('sayHello tests', () => {
  it('given name and env, should create correct hello string', () => {
    const config: Config = {
      project: 'test-project',
      stage: 'unit-testing',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    };
    const name = 'me';
    const agent = 'test';
    const result = sayHello(config, name, agent);
    expect(result).toContain('Hello World');
    expect(result).toContain(config.stage);
    expect(result).toContain(config.project);
    expect(result).toContain(name);
    expect(result).toContain(agent);
  });
});
