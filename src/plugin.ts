declare function defineNitroPlugin(fn: () => void): void;

export default defineNitroPlugin(() => {
  console.log('Nah Plugin');
});
