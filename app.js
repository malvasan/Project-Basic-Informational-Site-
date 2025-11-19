// import http from 'http';
// import fs from 'fs';
import express from 'express';
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/contact-me',(req,res)=>{
    res.sendFile('./views/contact-me.html', {root: __dirname});
});

app.get('/about-me',(req,res)=>{
    res.redirect('/about');
});

app.use((req, res)=>{
    res.sendFile('./views/404.html', {root: __dirname});
})

app.listen(3000, (error)=>{
    if (error) {
        throw error;
    }
    console.log('My first Express app');
})

// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';

//     switch (req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/contact-me':
//             path += 'contact-me.html';
//             res.statusCode = 200;
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.end(data);
//         }
//     })
// })

// server.listen(3000, 'localhost',()=>{
//     console.log('listening for requests on port 3000');
// })