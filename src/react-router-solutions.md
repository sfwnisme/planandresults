# for vercel you can do the following steps

- create vecel.json in the application root an add the following code in it `{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`

# for netlify and also for vercel

- create \_redirects file in the public folder and insert in it the following code `/* /index.html 200`
