# AGENTIMO Landing Page

A modern, interactive landing page featuring cinematic morphing animations and holographic effects.

## Features

- Interactive 3D morphing shapes with holographic effects
- Responsive design with modern UI/UX
- Feature cards with special effects
- Interactive tags with morphing animations
- Smooth transitions and particle effects

## Setup

1. Clone the repository:
```bash
git clone https://github.com/diegoagarza98/agentimo.git
cd agentimo
```

2. Local Development:
- You can use any static file server. For example, with Python:
```bash
cd public
python3 -m http.server 3000
```
- Or with Node.js's `http-server`:
```bash
npm install -g http-server
http-server public
```

3. Open your browser and navigate to:
- `http://localhost:3000` (or the port shown in your terminal)

## Deployment

This project is configured for deployment on Vercel:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

The project will be automatically deployed to Vercel using the `public` directory.

## Structure

- `public/` - Static files for deployment
  - `index.html` - Main HTML file
  - `styles.css` - CSS styles and animations
  - `script.js` - JavaScript for interactive features
  - `assets/` - Images and other static assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
