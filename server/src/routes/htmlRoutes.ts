import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// log __dirname so ts will log this
console.log(__dirname);

// Define route to serve index.html
router.get('/', (_req, res) => {
    const indexRoute = path.join(__dirname, '..', '..', 'client', 'dist', 'index.html');
    res.sendFile(indexRoute);
});

export default router;
