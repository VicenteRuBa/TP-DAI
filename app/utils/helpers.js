export const calcularAHS = (platos) => {
    const totalScore = platos.reduce((acc, plato) => acc + plato.healthScore, 0);
    return platos.length ? totalScore / platos.length : 0;
};
