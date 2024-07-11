// const express = require('express');
// const fetch = require('node-fetch');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// app.use(express.json());
// app.use(cors()); 

// app.post('/api/image/generation', async (req, res) => {
//   const { prompt } = req.body;
//   const apiKey = "lmwr_sk_3RysyGFUBU_1tAfRp4Hkxm7Yxuozz7EGPryPNffkPgYqKXxq";

//   try {
//     const response = await fetch('https://api.limewire.com/api/image/generation', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Api-Version': 'v1',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         prompt: prompt,
//         negative_prompt: 'darkness, fog',
//         samples: 1,
//         quality: 'LOW',
//         guidance_scale: 50,
//         aspect_ratio: '1:1',
//         style: 'PHOTOREALISTIC'
//       }),
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error generating image:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import limewireRoutes from './routes/limewire.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/limewire', limewireRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from LimeWire API!' });
});

app.listen(3001, () => console.log('Server started on port 3001'));

