// ============================================================================
//  Cyberpunk: Edgerunners — Temas para Kino TV
//  apiVersion 18 · solo datos + una pantalla de presentación
//  No usa red, no pide datos, no reproduce nada.
// ============================================================================

const THEMES = {
  "night-city": {
    es: "Night City",
    en: "Night City",
    descEs: "Amarillo industrial, negro profundo y cian de contraste. El look de la ciudad que nunca duerme.",
    descEn: "Industrial yellow, deep black and cyan accents. The city that never sleeps."
  },
  "arasaka": {
    es: "Arasaka",
    en: "Arasaka",
    descEs: "Rojo corporativo sobre superficies de terciopelo oscuro. Elegante, frío, amenazante.",
    descEn: "Corporate red over velvet-dark surfaces. Elegant, cold, menacing."
  },
  "chrome": {
    es: "Chrome",
    en: "Chrome",
    descEs: "Cromo pulido, acero azulado y verde radiactivo. Para quien cambió su carne por metal.",
    descEn: "Polished chrome, blue steel and radioactive green. For those who traded flesh for metal."
  }
};

const ORDER = ["night-city", "arasaka", "chrome"];

const txt = (es, en) => ({ es, en });

// ---------------------------------------------------------------------------
//  Pantalla de presentación
//  Recibe { activeTheme } — el id del tema activo, o null.
//  Devuelve un árbol de UI. Cada botón lleva su go.useTheme (solo desde un toque).
// ---------------------------------------------------------------------------
export async function screen({ activeTheme } = {}) {
  const active = ORDER.includes(activeTheme) ? activeTheme : null;

  const rows = ORDER.map((id) => {
    const t = THEMES[id];
    const isOn = active === id;

    return {
      type: "ListTile",
      leading: {
        type: "Container",
        // Cuadrito de muestra con los colores del tema
        color: SWATCH[id].bg,
        borderColor: SWATCH[id].accent,
        borderWidth: 2,
        width: 36,
        height: 36,
        child: {
          type: "Text",
          text: isOn ? "ON" : "",
          color: SWATCH[id].accent,
          fontSize: 11,
          weight: "bold"
        }
      },
      title: { type: "Text", text: txt(t.es, t.en), weight: "bold" },
      subtitle: { type: "Text", text: txt(t.descEs, t.descEn) },
      trailing: {
        type: "ElevatedButton",
        labelText: isOn ? txt("Desactivar", "Turn off") : txt("Activar", "Turn on"),
        labelTextEn: isOn ? "Turn off" : "Turn on",
        onPressed: {
          go: { useTheme: { theme: isOn ? null : id } }
        }
      }
    };
  });

  return {
    type: "Column",
    scrollable: true,
    children: [
      {
        type: "Text",
        text: txt("Cyberpunk: Edgerunners", "Cyberpunk: Edgerunners"),
        style: "headline",
        weight: "bold"
      },
      {
        type: "Text",
        text: txt(
          "Tres temas para toda la app. Activa uno y luego ajusta colores, bordes, esquinas, tamaño de letra y controles en Ajustes > Apariencia > Personalizar.",
          "Three themes for the whole app. Turn one on, then tweak colors, borders, corners, text size and player controls in Settings > Appearance > Customize."
        )
      },
      { type: "Divider" },
      ...rows,
      { type: "Divider" },
      {
        type: "Text",
        text: txt(
          "Necesita Kino 0.9.81 o posterior. Los bordes y el logo con decoración necesitan 0.9.82.",
          "Requires Kino 0.9.81 or newer. Borders and the decor logo need 0.9.82."
        ),
        style: "caption"
      }
    ]
  };
}

// ---------------------------------------------------------------------------
//  Eventos de la pantalla: el tema se cambia con go.useTheme, no aquí.
// ---------------------------------------------------------------------------
export async function screenEvent() {
  return null;
}

// ---------------------------------------------------------------------------
//  Colores de muestra para la lista (no son tokens del tema, solo UI propia)
// ---------------------------------------------------------------------------
const SWATCH = {
  "night-city": { bg: "#0A0A0C", accent: "#FCEE0A" },
  "arasaka":    { bg: "#0C0608", accent: "#FF2E4D" },
  "chrome":     { bg: "#07090B", accent: "#C9D6E3" }
};

export default { screen, screenEvent };