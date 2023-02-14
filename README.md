# ViteJS NPM react component library template


## Custom components

1. Create your custom react components in the `src/componets` directory
2. Export them in `src/componets/index.ts`
3. Finally export them in `/index.ts`


## Run dev server & test UI components

Test your custom components in `App.tsx`.

- Install dependencies
```bash
yarn
```

- Run development server
```bash
yarn dev
```

- Login to NPM
```bash
npm adduser
```

- Publish to NPM
```bash
npm publish
```

___
All these changes are added to the default vite project
## `package.json` changes

```json
  "main": "dist/index.umd.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js"
    }
  },
  "files": [
    "./dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "prepare": "npm run build"
  },
```

## `tsconfig.json` changes

```json
  "compilerOptions": {
    "declaration": true,
    "typeRoots": ["./dist/index.d.ts"],
  },
```

## `vite.config.ts` changes

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      // Your component name
      name: "Example Component",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});
```

## Dependencies

```json
  "devDependencies": {
    "@types/node": "^18.13.0",
    "vite-plugin-dts": "^1.7.3"
  }
```

- `@types/node` needed to provide type definitions for `path`
- `vite-plugin-dts` needed to generate type definitions for the component. It is used as a plugin in the `vite.config.ts`

___
Made while drinking ☕ by [Shakthi Senavirathna](https://github.com/shakthizen)
___