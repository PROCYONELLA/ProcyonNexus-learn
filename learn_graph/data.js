window.GRAPH_DATA = {
  "version": 1,
  "nodes": [
    { "id": "melasma", "label": "Melasma 肝斑", "type": "Disease", "session": "2026-05-23-melasma", "path": "02_Zettelkasten/Medical/Melasma 肝斑.md" },
    { "id": "uv-radiation", "label": "UV Radiation", "type": "Mechanism", "session": "2026-05-23-melasma" },
    { "id": "estrogen", "label": "Estrogen 雌激素", "type": "Mechanism", "session": "2026-05-23-melasma" },
    { "id": "facial-hyperpigmentation", "label": "Facial Hyperpigmentation 臉部色素沉澱", "type": "Symptom", "session": "2026-05-23-melasma" },
    { "id": "hydroquinone", "label": "Hydroquinone 氫醌", "type": "Drug", "session": "2026-05-23-melasma", "path": "02_Zettelkasten/Medical/Hydroquinone 氫醌.md" },
    { "id": "sunscreen", "label": "Sunscreen 防曬", "type": "Drug", "session": "2026-05-23-melasma" },
    { "id": "pih", "label": "PIH 發炎後色素沉澱", "type": "Disease", "session": "2026-05-23-melasma-recurrence" },
    { "id": "mitf", "label": "MITF 轉錄因子", "type": "Mechanism", "session": "2026-05-23-melasma-recurrence" },
    { "id": "alpha-msh", "label": "α-MSH", "type": "Mechanism", "session": "2026-05-23-melasma-recurrence" },
    { "id": "tyrosinase", "label": "Tyrosinase 酪胺酸酶", "type": "Mechanism", "session": "2026-05-23-hydroquinone" },
    { "id": "exogenous-ochronosis", "label": "Exogenous Ochronosis 外源性褐黃病", "type": "Disease", "session": "2026-05-23-hydroquinone" },
    { "id": "homogentisic-acid", "label": "Homogentisic Acid", "type": "Mechanism", "session": "2026-05-23-hydroquinone" }
  ],
  "edges": [
    { "from": "uv-radiation", "to": "melasma", "predicate": "caused_by", "session": "2026-05-23-melasma" },
    { "from": "estrogen", "to": "melasma", "predicate": "caused_by", "session": "2026-05-23-melasma" },
    { "from": "melasma", "to": "facial-hyperpigmentation", "predicate": "manifests_as", "session": "2026-05-23-melasma" },
    { "from": "melasma", "to": "hydroquinone", "predicate": "treated_by", "session": "2026-05-23-melasma" },
    { "from": "melasma", "to": "sunscreen", "predicate": "treated_by", "session": "2026-05-23-melasma" },
    { "from": "melasma", "to": "pih", "predicate": "leads_to", "session": "2026-05-23-melasma-recurrence" },
    { "from": "uv-radiation", "to": "alpha-msh", "predicate": "activates", "session": "2026-05-23-melasma-recurrence" },
    { "from": "alpha-msh", "to": "mitf", "predicate": "activates", "session": "2026-05-23-melasma-recurrence" },
    { "from": "mitf", "to": "melasma", "predicate": "leads_to", "session": "2026-05-23-melasma-recurrence" },
    { "from": "hydroquinone", "to": "tyrosinase", "predicate": "suppresses", "session": "2026-05-23-hydroquinone" },
    { "from": "hydroquinone", "to": "exogenous-ochronosis", "predicate": "leads_to", "session": "2026-05-23-hydroquinone" },
    { "from": "pih", "to": "hydroquinone", "predicate": "treated_by", "session": "2026-05-23-hydroquinone" },
    { "from": "homogentisic-acid", "to": "exogenous-ochronosis", "predicate": "leads_to", "session": "2026-05-23-hydroquinone" },
    { "from": "mitf", "to": "tyrosinase", "predicate": "activates", "session": "2026-05-23-hydroquinone" }
  ]
};
