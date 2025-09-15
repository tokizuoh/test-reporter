describe('Annotation Test for GitHub PR', () => {
  test('should fail to generate annotation on line 3', () => {
    // This test intentionally fails to generate annotations
    expect(2 + 2).toBe(5); // Expected: 5, Received: 4
  });

  test('should fail with detailed error message', () => {
    const actual = { name: 'test', value: 42 };
    const expected = { name: 'test', value: 100 };
    expect(actual).toEqual(expected); // Object comparison failure
  });

  test('should fail with stack trace', () => {
    function throwError() {
      throw new Error('This is a test error for annotation');
    }
    expect(() => throwError()).not.toThrow(); // Expect error to be thrown
  });
});