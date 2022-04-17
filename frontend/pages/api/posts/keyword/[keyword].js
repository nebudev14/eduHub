export default function handler(req, res) {
    const { keyword } = req.query;
    
    res.status(200).json({ name: 'John Doe' })
  }
  