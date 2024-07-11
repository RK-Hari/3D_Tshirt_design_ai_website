import fetch from 'isomorphic-fetch';

export const generateImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const apiKey = process.env.LIMEWIRE_API_KEY;
    const response = await fetch('https://api.limewire.com/api/image/generation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Version': 'v1',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        negative_prompt: 'darkness, fog',
        samples: 1,
        quality: 'LOW',
        guidance_scale: 50,
        aspect_ratio: '1:1',
        style: 'PHOTOREALISTIC'
      }),
      timeout: 15000,
    });

    if (!response.ok) {
      console.error('Error with LimeWire API:', response.statusText);
      return res.status(response.status).json({ error: response.statusText });
    }

    const data = await response.json();
    console.log('LimeWire API response:', data);
    const imageUrl = data.data[0].asset_url;
    console.log("Image url : ",imageUrl);
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: error.message });
  }
};
