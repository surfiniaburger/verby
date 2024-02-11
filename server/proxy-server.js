import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';



const app = express();

// Set up a proxy to forward requests to the Cloudflare API server
app.use('/api', createProxyMiddleware({
  target: 'https://api.cloudflare.com',
  changeOrigin: true,
  onProxyRes: function (proxyRes, req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
