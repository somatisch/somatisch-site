docute.init({
  nav: [{
    title: 'Get Started',
    path: '/',
    markdown: `**click** <button @click="count++">!{count}</button>

## What is this?
<p class="tip">
  Under construction!
  Eventually it will be full of good stuff  
</p>

## How is this being done?

With the all client side implementation of [docute](https://docute.js.org/#/home?id=all-client-side)

## How to use this feature

\`\`\`js
docute.init({
  nav: [{
    title: 'Get Started',
    path: '/get-started',
    markdown: \`**click** <button @click="count++">{{count}}</button>\`,
    component: {
      data: () => ({count: 0})
    }
  }]
})
\`\`\`
 `,
    component: {
      delimiters: ['!{', '}'],
      data: () => ({count: 0})
    }
  }]
})

docute.router.push('/')
