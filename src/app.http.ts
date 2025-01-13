import fs from "fs";
import http from "http";

interface User {
  name: string;
  age: number;
  city: string;
}

const servidor = http.createServer((req, res) => {
  //   const data: User = { name: "John Doe", age: 30, city: "New York" };
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify(data));
  //   res.end();

  if (req.url === "/") {
    const htmlFile = fs.readFileSync("./public/index.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(htmlFile);
    return;
  }

  if (req.url?.endsWith(".js")) {
    res.writeHead(200, { "content-type": "application/javasript" });
  } else if (req.url?.endsWith(".css")) {
    res.writeHead(200, { "content-type": "text/css" });
  }
  const responseContent = fs.readFileSync(`./public${req.url}`, "utf-8");
  res.end(responseContent);
  return;
});

servidor.listen(3000, () => console.log("Escuchando en puerto 3000 xD"));
