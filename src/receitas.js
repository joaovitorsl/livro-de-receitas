import torta from './images/torta-joao.png'
import boloSorvete from './images/bolosorvete.png'
import crepioca from './images/crepioca.png'
import crepe from './images/crepe.png'
import brigadeiro from './images/brigadeiro.png'
import cookie from './images/cookie-renan.png'
import lasanha from './images/lasanha-joao.png'
import tortapizza from './images/tortapizza.jpg'
import bolinhodechuva from './images/bolinho-de-chuva.jpg'
import empadao from './images/empadao.jpg'
import pudim from './images/pudim.jpg'

const receitas = [
    {
        titulo: "Bolinho de chuva",
        ingredientes: [
            {
                qtd: "3 xícaras de",
                nome: "farinha de trigo",
            },
            {
                qtd: "2 colheres (sopa) de",
                nome: "açúcar",
            },
            {
                qtd: "Uma pitada de",
                nome: "sal",
            },
            {
                qtd: "1 colher (sopa) de",
                nome: "fermento químico em pó",
            },
            {
                qtd: "2 colheres (sopa) de",
                nome: "manteiga",
            },
            {
                qtd: "",
                nome: "Raspas da casca de 1 limão",
            },
            {
                qtd: "1 xícara de",
                nome: "leite",
            },
            {
                qtd: "1",
                nome: "ovo",
            }
        ],
        preparo: [
            "Em uma tigela grande, junte a farinha, o açúcar, o sal, o fermento, a manteiga e as raspas de limão. Misture bem;",
            "Junte o ovo e o leite, aos poucos, mexendo sempre com uma colher de pau;",
            "Deixe a massa descansar por 15 minutos;",
            "Depois, pegue colheradas da massa e frite em óleo quente;",
            "Escorra os bolinhos em papel-toalha e, em seguida, polvilhe-os com açúcar e canela.",
        ],
        foto: bolinhodechuva,
        url: "https://vovopalmirinha.com.br/bolinho-de-chuva/"
    },{
        titulo: "Bolo de Sorvete",
        ingredientes: [
            {
                qtd: "200ml de",
                nome: "água",
            },
            {
                qtd: "1/2 xícara (chá) de",
                nome: "achocolatado em pó",
            },
            {
                qtd: "1 pitada de",
                nome: "sal",
            },
            {
                qtd: "1/2 colher (chá) de",
                nome: "café solúvel",
            },
            {
                qtd: "1 lata de",
                nome: "leite condensado",
            },
            {
                qtd: "3",
                nome: "gemas peneiradas",
            },
            {
                qtd: "2 xícaras (chá) de",
                nome: "leite",
            },
            {
                qtd: "3",
                nome: "claras",
            },
            {
                qtd: "125g de",
                nome: "açúcar",
            }
        ],
        preparo: [
            "Na panela, coloque a água, o achocolatado, o sal e misture. Leve ao fogo médio até reduzir, por mais ou menos 10 minutos. Apague o fogo, adicione o café solúvel e misture. Transfira para uma forma de furo no meio de 21 centímetros de diâmetro por 8 centímetros de altura e reserve no freezer até esfriar;",
            "Numa panela, coloque 1 lata de leite condensado, 3 gemas peneiradas, 2 xícaras de chá de leite e misture. Leve ao fogo baixo por 10 minutos mexendo sem parar. Apague o fogo, transfira para uma tigela e reserve até este creme esfriar;",
            "Em outra panela, coloque as claras, o açúcar e leve ao fogo baixo por 2 minutos ou até derreter o açúcar mexendo sem parar. Apague o fogo e transfira imediatamente para a batedeira. Bata em velocidade baixa por volta de 10 minutos ou até ficar em ponto de merengue. Desligue a batedeira e incorpore o merengue ao creme frio. Transfira para a forma com a calda, cubra com plástico filme e leve ao freezer por 6 horas;",
            "Depois de 6 horas, retire da geladeira e deixe em temperatura ambiente por 10 minutos ou coloque a forma para esquentar na boca do fogão. Desenforme, decore com amêndoas laminadas e sirva em seguida;",
            "Se quiser: Decore com amêndoas fatiadas e torradas.",
        ],
        foto: boloSorvete,
        url: "https://gshow.globo.com/receitas-gshow/receitas/bolo-de-sorvete.ghtml"
    },{
        titulo: "Brigadeiro",
        ingredientes: [
            {
                qtd: "1 colher (sopa) de",
                nome: "manteiga sem sal",
            },
            {
                qtd: "1 lata de",
                nome: "leite condensado",
            },
            {
                qtd: "1",
                nome: "gema de ovo peneirada",
            },
            {
                qtd: "1 colher (sopa) de",
                nome: "chocolate em pó peneirado",
            }
        ],
        preparo: [
            "Primeiro coloque uma colher de sopa de manteiga sem sal numa panela em fogo baixo e deixe até que derreta a manteiga;",
            "Quando a manteiga estiver quase toda derretida, mas sem ferver, adicione uma lata de leite condensado e uma gema de ovo peneirada. Misture um pouco e junte 1 colher de sopa de chocolate em pó peneirado;",
            "Em seguida, mexa constantemente, sem parar, com uma colher de pau (ou de silicone) até que o doce solte da panela (quando a passagem da colher deixa atrás dela um rastro que mostra o fundo da panela)."
        ],
        foto: brigadeiro,
        url: "https://gshow.globo.com/receitas-gshow/receitas/brigadeiro-do-william-bonner-55d8b48b4d388573c1000041.ghtml"
    },{
        titulo: "Cookies",
        ingredientes: [
            {
                qtd: "1/2 xícara de",
                nome: "açúcar",
            },
            {
                qtd: "3/4 xícara de",
                nome: "açúcar mascavo",
            },
            {
                qtd: "1 colher (chá) de",
                nome: "sal",
            },
            {
                qtd: "1/2 xícara de",
                nome: "manteiga",
            },
            {
                qtd: "1",
                nome: "ovo",
            },
            {
                qtd: "1 colher (chá) de",
                nome: "essência de baunilha",
            },
            {
                qtd: "4 e 3/4 de xícara de",
                nome: "farinha de trigo",
            },
            {
                qtd: "1/2 colher (chá) de",
                nome: "bicarbonato de sódio",
            },
            {
                qtd: "110g de",
                nome: "chocolate meio amargo",
            },
            {
                qtd: "110g de",
                nome: "chocolate ao leite",
            }
        ],
        preparo: [
            "Coloque os 4 primeiros ingredientes num recipiente e misture até ficar homogêneo;",
            "Acrescente o ovo e a essência e mexa novamente até ficar homogêneo;",
            "Peneire a farinha e o bicarbonato, misture com a massa novamente até ficar homogênea;",
            "Pique os chocolates, misture-os na massa e reserve na geladeira com papel filme (quanto mais tempo, melhor);",
            "Faça bolinhas com a massa e espalhe com uma distância considerável por uma forma forrada com papel manteiga;",
            "Leve ao forno à 180°C por 12-15 minutos."
        ],
        foto: cookie,
        url: "https://www.facebook.com/watch/?v=1976097799333882"
    },{
        titulo: "Crepe suíço",
        ingredientes: [
            {
                qtd: "500ml de",
                nome: "leite",
            },
            {
                qtd: "3",
                nome: "ovos",
            },
            {
                qtd: "3 colheres (sopa) de",
                nome: "açúcar",
            },
            {
                qtd: "2 colheres (sobremesa) de",
                nome: "sal",
            },
            {
                qtd: "2 xícaras de",
                nome: "amido de milho",
            },
            {
                qtd: "3 xícaras de",
                nome: "farinha de trigo",
            },
            {
                qtd: "2 colheres (sobremesa) de",
                nome: "fermento em pó",
            }
        ],
        preparo: [
            "Coloque os primeiros ingredientes (líquidos, sal e açúcar);",
            "Acrescente os demais ingredientes com exceção do fermento em pó;",
            "Após a massa ficar homogênea e no ponto, coloque o fermento em pó e bata por mais alguns segundos;",
            "Agora é só colocar a massa na máquina de crepe com o recheio espetado e esperar por 10 minutos;",
            "OBS: NÃO abra a máquina antes do tempo para não murchar."
        ],
        foto: crepe,
    },{
        titulo: "Crepioca",
        ingredientes: [
            {
                qtd: "2 colheres (sopa) de",
                nome: "goma de tapioca",
            },
            {
                qtd: "2 colheres (sopa) de",
                nome: "queijo parmesão ralado",
            },
            {
                qtd: "1 pitada de",
                nome: "sal",
            },
            {
                qtd: "1",
                nome: "ovo",
            },
            {
                qtd: "A gosto:",
                nome: "orégano ",
            },
            {
                qtd: "A gosto:",
                nome: "sal",
            },
            {
                qtd: "A gosto:",
                nome: "pimenta do reino",
            }
        ],
        preparo: [
            "Misture todos os ingredientes numa vasilha;",
            "Coloque a massa numa frigideira até que dê para virar;",
            "Preencha com o recheio que quiser e enrole."
        ],
        foto: crepioca,
        url: "https://www.youtube.com/watch?v=mQ8tcndECh4"
    },/*{
        titulo: "[EM BREVE] Delícia de Abacaxi: [
            {
                qtd: "",
                nome: "",
            }
        ],
        preparo: [
        
        ],
        foto: semFoto,
    },*/{
        titulo: "Empadão de Frango",
        ingredientes: [
            {
                qtd: "3 e 1/2 de xícara de",
                nome: "farinha de trigo",
            },{
                qtd: "250g de",
                nome: "margarina",
            },{
                qtd: "1/2 xícara de",
                nome: "água",
            },{
                qtd: "2",
                nome: "ovos",
            },{
                qtd: "A gosto:",
                nome: "sal",
            },{
                qtd: "1kg de",
                nome: "peito de frango cozido e desfiado",
            },{
                qtd: "300ml de",
                nome: "água do cozimento do frango",
            },{
                qtd: "1/2 lata de",
                nome: "milho",
            },{
                qtd: "1/2 lata de",
                nome: "ervilha",
            },{
                qtd: "1",
                nome: "tomate picado",
            },{
                qtd: "3/4 de xícara de",
                nome: "molho de tomate",
            },{
                qtd: "1 copo de",
                nome: "requeijão",
            },{
                qtd: "1",
                nome: "cebola picada",
            },{
                qtd: "A gosto:",
                nome: "azeitona",
            },{
                qtd: "2 dentes de",
                nome: "alho",
            },{
                qtd: "A gosto:",
                nome: "salsinha e cebolinha",
            }
        ],
        preparo: [
            "."
        ],
        foto: empadao,
        url: "https://youtu.be/F2npcDqkY5g"
    },/*{
        titulo: "Massa de Pizza",
        ingredientes: [
            {
                qtd: "3 e 1/2 de xícara de",
                nome: "farinha de trigo",
            },{
                qtd: "250g de",
                nome: "margarina",
            },{
                qtd: "1/2 xícara de",
                nome: "água",
            },{
                qtd: "2",
                nome: "ovos",
            },{
                qtd: "A gosto:",
                nome: "sal",
            },{
                qtd: "1kg de",
                nome: "peito de frango cozido e desfiado",
            },{
                qtd: "300ml de",
                nome: "água do cozimento do frango",
            },{
                qtd: "1/2 lata de",
                nome: "milho",
            },{
                qtd: "1/2 lata de",
                nome: "ervilha",
            },{
                qtd: "1",
                nome: "tomate picado",
            },{
                qtd: "3/4 de xícara de",
                nome: "molho de tomate",
            },{
                qtd: "1 copo de",
                nome: "requeijão",
            },{
                qtd: "1",
                nome: "cebola picada",
            },{
                qtd: "A gosto:",
                nome: "azeitona",
            },{
                qtd: "2 dentes de",
                nome: "alho",
            },{
                qtd: "A gosto:",
                nome: "salsinha e cebolinha",
            }
        ],
        preparo: [
            "."
        ],
        foto: empadao,
        url: "https://youtu.be/F2npcDqkY5g"
    },{
        titulo: "[EM BREVE] Hamburguer artesanal do Renan",
        ingredientes: [
            {
                qtd: "",
                nome: "",
            }
        ],
        preparo: [
        
        ],
        foto: semFoto,
    },*/{
        titulo: "Lasanha de frango com queijo",
        ingredientes: [
            {
                qtd: "1",
                nome: "peito de frango",
            },
            {
                qtd: "500g de",
                nome: "queijo mussarela fatiado",
            },
            {
                qtd: "400g de",
                nome: "presuto fatiado",
            },
            {
                qtd: "1 pacote médio de",
                nome: "massa para lasanha (sem cozimento prévio)",
            },
            {
                qtd: "1 pote de",
                nome: "requeijão cremoso",
            },
            {
                qtd: "2",
                nome: "caldos de galinha (ou tempero completo sabor galinha)",
            },
            {
                qtd: "2 copos de",
                nome: "leite",
            },
            {
                qtd: "1 caixa de",
                nome: "creme de leite",
            },
            {
                qtd: "2 colheres (sopa) de",
                nome: "farinha de trigo",
            },
            {
                qtd: "3 colheres (sopa) de",
                nome: "manteiga",
            },
            {
                qtd: "1",
                nome: "cebola média",
            }
        ],
        preparo: [
            "Molho: Faça um creme homogêneo com as 2 colheres de farinha e 2 colheres de manteiga (reservando 1 colher de manteiga), acrescente o leite, 1 caldo de galinha e mexa constantemente. Retire do fogo e acrescente o creme de leite. Reserve;",
            "Frango: Cozinhe o peito de frango em água sem óleo. Após cozido, desfie o frango, pique a cebola em pedaços pequenos, coloque em uma panela e doure com a manteiga. Acrescente o frango e o caldo de galinha, depois mexa sempre até o frango ficar totalmente dourado;",
            "Montagem: Em um refratário, coloque 2 conchas de molho. Faça a base com massa de lasanha, cubra com 1 camada de presunto, 1 de queijo e 1 frango (nessa ordem). Sobre o frango coloque 1 camada de requeijão coloque 2 conchas de molho;",
            "Cubra o requeijão com 1 camada de presunto, 1 camada de queijo e 1 camada de massa. Coloque molho, e repita esse processo até faltar cerca de 2,5 cm para chegar na borda da assadeira. Para finalizar, cubra a lasanha com muito queijo e requeijão e molho;",
            "Asse por aproximadamente 20 minutos em fogo baixo."
        ],
        foto: lasanha,
    },{
        titulo: "Torta de Limão",
        ingredientes: [
            {
                qtd: "300g de",
                nome: "biscoito de maisena",
            },
            {
                qtd: "100g de",
                nome: "manteiga",
            },
            {
                qtd: "2",
                nome: "leite condensado",
            },
            {
                qtd: "4",
                nome: "limões grandes",
            },
            {
                qtd: "100ml de",
                nome: "creme de leite (opcional)",
            }
        ],
        preparo: [
            "Triture o biscoito no liquidificador ou processador;",
            "Derreta a manteira e jogue por cima do biscoito e misture;",
            "Pegue uma forma de fundo removível e acomode bem a massa no centro e nas laterais;",
            "Asse em forno pré-aquecido à 180°C por 8 minutos e espere esfriar;",
            "Bata no liquidificador por 4 minutos o leite condensado e o suco do limão;",
            "Coloque o mousse por cima da base da torta já fria;",
            "Se quiser pode bater o creme de leite fresco em ponto de chantilly e decorar. Se não, só decore com raspas de limão;",
            "Deixe gelar por 1 hora."
        ],
        foto: torta,
        url: "https://www.instagram.com/p/B4iGEumglxo/"
    },{
        titulo: "Pudim de Leite",
        ingredientes: [
            {
                qtd: "1 xícara (chá) de",
                nome: "açúcar",
            },
            {
                qtd: "1 lata de",
                nome: "leite condesado",
            },
            {
                qtd: "2 medidas (da lata) de",
                nome: "leite",
            },
            {
                qtd: "3",
                nome: "ovos",
            }
        ],
        preparo: [
            "Em uma panela de fundo largo, derreta o açúcar até ficar dourado;",
            "Junte meia xícara (chá) de água quente e mexa com uma colher;",
            "Deixe ferver até dissolver os torrões de açúcar e a calda engrossar;",
            "Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve.",
            "Em um liquidificador, bata todos os ingredientes do pudim e despeje na forma reservada;",
            "Cubra com papel-alumínio e leve ao forno médio (180°C), em banho-maria, por cerca de 1 hora e 30 minutos;",
            "Depois de frio, leve para gelar por cerca de 6 horas. Desenforme e sirva a seguir."
        ],
        foto: pudim,
        url: "https://www.receitasnestle.com.br/receitas/pudim-de-leite-moca"
    },{
        titulo: "Torta-pizza",
        ingredientes: [
            {
                qtd: "4",
                nome: "ovos",
            },
            {
                qtd: "1/2 xícara (chá) de",
                nome: "óleo",
            },
            {
                qtd: "3 xícaras (chá) de",
                nome: "farinha de trigo",
            },
            {
                qtd: "1 e 1/2 de xícara (chá) de",
                nome: "leite",
            },
            {
                qtd: "A gosto:",
                nome: "sal",
            },
            {
                qtd: "1 colher (sopa) de",
                nome: "fermento em pó",
            },
            {
                qtd: "1 xícara (chá) de",
                nome: "presunto picado (opcional)",
            },
            {
                qtd: "1 gomo de",
                nome: "linguiça calabresa cortada em rodelas (opcional)",
            },
            {
                qtd: "A gosto:",
                nome: "rodelas de tomates (opcional)",
            },
            {
                qtd: "3 xícaras (chá) de",
                nome: "muçarela ralada (opcional)",
            },
            {
                qtd: "A gosto:",
                nome: "azeitonas verdes (opcional)",
            },
            {
                qtd: "A gosto:",
                nome: "orégano (opcional)",
            }
        ],
        preparo: [
            "Bata por 2 minutos os ovos, o óleo, o leite e metade da farinha de trigo no liquidificador;",
            "Transfira uma tigela e adicione o restante da farinha de trigo e o sal. Misture;",
            "Acrescente o fermento em pó e misture novamente;",
            "Em uma forma untada (com manteiga e farinha) despeje metade da massa;",
            "Recheie como quiser, sugestões: adicione o presunto, metade da calabresa, metade da tomate e metade da muçarela, nesta ordem;",
            "Despeje o restante da massa;",
            "Recheie novamente como quiser, sugestões: adicione o restante da muçarela, calabresa, tomate, azeitona e órégano;",
            "Coloque em forno pré-aquecido à 180°C por 40 minutos."
        ],
        foto: tortapizza,
        url: "https://youtu.be/ACLmjTWRz2w"
    }
]

export default receitas;