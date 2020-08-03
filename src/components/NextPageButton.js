import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from './NextPageButton.module.scss';

export const NextPageButton = ({
  setCurrentTab,
  currentTab,
}) => {

  const handleOnClick = () => {
    if (currentTab < 2) {
      setCurrentTab(currentTab + 1);
    }
  }

  return (
    <div
      className={styles.container}
      onClick={() => handleOnClick()}
    >
      <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
    </div>
  )
}

export default NextPageButton;
