# for vercel you can do the following steps

- create vecel.json in the application root an add the following code in it

```
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

# for netlify and also for vercel

- create \_redirects file in the public folder and insert in it the following code `/* /index.html 200`

# for hostinger

- create .htaccess and add the following code

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```
