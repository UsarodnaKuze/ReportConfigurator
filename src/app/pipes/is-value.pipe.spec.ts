import { IsValuePipe } from './is-value.pipe';

describe('IsValuePipe', () => {
  it('create an instance', () => {
    const pipe = new IsValuePipe();
    expect(pipe).toBeTruthy();
  });
});
