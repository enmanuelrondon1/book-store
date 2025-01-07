import * as functions from 'firebase-functions';
import next from 'next';

const app = next({ dev: false, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

export const nextjs = functions.https.onRequest((req, res) => {
    app.prepare().then(() => handle(req, res));
});
