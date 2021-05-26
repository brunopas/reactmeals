import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida Deliciosa, Entregue para Você</h2>
      <p>
        Escolha sua refeição favorita de nossa ampla seleção de refeições
        disponíveis e desfrute de um delicioso almoço ou jantar em casa.
      </p>
      <p>
        Todas as nossas refeições são preparadas com ingredientes de alta
        qualidade, na hora certa e claro que por chefs experientes!
      </p>
    </section>
  );
};

export default MealsSummary;
