import { LocaltimeFromUnixPipe } from './localtime-from-unix.pipe';

describe('LocaltimeFromUnixPipe', () => {
  it('create an instance', () => {
    const pipe = new LocaltimeFromUnixPipe();
    expect(pipe).toBeTruthy();
  });
});
