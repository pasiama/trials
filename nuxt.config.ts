// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules:['@sidebase/nuxt-auth'],
  // auth:{
  //   enableGlobalAppMiddleware: true,
  // },
  // devtools: { enabled: true },

    css:['~/assets/style.css'],
    ssr:false,
    app: {
      head: {
        link:[
          {
            rel:'stylesheet',
            href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
          },
          {
            rel:"stylesheet",
            href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", integrity:"sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY8i0I5z1ElZj+ybIgM5xQ8STvXINDyF+QibIx", crossorigin:"anonymous"

          }
        ],
        script:[{
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          type:'text/javascript',
        }]
      }
    }
  
  
  
})
