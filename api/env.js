export default function handler(req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.send(`window.ENV = {
    API_KEY: "${process.env.PUBLIC_API_KEY}",
    API_URL: "${process.env.PUBLIC_API_URL}",
    EXCHANGE_API_URL: "${process.env.PUBLIC_EXCHANGE_API_URL}"
  };`);
}
