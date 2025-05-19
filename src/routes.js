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

export default routes