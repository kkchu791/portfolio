import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './PrevPageButton.module.scss';

export const PrevPageButton = ({
  setCurrentTab,
  currentTab,
}) => {

  const handleOnClick = () => {
    if (currentTab) {
      setCurrentTab(currentTab - 1);
    }
  }

  return (
    <div
      className={styles.container}
      onClick={() => handleOnClick()}
    >
      <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
    </div>
  )
}

export default PrevPageButton;
