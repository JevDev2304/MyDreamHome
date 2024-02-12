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
    phone: '3007865786',
    direction: [-75.59874302355642, 6.212294937878664],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4m0FiT5MYUxjzlxxPS7YgxewwF4rExp1wQ&usqp=CAU",
    precio: "500,000,000"
  },
  {
    contact: "Juan Valdés",
    phone: '3008792309',
    direction: [-75.59382193823679, 6.218216156626633],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9nwMifYzkgHt5ZIAcM_KEgMp6mD3dWidk0qh9Xjk0mUxn-8Uuf_CmVckus6O9VAkrg&usqp=CAU",
    precio: "600,000,000"
  },
  {
    contact: "Wilson Carvajal",
    phone: '3008792307',
    direction: [-75.6089462582197, 6.232044630968907],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-vvryFSVSshLVCuJgFuKAIJb_G39MXsWP4yuawrRFXvY0us5EDDKTjYdc6quqA8kvI&usqp=CAU",
    precio: "750,000,000"
  },
  {
    contact: "Liliana Giraldo",
    phone: '3008799307',
    direction: [-75.60641425294384, 6.23163934436887],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPT71d_qhSzf9FWWJj0R16X9k_y4ed6CGNgQ37HMJQn52CorVvT5a8jmeCo2Z2pB59Dk&usqp=CAU",
    precio: "400,000,000"
  },
  {
    contact: "Luis Galvis",
    phone: '3008799307',
    direction: [-75.59915248893098, 6.231620070678426],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DeHSOsB_D0ntuiyzbg_mK1zttqFiKHMzSw&usqp=CAU",
    precio: "550,000,000"
  },
  {
    contact: "Matilde Garcia",
    phone: '3008799807',
    direction: [-75.61050442158133, 6.237923638375033],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkp-L0p9iQY21R-vqbYk8DTo9SptAeNSjvQ&usqp=CAU",
    precio: "800,000,000"
  },
  {
    contact: "Catalina Rojas",
    phone: '3008100011',
    direction: [-75.590123, 6.230987],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrBiAYlFxta9oddExDonEglMcsx8C_-3cFw&usqp=CAU",
    precio: "350,000,000"
  },
  {
    contact: "Javier Mendoza",
    phone: '3008100012',
    direction: [-75.592345, 6.235678],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRha-JGXTKCdgiR_Sg0lU74RV8nX2u2CxaQ&usqp=CAU",
    precio: "650,000,000"
  },
  {
    contact: "Maria Gonzalez",
    phone: '3008100013',
    direction: [-75.605432, 6.239876],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiBr5U0Vcs5cMySFn0Uy2Yn_pIIh4HDQFJw&usqp=CAU",
    precio: "450,000,000"
  },
  {
    contact: "Carlos Soto",
    phone: '3008100014',
    direction: [-75.603219, 6.225678],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopyVwYCvB3MWiI2DEAajCRZhxCWQhUIRsAA&usqp=CAU",
    precio: "700,000,000"
  },
  {
    contact: "Diana Rios",
    phone: '3008100015',
    direction: [-75.612345, 6.220987],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVO9jiC4Lh7ancZuktGXfB5J13V2nSSFAzeQ&usqp=CAU",
    precio: "400,000,000"
  },
  {
    contact: "Andres Perez",
    phone: '3008100016',
    direction: [-75.598765, 6.215432],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNld-axzrNug_5E1x2aC74rV9sf3tZaGU21Q&usqp=CAU",
    precio: "550,000,000"
  },
  {
    contact: "Laura Montoya",
    phone: '3008100017',
    direction: [-75.596543, 6.229876],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmQ6yj0-rOsMho1jg91lY4px_qchnfvzBEQ&usqp=CAU",
    precio: "800,000,000"
  },
  {
    contact: "Camilo Restrepo",
    phone: '3008100018',
    direction: [-75.590876, 6.235432],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuc9gpj3_C8JFRlx1i6XGAzLKEJWnVhj-bw&usqp=CAU",
    precio: "350,000,000"
  },
  {
    contact: "Isabel Gomez",
    phone: '3008100019',
    direction: [-75.607654, 6.242345],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHpEpK4uNFVDZP3Ct5qdLSPUVEKGwkywP8Q&usqp=CAU",
    precio: "600,000,000"
  },
  {
    contact: "Sergio Medina",
    phone: '3008100020',
    direction: [-75.612987, 6.228765],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyTW5tsP2ze-TGsWJHEK7lWN-6c22n79ZZgcTRxawOkJbvcQXc0BmIazb2eZEfdS21sI&usqp=CAU",
    precio: "750,000,000"
  },
  {
    contact: "Ana Ramirez",
    phone: '3008100021',
    direction: [-75.596789, 6.221345],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVA7xRyJWDpOAResBtiUF2BAzeRMdIJueTnaw-mW4YUmLd5Ey0hJu4Ftlitiaqz2If_w&usqp=CAU",
    precio: "400,000,000"
  },
  {
    contact: "Alejandro Herrera",
    phone: '3008100022',
    direction: [-75.601234, 6.236789],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPf_2dNlcxN-aEE6u-hGCT-G1PkynNZs3JOg&usqp=CAU",
    precio: "650,000,000"
  },
  {
    contact: "Valentina Cardona",
    phone: '3008100023',
    direction: [-75.605678, 6.217890],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1i3mFhIGS0pTTvC45WQ6FsYhJikh3pBvtwQ&usqp=CAU",
    precio: "450,000,000"
  },
  {
    contact: "Hector Suarez",
    phone: '3008100024',
    direction: [-75.611234, 6.223456],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSa_dJK-9SE9chaHd9zJFalYZYfYSUyeNevQ&usqp=CAU",
    precio: "700,000,000"
  },
  {
    contact: "Adriana Lopez",
    phone: '3008100025',
    direction: [-75.599876, 6.219012],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdpd8jNTXwJlig_DBQ-rXQIxz2xFTfX8b_g&usqp=CAU",
    precio: "800,000,000"
  },
  {
    contact: "Ricardo Gutiérrez",
    phone: '3008100026',
    direction: [-75.593456, 6.233456],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNOtcDAHgqwygtJ-4AYJPgJS-VYPDhJ3lKA&usqp=CAU",
    precio: "550,000,000"
  },
  {
    contact: "Isabella Fernandez",
    phone: '3008100027',
    direction: [-75.602345, 6.227890],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsLT3NjuFzwGoHJcUiZrj7KMWlNtzUaSK-g&usqp=CAU",
    precio: "600,000,000"
  },
  {
    contact: "Miguel Torres",
    phone: '3008100028',
    direction: [-75.596789, 6.240123],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eQUD4zaJtXON4qHCI2gUm3czeeRaUU9Vmg&usqp=CAU",
    precio: "450,000,000"
  },
  {
    contact: "Elena Morales",
    phone: '3008100029',
    direction: [-75.600123, 6.231234],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEL_mJnUbwSnvLBO5ENOZANGYgskYJ-plamA&usqp=CAU",
    precio: "700,000,000"
  },
  {
    contact: "Diego Castro",
    phone: '3008100030',
    direction: [-75.610987, 6.226789],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzFqF8F6L_jOqRvIMhZJ3-y9sWv2sLwJ_PQ&usqp=CAU",
    precio: "350,000,000"
  },

  { 
    contact: "Ana María Ramírez", 
    phone: "3023456789", 
    direction: [-75.60451243911787, 6.235885119027738], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz6R_5b5nwVWiL68Hk3nkuRe1Roo8JZv2ZQ&usqp=CAU", 
    precio: "700,000,000" 
  },

  { 
    contact: "Carlos Alberto Herrera", 
    phone: "3056789012", 
    direction: [-75.6047682372133, 6.2362958862726945], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3yr1qy0IH4bnGqA-sKEzgwfxFjc3kMeHo_0eUUjK1BmuPKLTSwwQo2TW2yog9T1YYHA&usqp=CAU", 
    precio: "750,000,000" 
  },

  { 
    contact: "Laura González", 
    phone: "3089012345", 
    direction: [-75.61128502321861, 6.243088123863842], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUflF8S7zrCey6UBJFEwQgZ_tzLklFGrK_g&usqp=CAU", 
    precio: "800,000,000" 
  },

  { 
    contact: "Javier López", 
    phone: "3112345678", 
    direction: [-75.61578899852996, 6.245745744616819], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqU989tcmHx9oEmLQ-MKsJKEmLmU1lMt1sg&usqp=CAU", 
    precio: "850,000,000" 
  },

  { 
    contact: "María Fernanda Torres", 
    phone: "3145678901", 
    direction: [-75.61729041974627, 6.2357933738351194], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmmk2qxVYwCtiW_mZ5fvNIF_WFouMkNe6FA&usqp=CAU", 
    precio: "900,000,000" 
  },

  { 
    contact: "Gabriel Sánchez", 
    phone: "3178901234", 
    direction: [-75.62569623476384, 6.233925822471904], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrAXRUtL0rmwdTiM2_CqO89CoMK08efpuSw&usqp=CAU", 
    precio: "700,000,000" 
  },

  { 
    contact: "Valentina Ríos", 
    phone: "3201234567", 
    direction: [-75.63419839120657, 6.233901879455988], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7xI29crjnPSMUjjsTh0r-Jbqv0I4JNtmPQ&usqp=CAU", 
    precio: "750,000,000" 
  },

  { 
    contact: "Alejandro Martínez", 
    phone: "3234567890", 
    direction: [-75.60702998954584, 6.2464458746142], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGglMhfaj0gMlj20FQH0BqgXah4H03mtI6Dg&usqp=CAU", 
    precio: "800,000,000" 
  },

  { 
    contact: "Isabel Gómez", 
    phone: "3267890123", 
    direction: [-75.61378333450854, 6.249603574126162], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EbqnLuuBtrjDScvPqA6qC7Ol5p-IdFCEjQ&usqp=CAU", 
    precio: "850,000,000" 
  },

  { 
    contact: "Andrés Rodríguez", 
    phone: "3301234567", 
    direction: [-75.61305209992366, 6.249137007174532], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LoObeovsv6vb1akXUwyvTgfUD9iAEIKIhg&usqp=CAU", 
    precio: "900,000,000" 
  },

  { 
    contact: "Diana Cardona", 
    phone: "3334567890", 
    direction: [-75.61911840702201, 6.25018728390885], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS6kqhXpz1P9FgkGYcovSHWRSTokcs07Gx4y9er05Ti1REXX9gJ4KMn1wfT0RYopXhH0&usqp=CAU", 
    precio: "700,000,000" 
  },

  { 
    contact: "Sergio Vargas", 
    phone: "3367890123", 
    direction: [-75.61429450055255, 6.255542291788907], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDkdghLoRLhQ_fcrbof69I43s83CTmwPtGg&usqp=CAU", 
    precio: "750,000,000" 
  },

  { 
    contact: "Camila Castro", 
    phone: "3401234567", 
    direction: [-75.6228397788728, 6.234606720018944], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KFc2MzZLQhKo2BSttlo67WQmSE6ZexaiPg&usqp=CAU", 
    precio: "800,000,000" 
  }

  ];
}
