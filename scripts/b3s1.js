    let link = {
  desc: "Cours 1er année : bloc B3 / Semestre 1",
  'c1.0': {
    desc: "contexte 1 : c1-2",
    link: "https://www.pearltrees.com/private/id34148812?access=183ae3d48a9.20911cc.f46960e37a00c46f5d2732ae15a411fb"
  },
  'c2.1': {
    desc: "RGPD (1) - Organismes",
    link: "https://www.pearltrees.com/private/id34181171?access=1835c7978d4.2099033.cad4e747b7ad0f425a75e7e24bbf4cb5"
  },
  'e2.1': {
    desc: "Mission 2.0",
    link: "https://www.pearltrees.com/private/id34259204?access=183ae41c3bb.20ac104.dff92a89e83f63102c5f3b65c358ccae"
  },
  'c2.2': {
    desc: "RGPD (2) - Principes",
    link: "https://www.pearltrees.com/private/id34179679?access=1835c783e8e.2098a5f.b769dbd9762a430bb0c91ac612db0bd2"
  },
  'e2.2': {
    desc: "Mission 2.1",
    link: "https://www.pearltrees.com/private/id34149883?access=183ae424472.20915fb.c93500f6b13e0c5c4615859613f98c62"
  },
  'c2.3': {
    desc: "RGPD (3) - Obligations",
    link: "https://www.pearltrees.com/private/id34747997?access=183ae42b3e1.212365d.fc0bb4e71173d408b168047026e7d742"
  },
  'e2.3':{
    desc: "Mission 2.2",
    link: "https://www.pearltrees.com/private/id34150136?access=183ae44881b.20916f8.095f77cc3be919a5e28f799edf2fae1d"
  },
  'c2.4':{
    desc: "RGPD (4) - DPO et outils",
    link: "https://www.pearltrees.com/private/id34748102?access=183ae452007.21236c6.d1d4ee60889faa7b6a9f5439669003d5"
  },
  'e2.4': {
    desc: "Application 2.1",
    link: "https://www.pearltrees.com/private/id34437764?access=183ae45ff22.20d7a84.97415bb4a7a1dc629832fbb35b93acf9"
  },
  'c3.0': {
    desc: "contexte 2 : c3",
    link: "https://www.pearltrees.com/private/id34195837?access=183ae483eda.209c97d.4be5961a52e05e0f3bea7bed7e0674ce"
  },
  'c3.1': {
    desc: "Stéphanie",
    link: "plop"
  },
  'e3.1':{
    desc: "Mission 3.1",
    link: "plop"
  },
  'c3.2': {
    desc: "stéphanie2",
    link: "plop"
  },
  'e3.2': {
    desc: "Labo 3.1",
    link: "plop"
  },
  'c3.3': {
    desc: "Cryptographie",
    link: "https://www.pearltrees.com/private/id35283331?access=183ae4e4068.21a6183.27df99f1ad84f8f7037def4ace71f4da"
  },
  'e3.3' : {
    desc: "Mission 3.2",
    link: "https://www.pearltrees.com/private/id34516998?access=183ae6a1668.20eb006.a80bc517aa4888845e28988e2539c125"
  },
  'c3.4': {
    desc: "certificat électronique",
    link: "https://www.pearltrees.com/private/id35056925?access=183ae4ec492.216ed1d.b4563f1ee42a237d23a58be0c122056d"
  },
  'e3.4': {
    desc: "Application 3.2/3.3",
    link: "https://www.pearltrees.com/private/id36946989?access=183ae6acb70.233c42d.0edaf3478aed24e19fa73139db647005"
  },
  'c3.5': {
    desc: "Signature électronique",
    link: "https://www.pearltrees.com/private/id36803746?access=183ae4f298c.23194a2.b0023a7cc15a29c2497cfbe236338cb7"
  },
  'e3.5': {
    desc: "Application 3.4",
    link: "https://www.pearltrees.com/private/id35279744?access=183ae6b24bc.21a5380.6f422df9f7585a929cfe8c15d74673bd"
  },
  'c4.0': {
    desc: "contexte 3 : c4-5",
    link: "https://www.pearltrees.com/private/id34196189?access=183ae4fd504.209cadd.97a494cbc015707456ee8278a496b04f"
  },
  'c5.1': {
    desc: "Authentification et habilitation",
    link: "https://www.pearltrees.com/private/id36532192?access=183ae50dce8.22d6fe0.5282e876c91627604fc00f01e3822410"
  },
  'e5.1': {
    desc: "Mission 5.1",
    link: "https://www.pearltrees.com/private/id35551659?access=183ae6bb37c.21e79ab.e71b88ab4fb7c1dee7543fc0532a43ad"
  },
  'c5.2': {
    desc: "droits d'accès et segmentation réseau",
    link: "https://www.pearltrees.com/private/id37397345?access=183ae5156dc.23aa361.c131f88bb226b7736584558635cab822"
  },
  'e5.2': {
    desc: "Application 5.2",
    link: "https://www.pearltrees.com/private/id35565175?access=183ae6c22df.21eae77.83cd824b5ab00646aa4dcc9bd64182d0"
  }
}

function lien( module ) {
  return link[module].link;
}

function libelle( module ) {
  return link[module].desc;
}
