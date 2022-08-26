# Tezjs with Form-kit 

- Create fresh Tezjs project 

- Now install module **@formkit/vue** and **@formkit/themes**  with npm 

```
  npm install @formkit/vue
  npm install @formkit/themes

```

- After that to use form-kit in your project make **plugins** directory under root directory and add a **index.ts** file under install

```
  /plugins/index.ts
```

- import plugin and defaultConfig in your index.ts file  

  **index.ts**
```
  import { plugin, defaultConfig } from '@formkit/vue'
```

- make one export default funciton and add imported modules inside it just as below

```
  export default function(vue:any){
    vue.use(plugin, defaultConfig)
}   
```

- Now for adding default css **@formkit/themes/genesis** of form-kit in the tez.config.ts under imports same as below.
```
export default defineTezConfig({
    client:{
        imports:[
        '/@/assets/index.css',
        '@formkit/themes/genesis',      
    ]
    },
    modules:[routeModule],
   
})
```

- And yeah it's done now you can use form-kit with tez project

- for example In pages  directory I make one eample form just like below 

```
 pages/form-kit.vue
```

```
<div class="my-12 flex justify-center">
    <FormKit
    type="form"
    class="w-full"
    :config="{ validationVisibility: 'submit' }"
>
  <FormKit
    type="text"
    label="Name"
    validation="required|length:3"
    help="Enter your full name."
  />
  <FormKit
    type="date"
    label="Birthday"
    validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
    :validation-messages="{ date_between: 'Only for those born in the 90s.' }"
    help="Enter your date of birth"
  />
  <!-- We override validation-visibility for the input below: -->
  <FormKit
    type="tel"
    label="Phone Number"
    placeholder="xxx-xxx-xxxx"
    validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    validation-visibility="live"
    help="What are your digits?"
  />
</FormKit>
</div>
```

- **Note :** For more details of form-kit read it's docs here https://formkit.com/  