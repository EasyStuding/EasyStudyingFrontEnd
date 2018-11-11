function getEnv() {
  if (process.env.NODE_ENV === 'development') {
    return {

    };
  }
  return {

  };
}

export const env = getEnv();
