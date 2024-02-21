import { Injectable } from '@angular/core';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  houses: House[] = [
    
  
    {
      contact: "Pedro Jimenez",
      description: "Espaciosa casa de estilo contemporáneo con impresionantes vistas a las montañas que rodean la ciudad.",
      phone: '3007865786',
      direction: [-75.59874302355642, 6.212294937878664],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4m0FiT5MYUxjzlxxPS7YgxewwF4rExp1wQ&usqp=CAU",
      precio: "500,000,000"
    },
    {
      contact: "Juan Valdés",
      description: "Acogedora casa adosada en un tranquilo barrio residencial, perfecta para una familia pequeña.",
      phone: '3008792309',
      direction: [-75.59382193823679, 6.218216156626633],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9nwMifYzkgHt5ZIAcM_KEgMp6mD3dWidk0qh9Xjk0mUxn-8Uuf_CmVckus6O9VAkrg&usqp=CAU",
      precio: "600,000,000"
    },
    {
      contact: "Wilson Carvajal",
      description: "Moderna casa de varios niveles con terrazas panorámicas que ofrecen vistas espectaculares del valle.",
      phone: '3008792307',
      direction: [-75.6089462582197, 6.232044630968907],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-vvryFSVSshLVCuJgFuKAIJb_G39MXsWP4yuawrRFXvY0us5EDDKTjYdc6quqA8kvI&usqp=CAU",
      precio: "750,000,000"
    },
    {
      contact: "Liliana Giraldo",
      description: "Encantadora casa de estilo rústico con techos altos y abundante luz natural, ubicada en una zona arbolada.",
      phone: '3008799307',
      direction: [-75.60641425294384, 6.23163934436887],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPT71d_qhSzf9FWWJj0R16X9k_y4ed6CGNgQ37HMJQn52CorVvT5a8jmeCo2Z2pB59Dk&usqp=CAU",
      precio: "400,000,000"
    },
    {
      contact: "Luis Galvis",
      description: "Casa contemporánea con diseño minimalista y un impresionante jardín vertical en el patio trasero.",
      phone: '3008799307',
      direction: [-75.59915248893098, 6.231620070678426],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DeHSOsB_D0ntuiyzbg_mK1zttqFiKHMzSw&usqp=CAU",
      precio: "550,000,000"
    },
    {
      contact: "Matilde Garcia",
      description: "Casa de lujo en un exclusivo vecindario de Medellín, con comodidades de alta gama y seguridad las 24 horas.",
      phone: '3008799807',
      direction: [-75.61050442158133, 6.237923638375033],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkp-L0p9iQY21R-vqbYk8DTo9SptAeNSjvQ&usqp=CAU",
      precio: "800,000,000"
    },
    {
      contact: "Catalina Rojas",
      description: "Encantadora casa campestre con chimenea y vistas panorámicas a las montañas, perfecta para escapadas familiares.",
      phone: '3008100011',
      direction: [-75.590123, 6.230987],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrBiAYlFxta9oddExDonEglMcsx8C_-3cFw&usqp=CAU",
      precio: "350,000,000"
    },
    {
      contact: "Javier Mendoza",
      description: "Casa remodelada con un toque moderno en el corazón del Poblado, a pocos pasos de tiendas y restaurantes.",
      phone: '3008100012',
      direction: [-75.592345, 6.235678],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRha-JGXTKCdgiR_Sg0lU74RV8nX2u2CxaQ&usqp=CAU",
      precio: "650,000,000"
    },
    {
      contact: "Maria Gonzalez",
      description: "Casa de estilo mediterráneo con una piscina infinita que se funde con el horizonte de la ciudad.",
      phone: '3008100013',
      direction: [-75.605432, 6.239876],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiBr5U0Vcs5cMySFn0Uy2Yn_pIIh4HDQFJw&usqp=CAU",
      precio: "450,000,000"
    },
    {
      contact: "Carlos Soto",
      description: "Acogedora casa de campo con una amplia cocina al aire libre y un patio ideal para reuniones familiares.",
      phone: '3008100014',
      direction: [-75.603219, 6.225678],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopyVwYCvB3MWiI2DEAajCRZhxCWQhUIRsAA&usqp=CAU",
      precio: "700,000,000"
    },
    {
      contact: "Diana Rios",
      description: "Casa contemporánea de diseño único con espacios abiertos y abundante luz natural en todas partes.",
      phone: '3008100015',
      direction: [-75.612345, 6.220987],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVO9jiC4Lh7ancZuktGXfB5J13V2nSSFAzeQ&usqp=CAU",
      precio: "400,000,000"
    },
    {
      contact: "Andres Perez",
      description: "Encantadora casa colonial restaurada con un patio central y balcones con vistas a las calles adoquinadas.",
      phone: '3008100016',
      direction: [-75.598765, 6.215432],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNld-axzrNug_5E1x2aC74rV9sf3tZaGU21Q&usqp=CAU",
      precio: "550,000,000"
    },
    {
      contact: "Laura Montoya",
      description: "Casa moderna con tecnología inteligente y un diseño ecológico que minimiza el impacto ambiental.",
      phone: '3008100017',
      direction: [-75.596543, 6.229876],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmQ6yj0-rOsMho1jg91lY4px_qchnfvzBEQ&usqp=CAU",
      precio: "800,000,000"
    },
    {
      contact: "Camilo Restrepo",
      description: "Casa de estilo tradicional con una espaciosa sala de estar y un exuberante jardín tropical.",
      phone: '3008100018',
      direction: [-75.590876, 6.235432],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuc9gpj3_C8JFRlx1i6XGAzLKEJWnVhj-bw&usqp=CAU",
      precio: "350,000,000"
    },
    {
      contact: "Isabel Gomez",
      description: "Encantadora casa campestre con una terraza cubierta perfecta para disfrutar del clima templado de Medellín.",
      phone: '3008100019',
      direction: [-75.607654, 6.242345],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHpEpK4uNFVDZP3Ct5qdLSPUVEKGwkywP8Q&usqp=CAU",
      precio: "600,000,000"
    },
    {
      contact: "Sergio Medina",
      description: "Casa renovada con un diseño interior moderno y elegante, ubicada en una zona residencial tranquila.",
      phone: '3008100020',
      direction: [-75.612987, 6.228765],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyTW5tsP2ze-TGsWJHEK7lWN-6c22n79ZZgcTRxawOkJbvcQXc0BmIazb2eZEfdS21sI&usqp=CAU",
      precio: "750,000,000"
    },
    {
      contact: "Ana Ramirez",
      description: "Casa de estilo colonial español con un patio central lleno de plantas tropicales y una fuente relajante.",
      phone: '3008100021',
      direction: [-75.596789, 6.221345],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVA7xRyJWDpOAResBtiUF2BAzeRMdIJueTnaw-mW4YUmLd5Ey0hJu4Ftlitiaqz2If_w&usqp=CAU",
      precio: "400,000,000"
    },
    {
      contact: "Alejandro Herrera",
      description: "Casa moderna con una decoración minimalista y grandes ventanales que ofrecen vistas panorámicas de la ciudad.",
      phone: '3008100022',
      direction: [-75.601234, 6.236789],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPf_2dNlcxN-aEE6u-hGCT-G1PkynNZs3JOg&usqp=CAU",
      precio: "650,000,000"
    },
    {
      contact: "Valentina Cardona",
      description: "Casa colonial restaurada con detalles arquitectónicos originales y comodidades modernas.",
      phone: '3008100023',
      direction: [-75.605678, 6.217890],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1i3mFhIGS0pTTvC45WQ6FsYhJikh3pBvtwQ&usqp=CAU",
      precio: "450,000,000"
    },
    {
      contact: "Hector Suarez",
      description: "Encantadora casa campestre con un huerto orgánico y vistas impresionantes de los alrededores.",
      phone: '3008100024',
      direction: [-75.611234, 6.223456],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSa_dJK-9SE9chaHd9zJFalYZYfYSUyeNevQ&usqp=CAU",
      precio: "700,000,000"
    },
    {
      contact: "Adriana Lopez",
      description: "Casa contemporánea con un diseño modular y una terraza en la azotea perfecta para disfrutar de las puestas de sol.",
      phone: '3008100025',
      direction: [-75.599876, 6.219012],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdpd8jNTXwJlig_DBQ-rXQIxz2xFTfX8b_g&usqp=CAU",
      precio: "800,000,000"
    },
    {
      contact: "Ricardo Gutiérrez",
      description: "Encantadora casa campestre con un jardín exuberante y una terraza cubierta para disfrutar de comidas al aire libre.",
      phone: '3008100026',
      direction: [-75.593456, 6.233456],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNOtcDAHgqwygtJ-4AYJPgJS-VYPDhJ3lKA&usqp=CAU",
      precio: "550,000,000"
    },
    {
      contact: "Isabella Fernandez",
      description: "Casa de montaña con una arquitectura única y acceso directo a rutas de senderismo.",
      phone: '3008100027',
      direction: [-75.602345, 6.227890],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsLT3NjuFzwGoHJcUiZrj7KMWlNtzUaSK-g&usqp=CAU",
      precio: "600,000,000"
    },
    {
      contact: "Miguel Torres",
      description: "Encantadora casa campestre con un porche cubierto perfecto para disfrutar del clima templado.",
      phone: '3008100028',
      direction: [-75.596789, 6.240123],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eQUD4zaJtXON4qHCI2gUm3czeeRaUU9Vmg&usqp=CAU",
      precio: "450,000,000"
    },
    {
      contact: "Elena Morales",
      description: "Casa moderna con un diseño interior elegante y vistas panorámicas desde cada habitación.",
      phone: '3008100029',
      direction: [-75.600123, 6.231234],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEL_mJnUbwSnvLBO5ENOZANGYgskYJ-plamA&usqp=CAU",
      precio: "700,000,000"
    },
    {
      contact: "Diego Castro",
      description: "",
      phone: '3008100030',
      direction: [-75.610987, 6.226789],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzFqF8F6L_jOqRvIMhZJ3-y9sWv2sLwJ_PQ&usqp=CAU",
      precio: "350,000,000"
    },
  
  
  { 
    contact: "Ana María Ramírez",
    description: "Encantadora casa campestre con una terraza cubierta perfecta para disfrutar del aire libre.",
    phone: "3023456789", 
    direction: [-75.60451243911787, 6.235885119027738], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz6R_5b5nwVWiL68Hk3nkuRe1Roo8JZv2ZQ&usqp=CAU", 
    precio: "700,000,000" 
  },

  { 
    contact: "Carlos Alberto Herrera",
    description: "Esta casa familiar, situada en un barrio tranquilo, ofrece comodidades modernas y acceso conveniente a servicios locales, perfecta para una vida cómoda y relajada", 
    phone: "3056789012", 
    direction: [-75.6047682372133, 6.2362958862726945], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3yr1qy0IH4bnGqA-sKEzgwfxFjc3kMeHo_0eUUjK1BmuPKLTSwwQo2TW2yog9T1YYHA&usqp=CAU", 
    precio: "750,000,000" 
  },
  
  { 
    contact: "Laura González",
    description: "Una casa adosada acogedora en una comunidad segura, perfecta para parejas o familias pequeñas que buscan comodidad y seguridad en su hogar.", 
    phone: "3089012345", 
    direction: [-75.61128502321861, 6.243088123863842], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUflF8S7zrCey6UBJFEwQgZ_tzLklFGrK_g&usqp=CAU", 
    precio: "800,000,000" 
  },
  
  { 
    contact: "Javier López",
    description: "Moderna y con detalles arquitectónicos únicos, esta casa es ideal para aquellos que valoran el diseño contemporáneo y la vida al aire libre.", 
    phone: "3112345678", 
    direction: [-75.61578899852996, 6.245745744616819], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqU989tcmHx9oEmLQ-MKsJKEmLmU1lMt1sg&usqp=CAU", 
    precio: "850,000,000" 
  },
  
  { 
    contact: "María Fernanda Torres",
    description: "Con múltiples habitaciones y áreas de estar, esta espaciosa vivienda es perfecta para familias numerosas que buscan comodidad y espacio en la ciudad.", 
    phone: "3145678901", 
    direction: [-75.61729041974627, 6.2357933738351194], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmmk2qxVYwCtiW_mZ5fvNIF_WFouMkNe6FA&usqp=CAU", 
    precio: "900,000,000" 
  },
  
  { 
    contact: "Gabriel Sánchez", 
    description: "Disfruta de una vida tranquila y serena en esta casa campestre, que ofrece un refugio natural lejos del bullicio de la ciudad.",
    phone: "3178901234", 
    direction: [-75.62569623476384, 6.233925822471904], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrAXRUtL0rmwdTiM2_CqO89CoMK08efpuSw&usqp=CAU", 
    precio: "700,000,000" 
  },
  
  { 
    contact: "Valentina Ríos", 
    description: "Esta residencia contemporánea combina elegancia y funcionalidad, con un diseño minimalista y acabados de alta calidad en todo el espacio.",
    phone: "3201234567", 
    direction: [-75.63419839120657, 6.233901879455988], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7xI29crjnPSMUjjsTh0r-Jbqv0I4JNtmPQ&usqp=CAU", 
    precio: "750,000,000" 
  },
  
  { 
    contact: "Alejandro Martínez", 
    description: "Con encanto local y elementos arquitectónicos auténticos, esta casa tradicional ofrece una experiencia única de vida en Medellín.",
    phone: "3234567890", 
    direction: [-75.60702998954584, 6.2464458746142], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGglMhfaj0gMlj20FQH0BqgXah4H03mtI6Dg&usqp=CAU", 
    precio: "800,000,000" 
  },
  
  { 
    contact: "Isabel Gómez", 
    description: "Esta propiedad exclusiva en Medellín ofrece diseño contemporáneo y atención meticulosa al detalle para una vida sofisticada.",
    phone: "3267890123", 
    direction: [-75.61378333450854, 6.249603574126162], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EbqnLuuBtrjDScvPqA6qC7Ol5p-IdFCEjQ&usqp=CAU", 
    precio: "850,000,000" 
  },
  
  { 
    contact: "Andrés Rodríguez", 
    description: "Esta residencia moderna maximiza las vistas panorámicas de la ciudad con amplias ventanas y diseño funcional.",
    phone: "3301234567", 
    direction: [-75.61305209992366, 6.249137007174532], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LoObeovsv6vb1akXUwyvTgfUD9iAEIKIhg&usqp=CAU", 
    precio: "900,000,000" 
  },
  
  { 
    contact: "Diana Cardona", 
    description: "Con un patio trasero y espacio para actividades al aire libre, esta casa es ideal para familias activas en Medellín.",
    phone: "3334567890", 
    direction: [-75.61911840702201, 6.25018728390885], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS6kqhXpz1P9FgkGYcovSHWRSTokcs07Gx4y9er05Ti1REXX9gJ4KMn1wfT0RYopXhH0&usqp=CAU", 
    precio: "700,000,000" 
  },
  
  { 
    contact: "Sergio Vargas", 
    description: "Disfruta de terrazas soleadas y áreas ajardinadas en esta casa de estilo mediterráneo en la ciudad.",
    phone: "3367890123", 
    direction: [-75.61429450055255, 6.255542291788907], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDkdghLoRLhQ_fcrbof69I43s83CTmwPtGg&usqp=CAU", 
    precio: "750,000,000" 
  },
  
  { 
    contact: "Camila Castro", 
    description: "Con un diseño único que integra armoniosamente el entorno natural, esta casa es un verdadero refugio en la ciudad.",
    phone: "3401234567", 
    direction: [-75.6228397788728, 6.234606720018944], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KFc2MzZLQhKo2BSttlo67WQmSE6ZexaiPg&usqp=CAU", 
    precio: "800,000,000" 
  }
  ];
}
