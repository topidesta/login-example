describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "Ingresar datos:"', async () => {
    await expect(element(by.text('Ingresar datos:'))).toBeVisible();
  });

  it('should complete "Nombre" and "Apellido"', async () => {
    await element(by.id('name')).typeText('Claudio');
    await element(by.id('lastName')).typeText('Garcete');
  });
});
