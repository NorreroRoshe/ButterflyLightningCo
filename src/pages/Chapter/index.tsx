import React, { useEffect } from "react";
import { GoodsCatalogue } from "../../components/GoodsCatalogue/GoodsCatalogue";

import cls from "./Chapter.module.scss";

const Chapter: React.FC = () => {
      return (
            <div className={`${cls.container} ${cls.chapter__container}`}>
                  <div className={cls.chapter__mt}>
                        <GoodsCatalogue />
                  </div>
            </div>
      );
};

export default Chapter;
