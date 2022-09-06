---
inject: true
append: true
to: <%= absPath %>/index.ts
---
export { default as <%= name %> } from './<%= name %>'