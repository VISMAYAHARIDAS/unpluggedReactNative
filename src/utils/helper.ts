export const formatDate = (date: Date): string => {
    return date.toLocaleDateString();
  };
  
  export const greetUser = (name: string): string => {
    return `Hello, ${name}!`;
  };
  