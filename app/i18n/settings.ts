export const fallbackLng = 'en'; // Idioma padrão caso o idioma do usuário não seja suportado
export const languages = [fallbackLng, 'pt']; // Idiomas suportados
export const defaultNS = 'common'; // O nome do seu arquivo de tradução (common.json)

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true, // Descomente para ver logs do i18next no console
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
