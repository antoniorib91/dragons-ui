import React from 'react';
import styles from './styles.module.scss';

type IProps = {
  loading?: boolean,
};

const defaultProps = {
  loading: false,
};

const Loader: React.FC<IProps> = (props: IProps) => {
  const { loading } = props;
  return (
    <>
      {
        loading && (
          <div className={styles.container}>
            <div className={styles.loading_circle}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        )
      }
    </>
  );
};

Loader.defaultProps = defaultProps;

export default Loader;
