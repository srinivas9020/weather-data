import { LocaltimeFromUnixPipe } from './localtime-from-unix.pipe';

describe('LocaltimeFromUnixPipe', () => {
  const pipe = new LocaltimeFromUnixPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform to date', () => {
    expect(pipe.transform(1627445901, 3600)).toEqual(new Date(2021,6,28,10,48,21));
  })
});
