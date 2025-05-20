import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperatureConvPipe implements PipeTransform {

  /**
   * Convert a temperature value from Celsius to another unit.
   * @param value The temperature value in Celsius.
   * @param toUnit The unit to convert to. Can be 'C', 'F', or 'K'.
   * @returns The converted temperature value.
   */
  #fromCelsius(value: number, toUnit: string): number {
    switch (toUnit) {
    case 'C': case 'c':
      return value;
    case 'F': case 'f':
      return (value * 9 / 5) + 32;
    case 'K': case 'k':
      return value + 273.15;
    default:
      throw new Error('Invalid unit');
    }
  }
  
  /**
   * Convert a temperature value from Fahrenheit to another unit.
   * @param value The temperature value in Fahrenheit.
   * @param toUnit The unit to convert to. Can be 'C', 'F', or 'K'.
   * @returns The converted temperature value.
   */
  #fromFahrenheit(value: number, toUnit: string): number {
    switch (toUnit) {
    case 'C': case 'c':
      return (value - 32) * 5 / 9;
    case 'F': case 'f':
      return value;
    case 'K': case 'k':
      return (value - 32) * 5 / 9 + 273.15;
    default:
      throw new Error('Invalid unit');
    }
  }

  /**
   * Convert a temperature value from Kelvin to another unit.
   * @param value The temperature value in Kelvin.
   * @param toUnit The unit to convert to. Can be 'C', 'F', or 'K'.
   * @returns The converted temperature value.
   */
  #fromKelvin(value: number, toUnit: string): number {
    switch (toUnit) {
    case 'C': case 'c':
      return value - 273.15;
    case 'F': case 'f':
      return (value - 273.15) * 9 / 5 + 32;
    case 'K': case 'k':
      return value;
    default:
      throw new Error('Invalid unit');
    }
  }


  transform(value: number, unit: string): number {
    const split = unit.split('-');
    const fromUnit = split[0];
    const toUnit = split[1];

    
    switch (fromUnit) {
    case 'C': case 'c':
      return this.#fromCelsius(value, toUnit);
      break;
    case 'F': case 'f':
      return this.#fromFahrenheit(value, toUnit);
      break;
    case 'K': case 'k':
      return this.#fromKelvin(value, toUnit);
      break;
    default:
      throw new Error('Invalid unit');
    }  
  }
}
