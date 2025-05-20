import { TemperatureConvPipe } from './temperature-conv.pipe';

describe('TemperatureConvPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConvPipe();
    expect(pipe).toBeTruthy();
  });
});
