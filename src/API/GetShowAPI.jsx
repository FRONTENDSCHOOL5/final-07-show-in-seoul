const GetShowAPI = async (getShow, setShow, getTotalShow, setTotalShow) => {
  try {
    while (true) {
      const response = await fetch(
        'http://openapi.seoul.go.kr:8088/774c79676c79686f31303566616f7871/json/culturalEventInfo/' +
          (getShow.length + 1) +
          '/' +
          (getShow.length + 1000),
      );

      if (!response.ok) throw new Error('ERROR');

      const resArray = await response.json();
      if (getTotalShow === 0) {
        setTotalShow(resArray.culturalEventInfo.list_total_count);
        continue;
      }
      if (getShow.length >= getTotalShow) {
        break;
      }
      setShow([...getShow, ...resArray.culturalEventInfo.row]);
    }
  } catch (e) {
    console.error(e);
  }
};

export default GetShowAPI;
