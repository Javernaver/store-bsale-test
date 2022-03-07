import { App } from './app/backend';

async function main() {
    const app = new App(5000);
    await app.listen();
}

main();