import express from 'express';

const router = express.Router();

// Keep-alive endpoint - prevents Render from spinning down
router.get('/ping', (req, res) => {
    console.log('🏓 Ping received - keeping service alive');
    res.json({
        status: 'alive',
        timestamp: new Date().toISOString(),
        message: 'Service is awake'
    });
});

export default router;
