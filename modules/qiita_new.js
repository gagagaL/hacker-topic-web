export default function QiitaNewModule(moduleOptions) {

  console.log(123);

  console.log(moduleOptions.privateRuntimeConfig);

  this.nuxt.hook('ready', async nuxt => {
    console.log('ree');
  })
}
