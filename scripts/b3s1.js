let link = {
  desc: "Cours 1er année : bloc B3 / Semestre 1",
  c01: {
    desc: "RGPD (1) - Organismes",
    link: "https://www.pearltrees.com/private/id34181171?access=1835c7978d4.2099033.cad4e747b7ad0f425a75e7e24bbf4cb5"
  },
  c02: {
    desc: "RGPD (2) - Principes",
    link: "https://www.pearltrees.com/private/id34179679?access=1835c783e8e.2098a5f.b769dbd9762a430bb0c91ac612db0bd2"
  },
}

function link( module ) {
  return link[module].link;
}
