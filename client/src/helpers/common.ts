
// помогает из обычного файла картинки сделать base64
export const transformFile = async (file: File): Promise<string> => {

   return new Promise(resolve => {
      const reader: FileReader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
         if (typeof (reader.result) === 'string') {
            resolve(reader.result);
         }
      };
   });
};

// делаем дату согласно нужному нам формату
export const dateHandler = (): string => {
   const month = new Date().getMonth() + 1;
   const day = new Date().getDate();
   const year = new Date().getFullYear();
   const hour = new Date().getHours();
   const minute = new Date().getMinutes();

   const resultDate = `${month} ${day} ${year} ${hour}:${minute < 10 ? '0' + minute : minute}`;

   return resultDate;
};

export const getTime = (str: string) => {
   const time = new Date(str).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

   return `at ${time}`;
};
