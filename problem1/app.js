import express from "express";
import axios from "axios";
const app = express();
const port = 3001;
const API_URL = "http://20.244.56.144/evaluation-service/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODc1MTIwLCJpYXQiOjE3NDY4NzQ4MjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFlZjdhYmZhLTJjODgtNDMwOC04NDljLTQ3M2MwOTY4YjYxOSIsInN1YiI6IjIyazQ1LnNoaXNoaXJAc2plYy5hYy5pbiJ9LCJlbWFpbCI6IjIyazQ1LnNoaXNoaXJAc2plYy5hYy5pbiIsIm5hbWUiOiJzaGlzaGlyIHMiLCJyb2xsTm8iOiI0c28yMmNiMDQ1IiwiYWNjZXNzQ29kZSI6IktqSkF4UCIsImNsaWVudElEIjoiMWVmN2FiZmEtMmM4OC00MzA4LTg0OWMtNDczYzA5NjhiNjE5IiwiY2xpZW50U2VjcmV0IjoiUWVtSmNjS0RSbWZKdG1VTiJ9.5wzZSCULVokdLkCp291LWKT3FsUA8Uxz3_dW9hPe6Ew";





app.get('/numbers/:id', async (req, res) => {
const id = parseInt(req.params.id);
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODc0Njk5LCJpYXQiOjE3NDY4NzQzOTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFlZjdhYmZhLTJjODgtNDMwOC04NDljLTQ3M2MwOTY4YjYxOSIsInN1YiI6IjIyazQ1LnNoaXNoaXJAc2plYy5hYy5pbiJ9LCJlbWFpbCI6IjIyazQ1LnNoaXNoaXJAc2plYy5hYy5pbiIsIm5hbWUiOiJzaGlzaGlyIHMiLCJyb2xsTm8iOiI0c28yMmNiMDQ1IiwiYWNjZXNzQ29kZSI6IktqSkF4UCIsImNsaWVudElEIjoiMWVmN2FiZmEtMmM4OC00MzA4LTg0OWMtNDczYzA5NjhiNjE5IiwiY2xpZW50U2VjcmV0IjoiUWVtSmNjS0RSbWZKdG1VTiJ9.KgMUWri2OAkVn5SJPJAXtDYQ222qbsmz1mf7lH8aVNk";

  async function fetchBearerTokenData(token, id) {
    try {
      const response = await axios.get(API_URL+id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching bearer token data:", error.message);
      throw error;
    }
  }

  try {
    const data = await fetchBearerTokenData(token, id);
    res.json(data);
  } catch (err) {
    res.status(500).send("Failed to fetch data");
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});