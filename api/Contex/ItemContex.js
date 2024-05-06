import db from '../connect.js';

export const postItem = (req, res) => {
  const { img1, img2, img3, img4, img5, itemname, price, category, size, sale } = req.body;

  const insertQuery = 'INSERT INTO item (img1, img2, img3, img4, img5, itemname, price, category, size, sale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [img1, img2, img3, img4, img5, itemname, price, category, size, sale];

  db.query(insertQuery, values, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ message: 'Item created successfully', item: req.body });
    }
  });
};

export const getItemById = (req, res) => { // Renamed from getItembyid to getItemById for consistency
  const { itemid } = req.params;

  const selectQuery = 'SELECT * FROM item WHERE itemid = ?';

  db.query(selectQuery, [itemid], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ item: result });
    }
  });
};

export const getItems = (req, res) => {
  const selectQuery = 'SELECT * FROM item';

  db.query(selectQuery, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ items: results });
    }
  });
};

export const deleteItem = (req, res) => {
  const { itemid } = req.params;

  const deleteQuery = 'DELETE FROM item WHERE itemid = ?';

  db.query(deleteQuery, [itemid], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ message: 'Item deleted successfully' });
    }
  });
};

export const updateItem = (req, res) => {
  const { itemid } = req.params;

  const { img1, img2, img3, img4, img5, itemname, price, category, size, sale } = req.body;

  const updateQuery = 'UPDATE item SET img1=?, img2=?, img3=?, img4=?, img5=?, itemname=?, price=?, category=?, size=?, sale=? WHERE itemid=?';
  const values = [img1, img2, img3, img4, img5, itemname, price, category, size, sale, itemid];

  db.query(updateQuery, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ message: 'Item updated successfully' });
    }
  });
};
