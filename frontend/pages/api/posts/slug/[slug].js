export default function handler(req, res) {
    const { slug } = req.query;
    
    res.status(200).json({ name: 'John Doe' })
  }
  