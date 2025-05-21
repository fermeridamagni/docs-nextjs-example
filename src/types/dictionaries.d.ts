/**
 * @description The type of the dictionary for the application.
 */
export interface Dictionary {
  header: {
    title: string;
    lang: {
      placeholder: string;
      es: string;
      en: string;
    };
    search: {
      placeholder: string;
    };
  };
  navbar: {
    products: {
      placeholder: string;
    };
  };
  introduction: {
    title: string;
    description: string;
  };
}
