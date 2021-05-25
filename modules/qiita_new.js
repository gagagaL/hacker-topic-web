export default function QiitaNewModule(moduleOptions) {

  console.log(moduleOptions);
  console.log(moduleOptions.privateRuntimeConfig);

  this.nuxt.hook('ready', async nuxt => {
    console.log('ree');
  })
}
