import fs from 'node:fs';
import path from 'node:path';
const module = await import(process.env.SASS_MODULE || 'sass');
const sass = module.default || module;
for (const name of ['main','fontawesome']) {
  let source=fs.readFileSync(`assets/css/${name}.scss`,'utf8').replace(/^---\s*\n---\s*\n/,'');
  source=source.replace(/\{\{ site.site_theme[^}]*'_light'[^}]*\}\}/g,'default_light').replace(/\{\{ site.site_theme[^}]*'_dark'[^}]*\}\}/g,'default_dark');
  const result=sass.compileString(source,{loadPaths:[path.resolve('_sass'),path.resolve('assets/css')],style:'compressed',logger:sass.Logger.silent});
  fs.writeFileSync(`assets/css/${name}.css`,result.css);
}
console.log('Compiled Academic Pages Sass styles.');
