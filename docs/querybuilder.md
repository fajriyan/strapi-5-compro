query builder blocks strapi 5 ([here](https://docs.strapi.io/cms/api/rest/interactive-query-builder))

```
{
  populate: {
     blocks:{
       on:{
         "bloks.hero-section" :{
           populate: {
             image:{
               fields:["url", "alternativeText"],
             },
             Logo:{
               populate: {
                 logoImage:{
                   fields:["url", "alternativeText"],
                 },
               }
             },
             cta:true,
           }
         },
         "bloks.info-block" :{
           populate: {
             image:{
               fields:["url", "alternativeText"],
             },
             cta:true,
           }
         }
       }
     }
  }
}
```

output :
```
/api/homepage?populate[blocks][on][bloks.hero-section][populate][image][fields][0]=url&populate[blocks][on][bloks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][bloks.hero-section][populate][Logo][populate][logoImage][fields][0]=url&populate[blocks][on][bloks.hero-section][populate][Logo][populate][logoImage][fields][1]=alternativeText&populate[blocks][on][bloks.hero-section][populate][cta]=true&populate[blocks][on][bloks.info-block][populate][image][fields][0]=url&populate[blocks][on][bloks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][bloks.info-block][populate][cta]=true
```


