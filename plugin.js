// Cyberpunk: Edgerunners — plugin de temas para Kino TV
// Un plugin que solo trae appThemes no ejecuta código: Kino lo carga y no llama nada.
// Si quieres una pantalla de presentación con botones para activar cada tema,
// descomenta el bloque de abajo y añade "capabilities": ["screen"] al manifiesto.

export {};

/*
export async function screen({ activeTheme }) {
  const themes = [
    { id: "night-city", label: "Night City", labelEn: "Night City" },
    { id: "arasaka", label: "Arasaka", labelEn: "Arasaka" },
    { id: "netrunner", label: "Netrunner", labelEn: "Netrunner" }
  ];
  const rows = themes.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      labelText: on ? `Desactivar ${t.label}` : `Activar ${t.label}`,
      labelTextEn: on ? `Turn off ${t.label}` : `Turn on ${t.label}`,
      onPressed: { go: { useTheme: { theme: on ? null : t.id } } }
    };
  });
  return { type: "Column", children: rows };
}

export async function screenEvent() {
  return null;
}
*/
