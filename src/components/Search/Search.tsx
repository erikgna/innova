import React from "react";

import styles from "./styles.module.scss";
import searchIcon from "../../assets/icons/search.svg";

interface ISearchProps {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ value, handleChange }: ISearchProps) => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={searchIcon} alt="Search" />
        </div>
        <input
          type="search"
          id="default-search"
          className={`${styles.input} block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FAE314] focus:border-[#FAE314] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FAE314] dark:focus:border-[#FAE314]`}
          placeholder="Procurar personagem..."
          onChange={(e) => handleChange(e.target.value)}
          value={value}
        />
      </div>
    </form>
  );
};
