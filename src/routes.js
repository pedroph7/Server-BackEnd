import { Router } from "express";

const routes = Router()

//rota de teste

routes.get("/",(req, res) =>{
    return res.send('rota de teste')
})

//rota que retorna
routes.get("/funcionarios",(req,res) => {
    return res.json({
        items: [
            {
                id:"1",
                nome:"pedro",
                cargo:"chefe",
                idade: 16,
                rola: "30cm",
                custoPorHora: 10000.0,
                temLicense: false
            },
            {
                id:"2",
                nome:"gustavo",
                cargo:"submisso",
                idade: 18,
                rola: "3cm",
                custoPorHora: 10.0,
                temLicense: true
            },
            {
                id:"3",
                nome:"matheus",
                cargo:"traficante",
                idade:17,
                rola: "5cm",
                custoPorHora: 1000.0,
                temLicense: true
            },
        ]
    })
})
routes.get("/sla", (req, res) => {
    return res.json({
        photo: [
            {
                id:"1",
                nome:"delicia",
                imagem:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cristiano-ronaldo-cr7%3A-limited-special-editio-design-template-1ade76990ca076687849a104fb3d70b1_screen.jpg?ts=1733770873",
            },  
            {
                id:"2",
                nome:"bacana",
                imagem:"https://ansabrasil.com.br/webimages/news_base/2023/11/19/3f97fc5f25da173e3fbe3bb0fe256bd5.jpg",
            },  
            {
                id:"3",
                nome:"gostosao",
                imagem:"https://s.glbimg.com/es/ge/f/original/blog/03bd4a23-f06d-40ac-9bbf-97365393ef2f_CRISTIANO.jpg",
            },  
        ]
    })
})
export default routes