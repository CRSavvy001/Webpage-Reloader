const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route - serve the auto-reload page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check for Railway
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        message: 'Pushover Auto-Reload is running'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Pushover Auto-Reload Server running on port ${PORT}`);
    console.log(`🌐 Access at: http://localhost:${PORT}`);
});
