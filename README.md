# Svelte & Capacitor Js Mobile App Tutorial

This tutorial guides you through creating a mobile app using **Svelte** and **Capacitor Js**. Follow the steps below to set up your app for both Android and iOS.

## Table of Contents

Before you start, ensure you have the following installed on your machine:

- **Android Studio** (for Android development)
- **Xcode** (for iOS development)

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Setting up the Static Adapter

```bash
npm install @sveltejs/adapter-static
```

## Update your svelte.config.js

After installing the static adapter, open your svelte.config.js and configure it to create the build directory.

```bash
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build', // The directory to output the HTML files
            assets: 'build', // The directory to output static assets
            fallback: 'index.html' // No fallback for SPA routing
        })
    },
    preprocess: vitePreprocess()
};

export default config;
```

## Installing and Initializing Capacitor

```bash
npm install @capacitor/cli @capacitor/core

#initialize capacitor
npx cap init
```

## Install the native platforms you want to target.

```bash
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android
```

## Configure capacitior.config.ts

After installing the capacitor packages, Open capacitor.config.ts and change the webDir to point to the build folder:

```bash
 import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.helloworld.app',
	appName: 'helloworld',
	webDir: 'build'
};

export default config;
```

## Building your app

Now you can build your app with the command:

```bash
npm run build
```

## Sync with Capacitor

```bash
#for Android
npx cap sync android

#for ios
npx cap sync ios
```

## Open your project in the respective IDE:

```bash
#for Android
npx cap open android

#for ios
npx cap open ios
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
