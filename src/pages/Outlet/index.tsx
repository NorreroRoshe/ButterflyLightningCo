import React from "react";
import cls from "./Outlet.module.scss";
import { GoodsCatalogue } from "../../components/GoodsCatalogue/GoodsCatalogue";

const Outlet: React.FC = () => {
  return (
    <div className={`${cls.container} ${cls.outlet__container}`}>
      <div className={cls.outlet__mt}>
        <h2 className={cls.outlet__title}>Распродажа</h2>
        <GoodsCatalogue />
      </div>
    </div>
  );
};

export default Outlet;
