import axios from "axios";

export const getPerson = async (url, setPersonList, personList) => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    setPersonList([...personList, ...data.results]);
  } catch (error) {
    console.log(error);
  }
};
