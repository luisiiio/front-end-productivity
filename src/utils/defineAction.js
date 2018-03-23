export const defineAccion =
    (raiz, sufijos) =>
    sufijos.reduce((acc, sufijo) =>
        Object.assign({}, acc, {
            [`${sufijo}`]: `${raiz}::${sufijo}`
        }), {});