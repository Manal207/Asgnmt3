const calculateBMI2 = require('./bmi');

describe('calculateBMI2', () => {
  it('should calculate BMI and return the correct category for normal weight', () => {
    const heightFeet = 5;
    const heightInches = 10;
    const weight = 160;
    const expectedBmi = 22.96;
    const expectedCategory = 'Normal weight';
    const [bmi, category] = calculateBMI2(heightFeet, heightInches, weight);
    expect(bmi).toBeCloseTo(expectedBmi, 2);
    expect(category).toBe(expectedCategory);
  });


  it('should calculate BMI and return the correct category for underweight', () => {
    const heightFeet = 5;
    const heightInches = 10;
    const weight = 120;
    const expectedBmi = 17.22;
    const expectedCategory = 'Underweight';
    const [bmi, category] = calculateBMI2(heightFeet, heightInches, weight);
    expect(bmi).toBeCloseTo(expectedBmi, 2);
    expect(category).toBe(expectedCategory);
  });

  it('should calculate BMI and return the correct category for overweight', () => {
    const heightFeet = 5;
    const heightInches = 10;
    const weight = 200;
    const expectedBmi = 28.70;
    const expectedCategory = 'Overweight';
    const [bmi, category] = calculateBMI2(heightFeet, heightInches, weight);
    expect(bmi).toBeCloseTo(expectedBmi, 2);
    expect(category).toBe(expectedCategory);
  });

  it('should calculate BMI and return the correct category for obese', () => {
    const heightFeet = 5;
    const heightInches = 10;
    const weight = 250;
    const expectedBmi = 35.87;
    const expectedCategory = 'Obese';
    const [bmi, category] = calculateBMI2(heightFeet, heightInches, weight);
    expect(bmi).toBeCloseTo(expectedBmi, 2);
    expect(category).toBe(expectedCategory);
  });
});
